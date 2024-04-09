"use client";
import {
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import SearchModal from "../home/search-modal";

type Props = {};

const navLinks = [
    {
        name: "Handbags",
        href: "/shop?category=handbags",
    },
    {
        name: "Watches",
        href: "/shop?category=watches",
    },
    {
        name: "Skincare",
        href: "/shop?category=skincare",
    },
    {
        name: "Jewellery",
        href: "/shop?category=jewellery",
    },
    {
        name: "Apparels",
        href: "/shop?category=apparels",
    },
];

function Navbar({}: Props) {
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch((prev) => !prev);
    return (
        <div className="w-full bg-[#FFF] flex felx-row justify-between items-center py-4 px-5">
            <div className="flex felx-row justify-between items-center gap-5">
                <Link href={"/"}>
                    <Image
                        src={"/logo.png"}
                        alt="CORA'L"
                        width={108}
                        height={22}
                        className=""
                    />
                </Link>
                <ul className="hidden md:flex flex-row gap-5">
                    {navLinks.map((item, index) => (
                        <li className="text-[#171520]" key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex felx-row justify-between items-center gap-6">
                <span className="hidden md:flex felx-row justify-between items-center bg-[#F1F1F1] rounded gap-1 py-3 px-2">
                    <MagnifyingGlassIcon className="w-6 text-[#13101E]" />
                    <input
                        className="placeholder:text-[#626262] w-80 bg-transparent"
                        placeholder="Search for products or brands....."
                    />
                </span>
                <div className="flex felx-row justify-between items-center gap-5">
                    <MagnifyingGlassIcon
                        className="md:hidden w-6 text-[#1B4B66]"
                        onClick={toggleSearch}
                    />
                    <Link href={"/profile/my-wishlist"}>
                        <HeartIcon className="w-6 text-[#1B4B66]" />
                    </Link>
                    <Link href={"/profile"}>
                        <UserIcon className="w-6 text-[#1B4B66]" />
                    </Link>
                    <Link href={"/my-cart"}>
                        <ShoppingBagIcon className="w-6 text-[#1B4B66]" />
                    </Link>
                </div>
            </div>
            <Suspense fallback={<>Loading...</>}>
                <SearchModal show={showSearch} toggle={toggleSearch} />
            </Suspense>
        </div>
    );
}

export default Navbar;
