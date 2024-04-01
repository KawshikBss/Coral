import React from "react";
import { categories } from "@/app/lib/placeholder-data";
import Accordion from "./accordion";

type Props = {};

function FilterPanel({}: Props) {
    return (
        <div className="flex flex-col gap-4 justify-start items-start w-1/5 px-5 py-1">
            {categories.map((item, index) => (
                <Accordion key={index} name={item.name} items={item.items} />
            ))}
        </div>
    );
}

export default FilterPanel;
