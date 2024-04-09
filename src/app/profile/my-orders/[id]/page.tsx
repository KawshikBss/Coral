import { products } from "@/app/lib/placeholder-data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | undefined };
};

function OrderDetails({ params: { id }, searchParams }: Props) {
    return (
        <div className="w-full md:w-4/5">
            <div className="w-full flex flex-row justify-start gap-6 items-center py-3 pl-4 rounded-xl bg-[#F1F1F1]">
                <Link
                    href={`/profile/my-orders/${id}?tab=items-ordered`}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["tab"] === "items-ordered",
                        }
                    )}
                >
                    Items-ordered
                </Link>
                <Link
                    href={`/profile/my-orders/${id}?tab=invoices`}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["tab"] === "invoices",
                        }
                    )}
                >
                    Invoices
                </Link>
                <Link
                    href={`/profile/my-orders/${id}?tab=order-shipment`}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["tab"] === "order-shipment",
                        }
                    )}
                >
                    Order Shipment
                </Link>
            </div>
            <table className="w-full min-w-max table-auto text-left my-10">
                <thead className="pb-2 border-b-2">
                    <tr className="text-[#626262] font-medium text-xs md:text-base">
                        <th className="text-start">Product Name</th>
                        <th className="text-end">Price</th>
                        <th className="text-end">Qty</th>
                        <th className="text-end">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice(0, 3).map((item, index) => (
                        <tr key={index}>
                            <td
                                className={clsx(
                                    "flex items-center gap-4 mb-2 md:mb-4",
                                    { "mt-4 md:mt-6": index === 0 }
                                )}
                            >
                                <Image
                                    src={item.thumbnail}
                                    width={75}
                                    height={75}
                                    alt={item.name}
                                    className=" rounded-lg w-12 h-12 md:w-20 md:h-20"
                                />
                                <div className="flex flex-col justify-center items-start gap-2 font-medium text-xs md:text-base">
                                    <span className="text-[#171520]">
                                        {item.name}
                                    </span>
                                    <span className="text-[#626262]">
                                        {item.brand}
                                    </span>
                                </div>
                            </td>
                            <td className="text-[#171520] font-normal text-xs md:text-sm text-end">
                                ${item.price}
                            </td>
                            <td className="text-[#171520] font-normal text-xs md:text-sm text-end">
                                1
                            </td>
                            <td className="text-[#171520] font-normal text-xs md:text-sm text-end">
                                ${item.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className="text-[#13101E] font-semibold text-base md:text-xl border-b-2 pb-2 mb-4 md:mb-8">
                Order Information
            </h3>
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/4">
                    <table className="w-full min-w-max table-auto ">
                        <thead>
                            <tr className="text-[#626262] font-medium text-xs md:text-base">
                                <th className="text-start pb-2">
                                    Order Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="w-full font-medium text-sm md:text-base text-[#171520]">
                                <td className="pb-3">Sub Total</td>
                                <td className="pb-3 text-end">$100</td>
                            </tr>
                            <tr className="w-full font-medium text-sm md:text-base text-[#171520]">
                                <td className="pb-3">Discount</td>
                                <td className="pb-3 text-end">$100</td>
                            </tr>
                            <tr className="w-full font-medium text-sm md:text-base text-[#171520]">
                                <td className="pb-3">Delivery Fee</td>
                                <td className="pb-3 text-end">$100</td>
                            </tr>
                            <tr className="w-full font-medium text-sm md:text-base text-[#171520]">
                                <td className="pb-3">Grand Total</td>
                                <td className="pb-3 text-end">$100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full md:w-1/4">
                    <table className="w-full min-w-max table-auto ">
                        <thead>
                            <tr className="text-[#626262] font-medium text-xs md:text-base">
                                <th className="text-start pb-2">
                                    Payment Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="w-full font-medium text-sm md:text-base">
                                <td className="pb-3 text-[#171520] text-start">
                                    Cash on Delivery
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full md:w-1/4">
                    <table className="w-full min-w-max table-auto ">
                        <thead>
                            <tr className="text-[#626262] font-medium text-xs md:text-base">
                                <th className="text-start pb-2">
                                    Address Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="w-full font-medium text-sm md:text-base">
                                <td className="pb-3 text-[#171520] text-start">
                                    Dhaka, Bangladesh
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
