"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    return (
        <nav className="flex justify-between items-center w-full mb-16 pt-4">
            <Link href='/' className="flex justify-center items-center gap-2">
                <Image src="/assets/images/logo.svg" alt="Logo" width={30} height={30} className="object-contain"></Image>
                <p className="max-sm:hidden">Next Blogs</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/new'>Write</Link>
                    <button type='button'>Sign Out</button>
                    <Link href='/profile'>Profile</Link>
                </div>
                <button className="mx-2">Signin</button>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                <div className='flex'>
                    <button onClick={() => setToggleDropdown(!toggleDropdown)}>Dropdown</button>
                    {toggleDropdown && (
                        <div className='flex flex-col justify-end mt-3 absolute top-full right-0 w-full p-5 gap-2 min-w-[210px] bg-gray-100 rounded-lg'>
                            <Link href='/new' onClick={() => setToggleDropdown(false)}>Write</Link>
                            <Link href='/profile' onClick={() => setToggleDropdown(false)}>Profile</Link>
                            <button type='button'
                                onClick={() => { setToggleDropdown(false); }}>Sign Out
                            </button>
                        </div>
                    )}
                </div>
                <button className="mx-2">Signin</button>
            </div>

        </nav>
    )
}