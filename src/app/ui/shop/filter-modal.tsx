import { categories } from "@/app/lib/placeholder-data";
import React from "react";
import Accordion from "./accordion";

type Props = {
    show: boolean;
    toggle: () => void;
};

function FilterModal({ show, toggle }: Props) {
    return (
        <div
            className={`${
                show ? "scale-1" : "scale-0"
            }  transition-all duration-500 ease-in-out bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full h-full p-6`}
            onClick={toggle}
        >
            <div
                className="relative w-4/5 bg-white rounded-lg"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className="w-full flex flex-col gap-4 justify-start items-start px-5 pt-4">
                    {categories.map((item, index) => (
                        <Accordion
                            key={index}
                            name={item.name}
                            items={item.items}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterModal;
