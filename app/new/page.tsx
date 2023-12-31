"use client"

import Form from "@/components/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function New() {
    
    const router = useRouter();
    const { data: session } = useSession({ required: true });
    const [publish, setPublish] = useState(false);
    const [blog, setBlog] = useState({ title: '', tag: '', imageUrl:'', content: '' });

    const writeContent = async (e: any) => {
        e.preventDefault();
        setPublish(true);
        try {
            const response = await fetch("/api/blog/new", {
                method: "POST",
                body: JSON.stringify({
                    title: blog.title,
                    tag: blog.tag,
                    imageUrl: blog.imageUrl,
                    content: blog.content,
                    userId: session?.user,
                }),
            });
            if (response.ok) {
                router.push('/');
            } else {
                console.log(response);
                window.alert("Server Error! Unable to publish!")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPublish(false);
        }
    };

    return (
        <>
            <Form
                type="New"
                blog={blog}
                setBlog={setBlog}
                publish={publish}
                handleSubmit={writeContent}
            />
        </>
    )
}