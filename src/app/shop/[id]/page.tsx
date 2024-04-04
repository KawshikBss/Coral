import { products } from "@/app/lib/placeholder-data";
import BreadCrumbs from "@/app/ui/shop/bread-crumbs";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    HeartIcon,
    MinusIcon,
    PlusIcon,
    ShoppingBagIcon,
    StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
    params: { id: string };
};

function SingleProduct({ params }: Props) {
    const product = products[parseInt(params.id) - 1];

    return (
        <div className="w-full h-full">
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    {
                        name: product.category,
                        href: `/shop?category=${product.category}`,
                    },
                    { name: product.name, href: `/shop/${product.id}` },
                ]}
            />
            <div className="w-full px-5 pt-4 pb-14 flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="w-full flex flex-col justify-between items-center">
                    <Image
                        src={product.thumbnail}
                        alt={product.name}
                        width={605}
                        height={605}
                        className="object-cover object-center rounded-2xl"
                    />
                    <div className="w-full mx-16 mt-6 flex justify-center items-center gap-8">
                        <ChevronLeftIcon width={24} height={24} />
                        {product.images.map((item, index) => (
                            <Image
                                src={item}
                                alt={item}
                                key={index}
                                width={75}
                                height={75}
                                className="object-cover object-center rounded-xl"
                            />
                        ))}
                        <ChevronRightIcon width={24} height={24} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
                    <h1 className="text-[#13101E] font-semibold text-4xl">
                        {product.name}
                    </h1>
                    <h1 className="text-[#626262] font-semibold text-xl mb-9">
                        {product.brand}
                    </h1>
                    <span className="flex flex-row items-center gap-4 text-[#1B4B66] text-sm font-medium">
                        <span className="flex flex-row items-center gap-1 text-[#FF8C4B]">
                            {product.rating && product.rating < 1 ? (
                                <StarIconOutline
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            ) : (
                                <StarIconSolid
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                            {product.rating && product.rating < 2 ? (
                                <StarIconOutline
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            ) : (
                                <StarIconSolid
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                            {product.rating && product.rating < 3 ? (
                                <StarIconOutline
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            ) : (
                                <StarIconSolid
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                            {product.rating && product.rating < 4 ? (
                                <StarIconOutline
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            ) : (
                                <StarIconSolid
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                            {product.rating && product.rating < 5 ? (
                                <StarIconOutline
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            ) : (
                                <StarIconSolid
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                        </span>
                        <p className="text-[#B6B6B6] text-base font-medium">
                            10+ Ratings
                        </p>
                    </span>
                    <span className="text-[#171520] font-bold text-2xl md:text-4xl my-6">
                        ${product.price}{" "}
                        {product.discount ? (
                            <span className="text-xl md:text-3xl text-[#B6B6B6] line-through">
                                $200
                            </span>
                        ) : (
                            ""
                        )}{" "}
                        {product.discount ? (
                            <span className="text-[#FF404B]">
                                {product.discount}
                            </span>
                        ) : (
                            ""
                        )}
                    </span>
                    <hr className="w-full h-1 text-black/[12]" />
                    <div className="flex flex-row justify-start items-center gap-4 my-10">
                        Quantity:{" "}
                        <span className="flex flex-row justify-between items-center rounded border-[#1B4B66] border-2">
                            <MinusIcon
                                width={20}
                                height={20}
                                className="p-1 cursor-pointer"
                            />
                            <span className="text-[#171520] text-sm px-1">
                                {1}
                            </span>
                            <PlusIcon
                                width={20}
                                height={20}
                                className="p-1 cursor-pointer"
                            />
                        </span>
                    </div>
                    <div className="w-full overflow-x-scroll flex flex-row justify-between items-center gap-8">
                        {[0, 1, 2, 3].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between items-center gap-5 py-5 px-4 rounded-lg border-2 border-[#1B4B66]"
                            >
                                <div className="flex flex-col items-start w-max">
                                    <p className="text-[#171520] font-medium text-base">
                                        Get upto 30% Off on order
                                        <br />
                                        value above $100
                                    </p>
                                    <p className="text-[#1B4B66] font-medium text-sm">
                                        Terms & Conditions
                                    </p>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer">
                                    <p className="text-[#626262] font-medium text-sm">
                                        Use Code
                                    </p>
                                    <p className="text-[#171520] font-medium text-base">
                                        ORDER100
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-row justify-between items-center gap-5 mt-5">
                        <span className="cursor-pointer w-full flex justify-center items-center gap-2 py-2 rounded-lg bg-[#1B4B66] text-white font-semibold text-sm">
                            <ShoppingBagIcon width={24} height={24} />
                            Add to bag
                        </span>
                        <span className="cursor-pointer w-full flex justify-center items-center gap-2 py-2 rounded-lg bg-white text-[#1B4B66] border-[#1B4B66] border-2 font-semibold text-sm">
                            <HeartIcon width={24} height={24} />
                            Add to wishlist
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col mt-7 md:mt-14 mb-12 md:mb-24 px-5 gap-6">
                <div className="w-full py-2 px-2 md:px-4 rounded-xl font-medium text-sm md:text-base bg-[#F1F1F1] flex flex-row justify-between md:justify-start items-center md:gap-6">
                    <span
                        className={clsx("py-1 px-4 rounded-lg", {
                            "text-white bg-[#1B4B66]": true,
                            "text-[#626262]": false,
                        })}
                    >
                        Product description
                    </span>
                    <span
                        className={clsx("py-1 px-4 rounded-lg", {
                            "text-white bg-[#1B4B66]": false,
                            "text-[#626262]": true,
                        })}
                    >
                        Related Products
                    </span>
                    <span
                        className={clsx("py-1 px-4 rounded-lg", {
                            "text-white bg-[#1B4B66]": false,
                            "text-[#626262]": true,
                        })}
                    >
                        Ratings and Reviews
                    </span>
                </div>
                <p className="w-full text-[#626262] font-medium text-sm md:text-base">{product.description}</p>
            </div>
        </div>
    );
}

export default SingleProduct;
