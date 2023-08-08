"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type CustomUser = {
    id: string;
};

declare module 'next-auth' {
    interface Session {
        user: CustomUser;
    }
}

export default function Post({ post }: any) {
    const { data: session } = useSession();
    const router = useRouter();

    const handleProfileClick = () => {
        if (post.creator._id === session?.user?.id) return router.push("/profile");
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };

    return (
        <>
            <div className="w-screen max-w-[80%] min-w-[380px] rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex gap-4 items-center cursor-pointer" onClick={handleProfileClick}>
                        <Image src={post.creator.image} alt="Avatar" width={24} height={24} className="object-contain rounded-full"></Image>
                        {post.creator.username}
                        <div className="text-sm text-slate-500 dark:text-slate-400">Date</div>
                    </div>
                    <div className="text-2xl font-semibold leading-none tracking-tight">{post.title}</div>
                </div>
                <div className="p-6 pt-0">{post.content}</div>
                <div className="flex items-center p-6 pt-0">{post.tag}</div>
            </div>
        </>
    )
}