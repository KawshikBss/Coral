import Image from "next/image";
import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import ProductCatalog from "../ui/shop/product-catalog";

type Props = {};

function Shop({}: Props) {
    return (
        <main className="w-full h-full">
            <Image
                src={"/shop-banner.png"}
                alt="shop-banner"
                width={1240}
                height={400}
                className="rounded-xl mt-6 mb-16 mx-auto"
            />
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Handbag", href: "/shop" },
                ]}
            />
            <h1 className="text-[#1B4B66] text-4xl font-semibold pt-6 pb-11 px-5">
                Handbags
            </h1>
            <ProductCatalog />
        </main>
    );
}

export default Shop;
