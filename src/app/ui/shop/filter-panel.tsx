import React from "react";
import { categories } from "@/app/lib/placeholder-data";
import Accordion from "./accordion";
import { Brand, Color } from "@/app/lib/defenitions";

type Props = {
    filterLists: { brandList: Brand[]; colorList: Color[] };
};

const princeRange = [
    { name: "Under $50", id: "0-50" },
    { name: "$50 - $100", id: "50-100" },
    { name: "$100 - $200", id: "100-200" },
    { name: "$200 - $500", id: "200-500" },
    { name: "$500 - $1000", id: "500-1000" },
    { name: "Over $1000", id: "1000-100000" },
];

const ratingRange = [
    { name: "Up to 1", id: "1" },
    { name: "Up to 2", id: "2" },
    { name: "Up to 3", id: "3" },
    { name: "Up to 4", id: "4" },
    { name: "Up to 5", id: "5" },
];

const stockAvailability = [
    { name: "In Stock", id: "In Stock" },
    { name: "Out of Stock", id: "Out of Stock" },
];

function FilterPanel({ filterLists }: Props) {
    return (
        <div className="hidden md:flex flex-col gap-4 justify-start items-start w-1/5 px-5 py-1">
            <Accordion name="brand" items={filterLists.brandList} />
            <Accordion name="color" items={filterLists.colorList} />
            <Accordion name="availability" items={stockAvailability} />
            <Accordion name="price range" items={princeRange} />
            <Accordion name="rating" items={ratingRange} />
        </div>
    );
}

export default FilterPanel;
