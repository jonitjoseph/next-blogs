"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form";

export default function Edit() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const blogId = searchParams.get("id");
    const [publish, setPublish] = useState(false);
    const [blog, setBlog] = useState({ title: '', tag: '', imageUrl: '', content: '' });

    const getBlogDetails = async () => {
        const response = await fetch(`/api/blog/${blogId}`);
        const data = await response.json();
        setBlog({
            title: data.title,
            tag: data.tag,
            imageUrl: data.imageUrl,
            content: data.content
        });
    };

    useEffect(() => {
        if (blogId) getBlogDetails();
    }, [blogId]);

    const updateBlog = async (e: any) => {
        e.preventDefault();
        setPublish(true);
        if (!blogId) return alert("Missing blogId!");
        try {
            const response = await fetch(`/api/blog/${blogId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    title: blog.title,
                    tag: blog.tag,
                    imageUrl: blog.imageUrl,
                    content: blog.content
                }),
            });
            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPublish(false);
        }
    };

    return (
        <Form
            type='Edit'
            blog={blog}
            setBlog={setBlog}
            publish={publish}
            handleSubmit={updateBlog}
        />
    );
};
