import { Product } from "@/app/lib/defenitions";
import {
    HeartIcon,
    StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

function Card({ product }: Props) {
    return (
        <div className="flex w-36 md:w-64 flex-col gap-2 justify-between items-start snap-center">
            <Link
                href={`/shop/${product.id}`}
                className="overflow-hidden rounded-lg"
            >
                <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={286}
                    height={286}
                    className="hover:scale-125 w-36 md:w-64 h-36 md:h-64 transition-all duration-500 ease-in-out"
                />
            </Link>
            <span className="w-full flex flex-row justify-between items-center">
                <h6 className="text-[#171520] font-medium text-sm md:text-base">
                    {product.name}
                </h6>
                <HeartIcon width={18} height={16} />
            </span>
            <p className="text-[#626262] font-medium text-sm md:text-base">
                {"category"}
            </p>
            <span className="flex flex-row items-center gap-4 text-[#1B4B66] text-sm font-medium">
                <span className="flex flex-row items-center gap-1 text-[#FF8C4B]">
                    {product.rating && product.rating < 1 ? (
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
                    {product.rating && product.rating < 2 ? (
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
                    {product.rating && product.rating < 3 ? (
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
                    {product.rating && product.rating < 4 ? (
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
                    {product.rating && product.rating < 5 ? (
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
                    10+ Ratings
                </p>
            </span>
            <span className="text-[#171520] font-medium text-sm md:text-base">
                ${product.price}{" "}
                {product.discount ? (
                    <span className="text-xs md:text-sm text-[#626262] line-through">
                        $200
                    </span>
                ) : (
                    ""
                )}{" "}
                {product.discount ? (
                    <span className="text-[#E21D1D]">{product.discount}</span>
                ) : (
                    ""
                )}
            </span>
        </div>
    );
}

export default Card;
