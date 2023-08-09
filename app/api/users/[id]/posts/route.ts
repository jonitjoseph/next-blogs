import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async (request: any, { params }: any) => {
    try {
        await connectToDB();
        const blogs = await Blog.find({ creator: params.id }).populate("creator");
        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to fetch prompts created by user" }), { status: 500 })
    }
} 