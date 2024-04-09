import OrdersTable from "@/app/ui/profile/orders-table";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = { searchParams: { [key: string]: string | undefined } };

function MyOrders({ searchParams }: Props) {
    return (
        <div className="w-full md:w-4/5">
            <div className="w-full flex flex-row justify-start gap-6 items-center py-3 pl-4 rounded-xl bg-[#F1F1F1]">
                <Link
                    href={"/profile/my-orders?status=completed"}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["status"] === "completed",
                        }
                    )}
                >
                    Completed
                </Link>
                <Link
                    href={"/profile/my-orders?status=pending"}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["status"] === "pending",
                        }
                    )}
                >
                    Pending
                </Link>
                <Link
                    href={"/profile/my-orders?status=cancelled"}
                    className={clsx(
                        "text-[#626262] text-xs md:text-base font-medium px-4 py-3 rounded-lg transition-all ease-in-out duration-500",
                        {
                            "text-white bg-[#1B4B66]":
                                searchParams?.["status"] === "cancelled",
                        }
                    )}
                >
                    Cancelled
                </Link>
            </div>
            <OrdersTable />
        </div>
    );
}

export default MyOrders;
