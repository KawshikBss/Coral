"use client";
import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { formatPathName } from "../lib/utils";
import SidePanel from "../ui/profile/side-panel";

function ProfileLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const breadCrumbs = formatPathName(pathname);

    return (
        <div className="w-full h-full">
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <div className="w-full flex flex-row justify-between items-center px-4 mt-3 md:mt-7 mb-3 md:mb-6">
                <h1 className="text-[#1B4B66] font-semibold text-xl md:text-4xl">
                    {breadCrumbs[breadCrumbs.length - 1].name}
                </h1>
                <Link href={"/logout"}>
                    <span className="cursor-pointer w-full flex justify-center items-center gap-2 py-2 px-4 md:px-6 rounded-lg bg-white text-[#1B4B66] border-[#1B4B66] border-2 font-semibold text-xs md:text-sm">
                        <PowerIcon width={24} height={24} className="w-6 h-6 md:w-5 md:h-5" />
                        Logout
                    </span>
                </Link>
            </div>

            <div className="w-full px-4 flex flex-col md:flex-row items-start gap-5 mb-24">
                <SidePanel />
                {children}
            </div>
        </div>
    );
}

export default ProfileLayout;
