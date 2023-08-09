import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async (request: any, { params }: any) => {
    try {
        await connectToDB();
        const blog = await Blog.findById(params.id).populate("creator");
        if (!blog) return new Response(JSON.stringify({ message: "Blog Not Found" }), { status: 404 });
        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}

export const PATCH = async (request: any, { params }: any) => {
    const { title, tag, imageUrl, content } = await request.json();
    try {
        await connectToDB();
        const existingBlog = await Blog.findById(params.id);
        if (!existingBlog) {
            return new Response(JSON.stringify({ message: "Blog not found" }), { status: 404 });
        }
        existingBlog.title = title;
        existingBlog.tag = tag;
        existingBlog.imageUrl = imageUrl;
        existingBlog.content = content;
        await existingBlog.save();
        return new Response(JSON.stringify({ message: "Successfully updated the Blog" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error Updating Blog" }), { status: 500 });
    }
};

export const DELETE = async (request: any, { params }: any) => {
    try {
        await connectToDB();
        await Blog.findByIdAndRemove(params.id);
        return new Response(JSON.stringify({ message: "Blog deleted successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error deleting prompt" }), { status: 500 });
    }
};