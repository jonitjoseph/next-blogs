import Image from "next/image";

async function fetchContent(id: any) {
    const response = await fetch(`http://localhost:3000/api/blog/${id}`);
    const data = await response.json();
    return data;
}

export default async function Content({ params }: any) {
    const data = await fetchContent(params.id);

    return (
        <>
            <section className="w-full flex justify-center items-center flex-col">
                <h1 className="m-5 text-5xl sm:text-6xl text-gray-900">{data.title}</h1>
                <p className="m-5 text-lg sm:text-xl text-gray-600 max-w-2xl text-center">#{data.tag}</p>
                <div className="flex justify-center items-center">
                    <Image
                        src={data.creator.image ?? '/assets/images/logo.svg'}
                        width={32}
                        height={32}
                        alt="user avatar"
                        className="rounded-full"
                    />
                    <p className="m-2 text-lg sm:text-xl text-gray-600 max-w-2xl text-center">{data.creator.username}</p>
                </div>
                <p className="mx-8 my-16 leading-loose text-lg">{data.content}</p>
            </section>
        </>
    )
}