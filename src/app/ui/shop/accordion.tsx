"use client";
import { CategoryItem } from "@/app/lib/defenitions";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {
    name: string;
    items: CategoryItem[];
    // handleItem: () => void;
};

function Accordion({ name, items }: Props) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);

    return (
        <div
            className={clsx(
                { "gap-7": open },
                "w-full flex flex-col justify-start items-start overflow-hidden"
            )}
        >
            <span className="w-full flex flex-row justify-between items-center border-b-2 pb-3">
                <span className="text-[#13101E] text-base]">{name}</span>
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
                                "w-full flex flex-row justify-start items-center text-[#626262] text-base"
                            )}
                        >
                            <input type="checkbox" />
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Accordion;
