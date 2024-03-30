import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    category: string;
    price: Number;
    href: string;
    image: string;
};

function Card({ title, category, price, href, image }: Props) {
    return (
        <div className="flex flex-col gap-2 justify-between items-start snap-center">
            <Link href={href} className="overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    width={286}
                    height={286}
                    className="hover:scale-125 transition-all duration-500 ease-in-out"
                />
            </Link>
            <span className="w-full flex flex-row justify-between items-center">
                <h6 className="text-[#171520] font-medium text-base">
                    {title}
                </h6>
                <HeartIcon width={18} height={16} />
            </span>
            <p className="text-[#626262] font-medium text-base">{category}</p>
            <span className="text-[#171520] font-medium text-base">{`$${price}`}</span>
        </div>
    );
}

export default Card;
