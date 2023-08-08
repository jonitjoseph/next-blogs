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
                <form className="m-10 w-full max-w-4xl flex flex-col gap-1 border rounded-lg" onSubmit={handleSubmit}>
                    <label className="mx-8 mt-4 text-sm">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        required
                        value={blog.title}
                        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                        className="m-2 mx-8 p-4 h-full rounded-lg border shadow-sm focus-visible:outline-none" />
                    <label className="mx-8 text-sm">Tag</label>
                    <input
                        type="text"
                        placeholder="#Tag"
                        required
                        value={blog.tag}
                        onChange={(e) => setBlog({ ...blog, tag: e.target.value })}
                        className="m-2 mx-8 p-4 h-full rounded-lg border shadow-sm focus-visible:outline-none" />
                    <label className="mx-8 text-sm">Content</label>
                    <textarea
                        placeholder='Tell your story...'
                        required
                        value={blog.content}
                        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                        className="m-2 mx-8 p-4 h-full min-h-[240px] rounded-lg border shadow-sm focus-visible:outline-none" />
                    <div className="flex justify-center">
                        <button
                            className="h-10 m-4 max-w-lg min-w-[40%] inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-800 hover:text-slate-50 border-2"
                            type="submit"
                            disabled={publish}
                        >Publish</button>
                    </div>
                </form>
            </section>
        </>
    )
}