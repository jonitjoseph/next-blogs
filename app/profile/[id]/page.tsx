"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Profile";

export default function UserProfile({ params }: any) {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();
        setUserPosts(data);
    };

    useEffect(() => {
        if (params?.id) fetchPosts();
    }, [params.id]);
    
    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s stories and be inspired by the power of their imagination`}
            data={userPosts}
        />
    )
}