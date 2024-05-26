"use client";
import { CategoryItem } from "@/app/lib/defenitions";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type Props = {
    name: string;
    items: CategoryItem[];
    // handleItem: () => void;
};

function Accordion({ name, items }: Props) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const currentParams = searchParams.get(name);
    var paramsList = currentParams ? currentParams.split(",") : [];
    const handleFilterItems = (itemName: string) => {
        const params = new URLSearchParams(searchParams);
        if (paramsList?.includes(itemName)) {
            paramsList = paramsList.filter((item) => item !== itemName);
        } else {
            paramsList?.push(itemName);
        }
        const newParam = paramsList.join(",");
        if (newParam.length) {
            params.set(name, newParam);
        } else if (params.has(name)) {
            params.delete(name);
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div
            className={clsx(
                { "gap-7": open },
                "w-full flex flex-col justify-start items-start overflow-hidden"
            )}
        >
            <span className="w-full flex flex-row justify-between items-center border-b-2 pb-3">
                <span className="text-[#13101E] text-base capitalize">
                    {name}
                </span>
                <PlusIcon
                    width={34}
                    className={clsx(
                        { "rotate-45": open },
                        "cursor-pointer transition-all ease-in-out duration-500"
                    )}
                    height={24}
                    onClick={toggle}
                />
            </span>
            <div
                className={clsx(
                    {
                        "grid-rows-[1fr] opacity-100": open,
                        "grid-rows-[0fr] opacity-0": !open,
                    },
                    "grid overflow-hidden transition-all ease-in-out duration-500"
                )}
            >
                <ul className="w-full flex flex-col gap-5 justify-start items-start overflow-hidden">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(
                                { "gap-2": open },
                                "w-full flex flex-row justify-start items-center text-[#626262] text-base capitalize cursor-pointer"
                            )}
                            onClick={() => handleFilterItems(item.id)}
                        >
                            <input
                                type="checkbox"
                                checked={
                                    currentParams?.includes(item.id)
                                        ? true
                                        : false
                                }
                                readOnly
                            />
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Accordion;
