import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";

export const POST = async (req: any) => {
    const session = await getServerSession();
    if (!session) {
        return new Response("Unauthorized!", { status: 401 })
    }
    const { userId, title, tag, content } = await req.json();
    try {
        await connectToDB();
        const newBlog = new Blog({
            creator: userId.id,
            title,
            tag,
            content
        });
        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        return new Response("Failed to create blog!", { status: 500 })
    }
}