export async function GET(request: any) {
    return new Response(JSON.stringify({ message: 'Hello, Next.js!' }), { status: 200 });
}