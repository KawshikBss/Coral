"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const tabs = [
    {
        name: "Personal Information",
        href: "personal_information",
    },
    {
        name: "My Orders",
        href: "my_orders",
    },
    {
        name: "My Wishlist",
        href: "my_wishlist",
    },
    {
        name: "My Reviews",
        href: "my_reviews",
    },
];

function SidePanel({}: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const changeTab = (tabname: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("tab", tabname);
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="w-1/5 bg-[#F1F1F1] rounded-lg flex flex-col">
            {tabs.map((item, index) => (
                <span
                    className={clsx(
                        "w-full flex flex-row justify-between items-center py-4 px-2 cursor-pointer border-l-4",
                        {
                            "border-[#1B4B66]":
                                item.href === searchParams.get("tab"),
                            "border-transparent":
                                item.href !== searchParams.get("tab"),
                        }
                    )}
                    onClick={() => changeTab(item.href)}
                    key={index}
                >
                    <span
                        className={clsx(
                            "text-base font-medium text-[#13101E]",
                            {
                                "text-[#1B4B66]":
                                    item.href === searchParams.get("tab"),
                            }
                        )}
                    >
                        {item.name}
                    </span>
                    <ChevronRightIcon width={24} height={24} />
                </span>
            ))}
        </div>
    );
}

export default SidePanel;
