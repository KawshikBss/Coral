import Image from "next/image";
import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import ProductCatalog from "../ui/shop/product-catalog";
import { fetchFilteredProducts } from "../lib/data/products";
import { fetchBrandList, fetchCategory, fetchColorList } from "../lib/data";

type Props = {
    searchParams: { [key: string]: string | undefined };
};

async function Shop({ searchParams }: Props) {
    const catergory = await fetchCategory(searchParams?.category ?? null);

    const products = await fetchFilteredProducts(searchParams);
    const brandList = await fetchBrandList();
    const colorList = await fetchColorList();
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
                        name: catergory?.name
                            ? catergory?.name.toString().toUpperCase()
                            : "All",
                        href: `/shop?category=${
                            catergory?.name ? catergory?.name.toString() : "all"
                        }`,
                    },
                ]}
            />
            <h1 className="text-[#1B4B66] text-2xl md:text-4xl font-semibold pt-4 md:pt-6 pb-4 md:pb-11 px-4">
                {catergory?.name
                    ? catergory?.name.toString().toUpperCase()
                    : "All"}
            </h1>
            <ProductCatalog
                productsList={products}
                filterLists={{ brandList, colorList }}
            />
        </main>
    );
}

export default Shop;
