"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type Props = {
    show: boolean;
    toggle: () => void;
};

function SearchModal({ show, toggle }: Props) {
    const [query, setQuery] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = () => {
        toggle();
        const params = new URLSearchParams(searchParams);
        if (query.length) {
            params.set("query", query);
        } else {
            params.delete("query");
        }
        replace(`shop?${params.toString()}`);
    };
    return (
        <div
            className={`${
                show ? "scale-1" : "scale-0"
            }  transition-all duration-500 ease-in-out bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full h-full p-6`}
            onClick={toggle}
        >
            <div
                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <span className="flex felx-row justify-between items-center bg-[#F1F1F1] rounded gap-1 py-3 px-2">
                    <input
                        className="placeholder:text-[#626262] w-80 bg-transparent"
                        placeholder="Search for products or brands....."
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <MagnifyingGlassIcon
                        className={clsx(
                            query?.length ? "w-6 scale-1" : "w-0 h-0 scale-0",
                            "text-[#13101E] transition-all duration-500 ease-in-out"
                        )}
                        onClick={handleSearch}
                    />
                    <XMarkIcon
                        className={clsx(
                            query?.length ? "w-0 h-0 scale-0" : "w-6 scale-1",
                            "text-[#13101E] transition-all duration-500 ease-in-out"
                        )}
                        onClick={toggle}
                    />
                </span>
            </div>
        </div>
    );
}

export default SearchModal;
