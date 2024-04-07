import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import SidePanel from "../ui/profile/side-panel";
import ProfileEditForm from "../ui/profile/profile-edit-form";

function Profile({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div className="w-full h-full">
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    { name: "My Profile", href: "/profile" },
                ]}
            />
            <div className="w-full flex flex-row justify-between items-center px-4 mt-3 md:mt-7 mb-3 md:mb-6">
                <h1 className="text-[#1B4B66] font-semibold text-2xl md:text-4xl">
                    Checkout
                </h1>
                <Link href={"/logout"}>
                    <span className="cursor-pointer w-full flex justify-center items-center gap-2 py-2 px-6 rounded-lg bg-white text-[#1B4B66] border-[#1B4B66] border-2 font-semibold text-sm">
                        <PowerIcon width={24} height={24} />
                        Logout
                    </span>
                </Link>
            </div>
            <div className="w-full px-4 flex flex-row items-start gap-5 mb-24">
                <SidePanel />
                <ProfileEditForm
                    tabname={
                        searchParams.tab ? searchParams.tab.toString() : ""
                    }
                />
            </div>
        </div>
    );
}

export default Profile;
