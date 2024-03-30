import {
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                <ul className="flex flex-row gap-5">
                    {navLinks.map((item, index) => (
                        <li className="text-[#171520]" key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex felx-row justify-between items-center gap-6">
                <span className="flex felx-row justify-between items-center bg-[#F1F1F1] rounded gap-1 py-3 px-2">
                    <MagnifyingGlassIcon className="w-6 text-[#13101E]" />
                    <input
                        className="placeholder:text-[#626262] w-80 bg-transparent"
                        placeholder="Search for products or brands....."
                    />
                </span>
                <div className="flex felx-row justify-between items-center gap-5">
                    <HeartIcon className="w-6 text-[#1B4B66]" />
                    <UserIcon className="w-6 text-[#1B4B66]" />
                    <ShoppingBagIcon className="w-6 text-[#1B4B66]" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
