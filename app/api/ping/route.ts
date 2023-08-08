export async function GET(req: any) {
    return new Response(JSON.stringify({ message: 'Hello, Next.js!' }), { status: 200 });
}