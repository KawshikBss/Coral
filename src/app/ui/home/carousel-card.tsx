import { Product } from "@/app/lib/defenitions";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    product: Product;
};

function Card({ product }: Props) {
    return (
        <div className="flex w-36 md:w-72 flex-col gap-2 justify-between items-start snap-center">
            <Link
                href={`/shop/${product.id}`}
                className="overflow-hidden rounded-lg"
            >
                <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={286}
                    height={286}
                    className="hover:scale-125 w-36 md:w-72 h-36 md:h-72 transition-all duration-500 ease-in-out"
                />
            </Link>
            <span className="w-full flex flex-row justify-between items-center">
                <h6 className="text-[#171520] font-medium text-sm md:text-base">
                    {product.name}
                </h6>
                <HeartIcon width={18} height={16} />
            </span>
            <p className="text-[#626262] font-medium text-sm md:text-base">
                {product.category}
            </p>
            <span className="text-[#171520] font-medium text-sm md:text-base">
                ${product.price}
            </span>
        </div>
    );
}

export default Card;
