"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { Suspense, useState } from "react";
import SearchModal from "./search-modal";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    show: boolean;
    toggle: () => void;
};

function Search({ show, toggle }: Props) {
    const [query, setQuery] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(event.target.value);
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        params.set("query", query);
        toggle();
        setQuery("");
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <span className="hidden md:flex felx-row justify-between items-center bg-[#F1F1F1] rounded gap-1 py-3 px-2">
            <MagnifyingGlassIcon
                className="w-6 text-[#13101E] cursor-pointer"
                onClick={handleSearch}
            />
            <input
                className="placeholder:text-[#626262] w-80 bg-transparent"
                placeholder="Search for products or brands....."
                onChange={handleQueryChange}
            />
            <Suspense fallback={<></>}>
                <SearchModal
                    show={show}
                    toggle={toggle}
                    handleSearch={handleSearch}
                    query={query}
                    handleQueryChange={handleQueryChange}
                />
            </Suspense>
        </span>
    );
}

export default Search;
