import Image from "next/image";
import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import ProductCatalog from "../ui/shop/product-catalog";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

function Shop({ searchParams }: Props) {
    return (
        <main className="w-full h-full">
            <Image
                src={"/shop-banner.png"}
                alt="shop-banner"
                width={1240}
                height={400}
                className="rounded-xl px-2 md:px-0 mt-3 md:mt-6 mb-8 md:mb-16 mx-auto"
            />
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    {
                        name: searchParams?.category
                            ? searchParams?.category.toString().toUpperCase()
                            : "All",
                        href: `/shop?category=${
                            searchParams?.category
                                ? searchParams?.category.toString()
                                : "all"
                        }`,
                    },
                ]}
            />
            <h1 className="text-[#1B4B66] text-2xl md:text-4xl font-semibold pt-4 md:pt-6 pb-4 md:pb-11 px-4">
                {searchParams?.category
                    ? searchParams?.category.toString().toUpperCase()
                    : "All"}
            </h1>
            <ProductCatalog />
        </main>
    );
}

export default Shop;
