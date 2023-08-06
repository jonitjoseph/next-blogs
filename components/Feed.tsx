import Post from "./Post";

export default function Feed() {
    return (
        <>
            <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
                <form className="relative w-full flex justify-center items-center">
                    <input
                        type="text"
                        placeholder='Search'
                        required
                        className="m-4 p-4 block w-full rounded-full border text-center outline-none focus:bg-gray-50 focus:border-gray-300" />
                </form>
                <div className="m-4 flex flex-col gap-4">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </section>
        </>
    )
}