"use client";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
    totalItems: number;
};

function Pagination({ totalItems }: Props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const limit = parseInt(searchParams?.get("limit") ?? "20");
    const page = parseInt(searchParams?.get("page") ?? "1");
    const { replace } = useRouter();

    const length = Math.ceil(totalItems / limit);

    const pages = Array.from({ length }, (_, i) => 0 + i + 1);
    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        replace(`${pathname}?${params.toString()}`);
    };
    const handlePrev = () => {
        const prevPage = page - 1;
        if (prevPage <= 0) return;
        handlePageChange(prevPage);
    };
    const handleNext = () => {
        const nextPage = page + 1;
        if (nextPage > length) return;
        handlePageChange(nextPage);
    };
    return (
        <div className="flex flex-row items-center gap-2">
            {page > 1 ? (
                <span
                    className="bg-[#F1F1F1] text-[#626262] font-medium text-sm px-5 py-3 rounded-lg cursor-pointer hover:bg-[#1B4B66] hover:text-[#FFFFFF] transition-all duration-500 ease-in-out"
                    onClick={handlePrev}
                >
                    Prev
                </span>
            ) : (
                ""
            )}
            <ul className="flex flex-row items-center gap-1 list-none p-1 bg-[#F1F1F1] rounded-lg">
                {pages.map((item, index) => (
                    <li
                        key={index}
                        className={clsx(
                            "text-[#626262] font-medium text-sm px-5 py-2 rounded-lg cursor-pointer hover:bg-[#1B4B66] hover:text-[#FFFFFF] transition-all duration-500 ease-in-out",
                            {
                                "bg-[#1B4B66] text-[#FFFFFF]": page === item,
                            }
                        )}
                        onClick={() => handlePageChange(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {page < length ? (
                <span
                    className="bg-[#F1F1F1] text-[#626262] font-medium text-sm px-5 py-3 rounded-lg cursor-pointer hover:bg-[#1B4B66] hover:text-[#FFFFFF] transition-all duration-500 ease-in-out"
                    onClick={handleNext}
                >
                    Next
                </span>
            ) : (
                ""
            )}
        </div>
    );
}

export default Pagination;
