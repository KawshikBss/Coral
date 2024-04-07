import React from "react";
import BreadCrumbs from "../ui/shop/bread-crumbs";
import { paymentMethods, products } from "../lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "../ui/checkout/checkout-form";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {};

function Checkout({}: Props) {
    return (
        <div className="w-full h-full">
            <BreadCrumbs
                breadCrumbs={[
                    { name: "Home", href: "/" },
                    {
                        name: "Checkout",
                        href: `/checkout`,
                    },
                ]}
            />
            <h1 className="text-[#1B4B66] font-semibold text-2xl md:text-4xl mx-4 md:mx-5 mt-3 md:mt-6 mb-4 md:mb-10">
                Checkout
            </h1>
            <div className="w-full px-4 md:px-5 mb-36 flex flex-col-reverse md:flex-row justify-between items-start">
                <div className="w-full md:w-3/5 flex flex-col gap-10">
                    <CheckoutForm />
                    <div className="w-full flex flex-col">
                        <span className="w-full flex flex-row justify-between items-center pb-2 border-b-2 mb-10">
                            <h1 className="text-[#13101E] font-semibold text-base md:text-xl">
                                Payments
                            </h1>
                            <ChevronDownIcon width={24} height={24} />
                        </span>
                        <div className="w-full flex flex-row items-center gap-5 mx-1 overflow-x-scroll">
                            {paymentMethods.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-40 h-36 flex-shrink-0"
                                >
                                    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#E3E3E3] border w-full h-full px-4 pt-12 pb-6">
                                        <Image
                                            src={item.iconUrl}
                                            alt="icon"
                                            width={32}
                                            height={10}
                                            className="object-contain"
                                            layout="fixed"
                                        />
                                        <span className="text-[#171520] font-medium text-base w-max">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center">
                        <Link href={"/my-cart"}>
                            <span className="text-[#1B4B66] font-semibold text-sm underline">
                                Back To Cart
                            </span>
                        </Link>
                        <Link
                            href={"/"}
                            className="cursor-pointer text-center py-2 px-14 rounded-lg bg-[#1B4B66] text-white font-semibold text-sm"
                        >
                            <span>Next</span>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-6 mb-4 md:mb-0">
                    <div className="w-full">
                        <h3 className="text-[#13101E] font-semibold text-base md:text-xl border-b-2 pb-2 mb-4 md:mb-8">
                            Order Summary
                        </h3>
                        <div className="w-full flex flex-col items-start gap-6">
                            {products.slice(0, 3).map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-row justify-start items-center gap-4"
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.name}
                                        width={75}
                                        height={80}
                                        className=" rounded-lg"
                                    />
                                    <div className="flex flex-col items-start gap-2 text-sm md:text-base text-[#626262]">
                                        <span className="text-[#171520] font-medium">
                                            {item.name}
                                        </span>
                                        <span>{item.brand}</span>
                                        <span>Qty - 1</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-[#13101E] font-semibold text-base md:text-xl border-b-2 pb-2 mb-4 md:mb-8">
                            Order Details
                        </h3>
                        <table className="w-full min-w-max table-auto ">
                            <tbody className="w-full">
                                <tr className="w-full font-medium text-sm md:text-base">
                                    <td className="pb-3 text-[#626262]">
                                        Sub Total
                                    </td>
                                    <td className="pb-3 text-[#171520] text-end">
                                        $100
                                    </td>
                                </tr>
                                <tr className="w-full font-medium text-sm md:text-base">
                                    <td className="pb-3 text-[#626262]">
                                        Discount
                                    </td>
                                    <td className="pb-3 text-[#171520] text-end">
                                        $100
                                    </td>
                                </tr>
                                <tr className="w-full font-medium text-sm md:text-base">
                                    <td className="pb-3 text-[#626262]">
                                        Delivery Fee
                                    </td>
                                    <td className="pb-3 text-[#171520] text-end">
                                        $100
                                    </td>
                                </tr>
                                <tr className="w-full font-medium text-sm md:text-base">
                                    <td className="pb-3 text-[#626262]">
                                        Grand Total
                                    </td>
                                    <td className="pb-3 text-[#171520] text-end">
                                        $100
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
