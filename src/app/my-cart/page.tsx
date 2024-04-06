import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import { products } from "../lib/placeholder-data";
import Image from "next/image";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {};

function MyCart({}: Props) {
    return (
        <div className="w-full h-full">
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    {
                        name: "My Cart",
                        href: `/my-cart`,
                    },
                ]}
            />
            <h1 className="text-[#1B4B66] font-semibold text-4xl mx-5 mt-7 mb-9">
                My Cart
            </h1>
            <div className="mx-5 flex flex-row items-start justify-between">
                <table className="w-3/6 min-w-max table-auto text-left">
                    <thead className="pb-2 border-b-2">
                        <tr className="text-[#626262] font-medium text-base">
                            <th className="text-start">Product Name</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">Qty</th>
                            <th className="text-end">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.slice(3).map((item, index) => (
                            <tr key={index}>
                                <td
                                    className={clsx(
                                        "flex items-center gap-4 mb-4",
                                        { "mt-6": index === 0 }
                                    )}
                                >
                                    <Image
                                        src={item.thumbnail}
                                        width={75}
                                        height={75}
                                        alt={item.name}
                                        className=" rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center items-start gap-2 font-medium text-base">
                                        <span className="text-[#171520]">
                                            {item.name}
                                        </span>
                                        <span className="text-[#626262]">
                                            {item.brand}
                                        </span>
                                    </div>
                                </td>
                                <td className="text-[#171520] font-normal text-sm text-end">
                                    ${item.price}
                                </td>
                                <td className="text-[#171520] font-normal text-sm text-end">
                                    1
                                </td>
                                <td className="text-[#171520] font-normal text-sm text-end">
                                    ${item.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="w-2/6">
                    <h3 className="text-[#13101E] font-semibold text-xl border-b-2 pb-2 mb-8">
                        Order Summary
                    </h3>
                    <table className="w-full min-w-max table-auto ">
                        <tbody className="w-full">
                            <tr className="w-full font-medium text-base">
                                <td className="pb-3 text-[#626262]">
                                    Sub Total
                                </td>
                                <td className="pb-3 text-[#171520] text-end">
                                    $100
                                </td>
                            </tr>
                            <tr className="w-full font-medium text-base">
                                <td className="pb-3 text-[#626262]">
                                    Discount
                                </td>
                                <td className="pb-3 text-[#171520] text-end">
                                    $100
                                </td>
                            </tr>
                            <tr className="w-full font-medium text-base">
                                <td className="pb-3 text-[#626262]">
                                    Delivery Fee
                                </td>
                                <td className="pb-3 text-[#171520] text-end">
                                    $100
                                </td>
                            </tr>
                            <tr className="w-full font-medium text-base">
                                <td className="pb-3 text-[#626262]">
                                    Grand Total
                                </td>
                                <td className="pb-3 text-[#171520] text-end">
                                    $100
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="w-full flex flex-row justify-between items-center gap-5 mt-5">
                        <span className="cursor-pointer w-full text-center py-2 rounded-lg bg-[#1B4B66] text-white font-semibold text-sm">
                            Place Order
                        </span>
                        <span className="cursor-pointer w-full text-center py-2 rounded-lg bg-white text-[#1B4B66] border-[#1B4B66] border-2 font-semibold text-sm">
                            Continue Shopping
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-3/6 mx-5 mt-20 mb-9 flex flex-col items-start">
                <span className="w-full flex flex-row justify-between items-center pb-2 border-b-2">
                    <h1 className="text-[#13101E] font-medium text-base">
                        Apply Coupon Code
                    </h1>
                    <ChevronDownIcon width={24} height={24} />
                </span>
                <span className="w-2/5 mt-7 py-5 px-4 rounded-md bg-[#F1F1F1]">
                    <input
                        placeholder="Apply Coupon Code"
                        className="bg-transparent placeholder:text-[#626262] placeholder:font-medium placeholder:text-base"
                    />{" "}
                    <span className="text-[#1B4B66] font-semibold text-sm uppercase cursor-pointer">
                        Check
                    </span>
                </span>
            </div>
        </div>
    );
}

export default MyCart;
