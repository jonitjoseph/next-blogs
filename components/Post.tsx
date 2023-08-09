"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

type CustomUser = {
    image: string;
    id: string;
};

declare module 'next-auth' {
    interface Session {
        user: CustomUser;
    }
}

export default function Post({ post, handleEdit, handleDelete, handleTagClick }: any) {
    const { data: session } = useSession();
    const router = useRouter();
    const pathName = usePathname();

    const handleProfileClick = () => {
        if (post.creator._id === session?.user?.id) return router.push("/profile");
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };

    const handleBlogClick = () => {
        router.push(`/content/${post._id}`);
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(new Date(post.date));

    return (
        <>
            <div className="w-screen max-w-[80%] min-w-[380px] rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex gap-4 mb-2 items-center cursor-pointer" onClick={handleProfileClick}>
                        <Image src={post.creator.image} alt="Avatar" width={24} height={24} className="object-contain rounded-full"></Image>
                        {post.creator.username}
                        <div className="text-sm text-slate-500 dark:text-slate-400">{formattedDate}</div>
                    </div>
                    <div className="mx-1 text-4xl leading-none tracking-tight cursor-pointer" onClick={handleBlogClick}>{post.title}</div>
                </div>
                {/* <div className="flex items-center"> */}
                    <div className="mx-1 p-6 pt-0 truncate">{post.content}</div>
                    {/* <Image src={'/assets/images/image.jpg'} alt="Blog Image" width={128} height={128} className="object-contain mx-4"></Image> */}
                {/* </div> */}
                <div className="flex items-center p-6 pt-0"
                    onClick={() => handleTagClick && handleTagClick(post.tag)}>
                    <p className="p-1 rounded-lg border-transparent bg-slate-100 cursor-pointer min-w-[48px] text-center">
                        #{post.tag}
                    </p>
                </div>
                {session?.user.id === post.creator._id && pathName === "/profile" && (
                    <div className='px-4 py-2 flex justify-end items-center gap-4 border-t border-gray-100'>
                        <button className='p-2 rounded-md min-w-[64px] text-sm cursor-pointer hover:bg-gray-200' onClick={handleDelete}>Delete</button>
                        <button className='p-2 rounded-md min-w-[64px] border-2 text-sm cursor-pointer hover:bg-gray-800 hover:text-gray-100' onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        </>
    )
}