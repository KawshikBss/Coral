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
import { CategoryItem } from "@/app/lib/defenitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = { categoryList: CategoryItem[] };

function Navbar({ categoryList }: Props) {
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch((prev) => !prev);
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") ?? "");
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(event.target.value);
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        if (query.length) {
            params.set("query", query);
        } else {
            params.delete("query");
        }
        replace(`shop?${params.toString()}`);
    };
    const handleEnterKeyPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
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
                    {categoryList.map((item, index) => (
                        <li className="text-[#171520]" key={index}>
                            <Link href={`/shop?category=${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex felx-row justify-between items-center gap-6">
                <span className="hidden md:flex felx-row justify-between items-center bg-[#F1F1F1] rounded gap-1 py-3 px-2">
                    <MagnifyingGlassIcon
                        className="w-6 text-[#13101E] cursor-pointer"
                        onClick={handleSearch}
                    />
                    <input
                        className="placeholder:text-[#626262] w-80 bg-transparent"
                        placeholder="Search for products or brands....."
                        value={query}
                        onChange={handleQueryChange}
                        onKeyDown={handleEnterKeyPress}
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
                    <Link href={"/profile/personal-information"}>
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
