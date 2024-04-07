import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

function CheckoutForm({}: Props) {
    return (
        <div className="w-full flex flex-col">
            <span className="w-full flex flex-row justify-between items-center pb-2 border-b-2 mb-5 md:mb-10">
                <h1 className="text-[#13101E] font-semibold text-base md:text-xl">
                    Contact Information
                </h1>
                <ChevronDownIcon width={24} height={24} />
            </span>
            <div className="w-full flex flex-row items-start gap-4 md:gap-8">
                <div className="w-1/3 flex flex-col justify-between items-start gap-5">
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>Full Name</span>
                        <input
                            placeholder="Enter Name"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>Street Address</span>
                        <input
                            placeholder="Enter Address"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>City</span>
                        <input
                            placeholder="Enter City"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                </div>
                <div className="w-2/3 flex flex-col justify-between items-start gap-5">
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>Mobile Number</span>
                        <input
                            placeholder="Enter Number"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>State</span>
                        <input
                            placeholder="Enter State"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 text-[#171520] font-medium text-sm md:text-base">
                        <span>Pin Code</span>
                        <input
                            placeholder="Enter Pin Code"
                            className="w-full p-4 pr-6 rounded-md bg-[#F1F1F1] placeholder:text-xs md:placeholder:text-base placeholder:text-[#626262]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
