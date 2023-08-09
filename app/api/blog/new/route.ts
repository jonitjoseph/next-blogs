import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";

export const POST = async (request: any) => {
    const session = await getServerSession();
    if (!session) {
        return new Response("Unauthorized!", { status: 401 })
    }
    const { userId, title, tag, imageUrl, content } = await request.json();
    try {
        await connectToDB();
        const newBlog = new Blog({
            creator: userId.id,
            title,
            tag,
            imageUrl,
            content
        });
        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to create blog!" }), { status: 500 })
    }
}