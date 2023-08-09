"use client"

import Image from "next/image";
import Post from "./Post";
import { useEffect, useState } from "react";

const PostList = ({ data, handleTagClick }: any) => {
    return (
        <div className='flex flex-col-reverse justify-center items-center gap-4'>
            {data.length > 0 ? (
                data.map((post: any) => (
                    <Post
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ))
            ) : (
                <>Populating your feed...</>
            )
            }
        </div>
    );
};

export default function Feed() {
    const [allPosts, setAllPosts] = useState([]);

    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/blog", { cache: 'no-store' });
        const data = await response.json();
        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filterPrompts = (searchtext: string) => {
        const regex = new RegExp(searchtext, "i");
        return allPosts.filter(
            (item: any) =>
                regex.test(item.creator.username) ||
                regex.test(item.title) ||
                regex.test(item.tag) ||
                regex.test(item.content)
        );
    };


    const handleSearchChange = (e: any) => {
        setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        const searchResult = filterPrompts(searchText);
        setSearchedResults(searchResult);
    };

    const handleTagClick = (tagName: any) => {
        setSearchText(tagName);
        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    return (
        <>
            <form className="w-full my-8 mx-auto max-w-2xl min-w-[400px] flex justify-center items-center content-center" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder='Search'
                    required
                    value={searchText}
                    onChange={handleSearchChange}
                    className="m-4 p-4 h-12 block w-full rounded-lg border text-center outline-none focus:bg-gray-50 focus:border-gray-300" />
                <button
                    className="h-12 m-4 max-w-sm min-w-[20%] inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-300"
                    type="submit">
                    <Image src="/assets/icons/search.svg" alt="Logo" width={30} height={30} className="object-contain"></Image>
                </button>
            </form>
            <div className="m-4">
                {searchText ? (
                    <PostList data={searchedResults} handleTagClick={handleTagClick} />
                ) : (
                    <PostList data={allPosts} handleTagClick={handleTagClick} />
                )}
            </div>
        </>
    )
}