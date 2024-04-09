import { products } from "@/app/lib/placeholder-data";
import Card from "@/app/ui/shop/product-card";
import React from "react";

type Props = {};

function MyWishlist({}: Props) {
    return (
        <div className="w-full md:w-4/5 flex flex-wrap justify-center items-start gap-8 gap-y-8 md:gap-y-16">
            {products.map((item, index) => (
                <Card product={item} key={index} />
            ))}
        </div>
    );
}

export default MyWishlist;
