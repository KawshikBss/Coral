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
        href: "",
    },
    {
        name: "Watches",
        href: "",
    },
    {
        name: "Skincare",
        href: "",
    },
    {
        name: "Jewellery",
        href: "",
    },
    {
        name: "Apparels",
        href: "",
    },
];

function Navbar({}: Props) {
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch((prev) => !prev);
    return (
        <div className="w-full bg-[#FFF] flex felx-row justify-between items-center py-4 px-5">
            <div className="flex felx-row justify-between items-center gap-5">
                <Image
                    src={"/logo.png"}
                    alt="CORA'L"
                    width={108}
                    height={22}
                    className=""
                />
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
                    <HeartIcon className="w-6 text-[#1B4B66]" />
                    <UserIcon className="w-6 text-[#1B4B66]" />
                    <ShoppingBagIcon className="w-6 text-[#1B4B66]" />
                </div>
            </div>
            <Suspense fallback={<></>}>
                <SearchModal show={showSearch} toggle={toggleSearch} />
            </Suspense>
        </div>
    );
}

export default Navbar;
