"use client"

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton() {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <>Loading...</>
    }
    if (status === "authenticated") {
        return (
            <Link href={'/profile'}>Profile</Link>
        )
    }
    return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign Out</button>
}