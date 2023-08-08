import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { connectToDB } from '@/utils/database';
import User from "@/models/user";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    callbacks: {
        async session({ session }: any) {
            await connectToDB();
            const user = session.user.name;
            const correctedUser = user.replace(" ", "").toLowerCase();
            const sessionUser = await User.findOne({ username: correctedUser });
            if (sessionUser) {
                session.user.id = sessionUser._id.toString();
            }
            return session;
        },
        async signIn({ profile }: any) {
            try {
                await connectToDB();
                const userExists = await User.findOne({ username: profile.login });
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.login.replace(" ", "").toLowerCase(),
                        image: profile.avatar_url,
                    });
                }
                return true
            } catch (error: any) {
                console.log("Error checking if user exists: ", error.message);
                return false
            }
        },
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };