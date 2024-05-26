"use client";
import { Product } from "@/app/lib/defenitions";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { reviews } from "@/app/lib/placeholder-data";
import clsx from "clsx";
import React, { useState } from "react";
import Card from "./product-card";

type Props = {
    product: Product | undefined;
    relatedProducts: Product[] | [];
};

function TabPanel({ product, relatedProducts }: Props) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="w-full flex flex-col mt-7 md:mt-14 mb-12 md:mb-24 px-5">
            <div className="w-full py-2 mb-5 px-2 md:px-4 rounded-xl font-medium text-sm md:text-base bg-[#F1F1F1] flex flex-row justify-between md:justify-start items-center md:gap-6">
                <span
                    onClick={() => setActiveTab(0)}
                    className={clsx(
                        "py-1 px-4 rounded-lg cursor-pointer transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]": activeTab === 0,
                            "text-[#626262]": activeTab !== 0,
                        }
                    )}
                >
                    Product description
                </span>
                <span
                    onClick={() => setActiveTab(1)}
                    className={clsx(
                        "py-1 px-4 rounded-lg cursor-pointer transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]": activeTab === 1,
                            "text-[#626262]": activeTab !== 1,
                        }
                    )}
                >
                    Related Products
                </span>
                <span
                    onClick={() => setActiveTab(2)}
                    className={clsx(
                        "py-1 px-4 rounded-lg cursor-pointer transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]": activeTab === 2,
                            "text-[#626262]": activeTab !== 2,
                        }
                    )}
                >
                    Ratings and Reviews
                </span>
            </div>
            <p
                className={clsx(
                    {
                        "grid-rows-[1fr] opacity-100": activeTab === 0,
                        "grid-rows-[0fr] opacity-0 h-0": activeTab !== 0,
                    },
                    "grid overflow-hidden transition-all ease-in-out duration-500 text-[#626262] font-medium text-sm md:text-base"
                )}
            >
                {product?.description}
            </p>
            <div
                className={clsx(
                    {
                        "grid-rows-[1fr] opacity-100": activeTab === 1,
                        "grid-rows-[0fr] opacity-0 h-0": activeTab !== 1,
                    },
                    "grid overflow-hidden transition-all ease-in-out duration-500"
                )}
            >
                <div className="w-full flex flex-wrap justify-center items-start gap-8 gap-y-8 md:gap-y-16">
                    {relatedProducts.map((item, index) => (
                        <Card product={item} key={index} />
                    ))}
                </div>
            </div>
            <div
                className={clsx(
                    {
                        "grid-rows-[1fr] opacity-100": activeTab === 2,
                        "grid-rows-[0fr] opacity-0 h-0": activeTab !== 2,
                    },
                    "grid overflow-hidden transition-all ease-in-out duration-500"
                )}
            >
                <div className="w-fit flex flex-col gap-8 gap-y-8 mx-auto">
                    {reviews.map((item, index) => (
                        <div key={index} className="w-fit">
                            <h2 className="text-[#1B4B66] font-medium text-sm md:text-base">
                                {item.username}
                            </h2>
                            <span className="flex flex-row items-center gap-1 text-[#FF8C4B]">
                                {item.rating && item.rating < 1 ? (
                                    <StarIconOutline
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                ) : (
                                    <StarIconSolid
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                )}
                                {item.rating && item.rating < 2 ? (
                                    <StarIconOutline
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                ) : (
                                    <StarIconSolid
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                )}
                                {item.rating && item.rating < 3 ? (
                                    <StarIconOutline
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                ) : (
                                    <StarIconSolid
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                )}
                                {item.rating && item.rating < 4 ? (
                                    <StarIconOutline
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                ) : (
                                    <StarIconSolid
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                )}
                                {item.rating && item.rating < 5 ? (
                                    <StarIconOutline
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                ) : (
                                    <StarIconSolid
                                        width={24}
                                        height={24}
                                        className="w-2 h-2 md:w-4 md:h-4"
                                    />
                                )}
                            </span>
                            <p className="text-[#626262] font-medium text-xs md:text-sm">
                                {item.review}
                            </p>
                            <span className="text-[#E21D1D] font-medium text-xs md:text-sm">
                                {item.date.toUTCString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TabPanel;
