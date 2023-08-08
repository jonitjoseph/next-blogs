import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async (req: any) => {
    try {
        await connectToDB();
        const blogs = await Blog.find({}).populate('creator')
        // const blogs = await Blog.find({})
        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to fetch blogs!" }), { status: 500 })
    }
} 