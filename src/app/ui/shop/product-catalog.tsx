"use client";
import React, { useState } from "react";
import FilterPanel from "./filter-panel";
import Card from "./product-card";
import { FunnelIcon } from "@heroicons/react/24/outline";
import FilterModal from "./filter-modal";

type Props = {};

function ProductCatalog({}: Props) {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const toggleFilterModal = () => setShowFilterModal((prev) => !prev);
    return (
        <div className="w-full flex flex-row justify-between items-start">
            <FilterPanel />
            <FilterModal show={showFilterModal} toggle={toggleFilterModal} />
            <div className="w-full md:w-4/5 flex flex-col justify-between">
                <div className="w-full flex flex-row justify-between items-center">
                    Filters{" "}
                    <FunnelIcon
                        width={24}
                        height={24}
                        onClick={toggleFilterModal}
                    />
                </div>
                <div className="w-full flex flex-wrap justify-center items-start gap-8 gap-y-16 mb-6">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
