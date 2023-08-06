type formProps = {
    type: any,
    blog: any,
    setBlog: any,
    publish: any,
    handleSubmit: any
}

export default function Form({ type, blog, setBlog, publish, handleSubmit }: formProps) {
    return (
        <>
            <section className="w-full max-w-full flex flex-col justify-start items-center">
                <h1 className="mt-5 text-5xl sm:text-6xl text-gray-900">{type} Post</h1>
                <form className="mt-10 w-full max-w-4xl flex flex-col gap-1 bg-gray-100 rounded-lg">
                    <div className="flex justify-center">
                        <button
                            className="h-10 m-4 max-w-lg min-w-[40%] inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-300"
                            type="submit"
                            disabled={publish}
                        >Publish</button>
                    </div>
                    <input
                        type="text"
                        placeholder="Title"
                        required
                        className="m-2 p-4 h-full rounded-lg outline-none" />
                    <input
                        type="text"
                        placeholder="#Tags"
                        required
                        className="m-2 p-4 h-full rounded-lg outline-none" />
                    <textarea
                        placeholder='Tell your story...'
                        required
                        className="m-2 p-4 h-full min-h-[240px] rounded-lg outline-none" />
                </form>
            </section>
        </>
    )
}