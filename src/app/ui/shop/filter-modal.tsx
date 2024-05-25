import React from "react";
import Accordion from "./accordion";
import { Brand, Color } from "@/app/lib/defenitions";

type Props = {
    show: boolean;
    toggle: () => void;
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

function FilterModal({ show, toggle, filterLists }: Props) {
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
                    <Accordion name="brand" items={filterLists.brandList} />
                    <Accordion name="color" items={filterLists.colorList} />
                    <Accordion name="availability" items={stockAvailability} />
                    <Accordion name="price range" items={princeRange} />
                    <Accordion name="rating" items={ratingRange} />
                </div>
            </div>
        </div>
    );
}

export default FilterModal;
