import Link from "next/link";
import React from "react";
import Card from "./carousel-card";
import { Product } from "@/app/lib/defenitions";

type Props = {
    heading: string;
    allLink: string;
    items: Product[];
};

function Carousel({ heading, allLink, items }: Props) {
    return (
        <div className="w-[95%] flex flex-col gap-6 justify-between items-stretch mx-auto">
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-[#13101E] font-semibold text-3xl">
                    {heading}
                </h1>
                <Link
                    href={allLink}
                    className="text-[#1B4B66] font-semibold text-xs"
                >
                    View All
                </Link>
            </div>
            <div className="w-[90vw] overflow-x-scroll">
                <div className="w-max flex flex-row gap-10 justify-between items-center snap-mandatory snap-x">
                    {items.map((item, index) => (
                        <Card key={index} product={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
