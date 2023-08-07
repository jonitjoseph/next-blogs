"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { SignInButton, SignOutButton } from "./AuthButtons";

export default function Navbar() {
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    return (
        <nav className="flex justify-between items-center w-full mb-16 pt-4">
            <Link href='/' className="flex justify-center items-center gap-2">
                <Image src="/assets/images/logo.svg" alt="Logo" width={30} height={30} className="object-contain"></Image>
                <p className="max-sm:hidden">Next Blogs</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/new'>Write</Link>
                        <Link href='/profile' className="flex flex-row items-center gap-2">
                            <Image
                                src={session.user?.image ?? '/assets/images/logo.svg'}
                                width={24}
                                height={24}
                                alt="user avatar"
                                className="rounded-full"
                            />Profile</Link>
                        <SignOutButton />
                    </div>
                ) : (
                    <>
                        <SignInButton />
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <button onClick={() => setToggleDropdown(!toggleDropdown)}>Dropdown</button>
                        {toggleDropdown && (
                            <div className='flex flex-col justify-end mt-3 absolute top-full right-0 w-full p-5 gap-2 min-w-[210px] bg-gray-100 rounded-lg'>
                                <Link href='/new' onClick={() => setToggleDropdown(false)}>Write</Link>
                                <Link href='/profile' onClick={() => setToggleDropdown(false)}>Profile</Link>
                                <SignOutButton />
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <SignInButton />
                    </>
                )}
            </div>

        </nav>
    )
}