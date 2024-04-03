"use client";
import React, { useState } from "react";
import FilterPanel from "./filter-panel";
import Card from "./product-card";
import { FunnelIcon } from "@heroicons/react/24/outline";
import FilterModal from "./filter-modal";
import { products } from "@/app/lib/placeholder-data";

type Props = {};

function ProductCatalog({}: Props) {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const toggleFilterModal = () => setShowFilterModal((prev) => !prev);
    return (
        <div className="w-full flex flex-row justify-between items-start">
            <FilterPanel />
            <FilterModal show={showFilterModal} toggle={toggleFilterModal} />
            <div className="w-full md:w-4/5 flex flex-col justify-between p-4 md:px-8">
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 pb-6">
                    <span className="w-full md:w-fit flex flex-row justify-between items-center">
                        Showing 1 - 20 of 145 items
                        <FunnelIcon
                            width={24}
                            height={24}
                            onClick={toggleFilterModal}
                            className="md:hidden"
                        />
                    </span>
                    <span>
                        To Show:{" "}
                        <select className="bg-[#F1F1F1] px-1 md:px-2 py-2 md:py-4 rounded-lg">
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </span>
                    <span>
                        Sort By:{" "}
                        <select className="bg-[#F1F1F1] px-1 md:px-2 py-2 md:py-4 rounded-lg">
                            <option value="Rating">Rating</option>
                            <option value="Price (Low to High)">
                                Price (Low to High)
                            </option>
                            <option value="Price (High to Low)">
                                Price (High to Low)
                            </option>
                        </select>
                    </span>
                </div>
                <div className="w-full flex flex-wrap justify-center items-start gap-8 gap-y-8 md:gap-y-16 mb-6">
                    {products.map((item, index) => (
                        <Card product={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
