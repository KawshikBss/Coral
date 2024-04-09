"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const tabs = [
    {
        name: "Personal Information",
        href: "personal-information",
    },
    {
        name: "My Orders",
        href: "my-orders",
    },
    {
        name: "My Wishlist",
        href: "my-wishlist",
    },
    {
        name: "My Reviews",
        href: "my-reviews",
    },
];

function SidePanel({}: Props) {
    const pathname = usePathname();
    const tabname = pathname.split("/").pop() || "";

    return (
        <div className="w-full md:w-1/5 bg-[#F1F1F1] rounded-lg flex flex-row md:flex-col justify-between md:justify-start">
            {tabs.map((item, index) => (
                <Link
                    href={`/profile/${item.href}`}
                    className={clsx(
                        "w-fit md:w-full flex flex-row justify-between items-center py-2 md:py-4 px-2 cursor-pointer border-b-2 md:border-b-0 md:border-l-4",
                        {
                            "border-[#1B4B66]": item.href === tabname,
                            "border-transparent": item.href !== tabname,
                        }
                    )}
                    key={index}
                >
                    <span
                        className={clsx(
                            "text-sm md:text-base font-medium text-[#13101E] text-center",
                            {
                                "text-[#1B4B66]": item.href === tabname,
                            }
                        )}
                    >
                        {item.name}
                    </span>
                    <ChevronRightIcon width={24} height={24} className="hidden md:block" />
                </Link>
            ))}
        </div>
    );
}

export default SidePanel;
