import { ordersData } from "@/app/lib/placeholder-data";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {};

function OrdersTable({}: Props) {
    return (
        <table className="w-full min-w-fit md:min-w-max table-auto text-left flex flex-col justify-between">
            <thead className="pb-2 border-b-2">
                <tr className="text-[#626262] font-medium text-xs md:text-base md:px-6 py-5 flex flex-row justify-between items-center">
                    <th className="text-center w-1/6 md:w-2/6">Order ID</th>
                    <th className="text-start w-1/6">Date</th>
                    <th className="text-start w-1/6">Price</th>
                    <th className="text-start w-1/6">Status</th>
                    <th className="text-end w-6 h-6"></th>
                </tr>
            </thead>
            <tbody className="flex flex-col gap-4 pt-6">
                {ordersData.map((item, index) => (
                    <tr
                        key={index}
                        className="text-[#171520] font-medium text-xs md:text-base md:px-6 py-2 md:py-5 bg-[#F1F1F1] rounded-lg flex flex-row justify-between items-center"
                    >
                        <td className="text-center w-1/6 md:w-2/6">
                            #{item.orderId}
                        </td>
                        <td className="text-start w-1/6">
                            {item.orderDate.toDateString()}
                        </td>
                        <td className="text-start w-1/6">${item.totalPrice}</td>
                        <td className="text-[#1B4B66] w-1/6">
                            {item.status.toUpperCase()}
                        </td>
                        <td className="w-6 h-6">
                            <Link href={`/profile/my-orders/${item.orderId}`}>
                                <ChevronRightIcon
                                    width={24}
                                    height={24}
                                    className=" w-6 h-6"
                                />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrdersTable;
