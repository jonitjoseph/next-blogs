import Post from "./Post";

export default function Profile({ name, desc, data, handleEdit, handleDelete }: any) {
    return (
        <section className='w-full flex justify-center items-center flex-col'>
            <h1 className='mt-5 text-5xl sm:text-6xl text-gray-900'>{name} Profile</h1>
            <h3 className='mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl text-center'>{desc}</h3>
            <div className='my-12 flex flex-col justify-center items-center gap-4'>
                {data.length > 0 ? (
                    data.map((post: any) => (
                        <Post
                            key={post._id}
                            post={post}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ))
                ) : (
                    <>Populating your feed...</>
                )
                }
            </div>
        </section>
    )
}