import { TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {};

function ProfileEditForm({}: Props) {
    return (
        <div className="w-full md:w-4/5 flex flex-col">
            <span className="w-full pb-2 border-b-2 mb-10">
                <h1 className="text-[#13101E] font-semibold text-base md:text-xl">
                    Personal Information
                </h1>
            </span>
            <div className="w-full flex flex-row justify-between md:justify-normal items-end gap-4">
                <Image
                    src={"/products/card1.png"}
                    alt="profile"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover object-center"
                    // layout="fixed"
                />
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="cursor-pointer w-full flex justify-center items-center gap-2 px-5 md:px-11 py-2 rounded-lg bg-[#1B4B66] text-white font-semibold text-xs md:text-sm">
                        Upload
                    </span>
                    <span className="cursor-pointer w-full flex justify-center items-center gap-2 px-5 md:px-11 py-2 rounded-lg bg-white text-[#B00020] border-[#B00020] border-2 font-semibold text-xs md:text-sm">
                        <TrashIcon width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
                        Delete
                    </span>
                </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-row items-end gap-4 mt-6">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>First Name</span>
                    <input
                        placeholder="Enter First Name"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Last Name</span>
                    <input
                        placeholder="Enter Last Name"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-row items-end gap-4 mt-1">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Email</span>
                    <input
                        placeholder="Enter Email"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-row items-end gap-4 mt-1">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Mobile Number</span>
                    <input
                        placeholder="Enter Mobile Number"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-row items-end gap-4 mt-5 mb-10">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Date of Birth</span>
                    <input
                        // placeholder="Enter Email"
                        type="date"
                        className="w-fit p-4 pr-6 rounded-md bg-[#F1F1F1] text-xs md:text-base text-[#626262]"
                    />
                </div>
            </div>
            <span className="w-full pb-2 border-b-2 mb-10">
                <h1 className="text-[#13101E] font-semibold text-base md:text-xl">
                    Change Password
                </h1>
            </span>
            <div className="w-4/5 md:w-1/5 flex flex-row items-end gap-4">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Current Password</span>
                    <input
                        placeholder="Current Password"
                        type="password"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <div className="w-4/5 md:w-1/5 flex flex-row items-end gap-4 mt-4">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>New Password</span>
                    <input
                        placeholder="New Password"
                        type="password"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <div className="w-4/5 md:w-1/5 flex flex-row items-end gap-4 mt-4">
                <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                    <span>Confirm Password</span>
                    <input
                        placeholder="Confirm Password"
                        type="password"
                        className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                    />
                </div>
            </div>
            <span className="w-fit cursor-pointer px-3 py-2 rounded-lg bg-[#1B4B66] text-white font-semibold text-xs md:text-sm self-end mt-6">
                Save Changes
            </span>
        </div>
    );
}

export default ProfileEditForm;
