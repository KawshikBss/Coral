import {
    HeartIcon,
    StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { item: number };

function Card({ item }: Props) {
    return (
        <div className="flex w-36 md:w-64 flex-col gap-2 justify-between items-start snap-center">
            <Link href={"/"} className="overflow-hidden rounded-lg">
                <Image
                    src={`/products/card${item}.png`}
                    alt={"product" + item}
                    width={286}
                    height={286}
                    className="hover:scale-125 w-36 md:w-64 h-36 md:h-64 transition-all duration-500 ease-in-out"
                />
            </Link>
            <span className="w-full flex flex-row justify-between items-center">
                <h6 className="text-[#171520] font-medium text-sm md:text-base">
                    Product {item}
                </h6>
                <HeartIcon width={18} height={16} />
            </span>
            <p className="text-[#626262] font-medium text-sm md:text-base">
                {"category"}
            </p>
            <span className="flex flex-row items-center gap-4 text-[#1B4B66] text-sm font-medium">
                <span className="flex flex-row items-center gap-1 text-[#FF8C4B]">
                    {item < 1 ? (
                        <StarIconOutline
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    ) : (
                        <StarIconSolid
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    )}
                    {item < 2 ? (
                        <StarIconOutline
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    ) : (
                        <StarIconSolid
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    )}
                    {item < 3 ? (
                        <StarIconOutline
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    ) : (
                        <StarIconSolid
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    )}
                    {item < 4 ? (
                        <StarIconOutline
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    ) : (
                        <StarIconSolid
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    )}
                    {item < 5 ? (
                        <StarIconOutline
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    ) : (
                        <StarIconSolid
                            width={24}
                            height={24}
                            className="w-3 h-3 md:w-6 md:h-6"
                        />
                    )}
                </span>
                <p className="text-[#1B4B66] text-xs md:text-sm font-medium">
                    {item * 10 + item} Ratings
                </p>
            </span>
            <span className="text-[#171520] font-medium text-sm md:text-base">
                {`$${100}`}{" "}
                <span className="text-xs md:text-sm text-[#626262] line-through">
                    $200
                </span>{" "}
                <span className="text-[#E21D1D]">50% off</span>
            </span>
        </div>
    );
}

export default Card;
