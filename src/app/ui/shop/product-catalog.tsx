import React from "react";
import FilterPanel from "./filter-panel";
import Card from "./product-card";

type Props = {};

function ProductCatalog({}: Props) {
    return (
        <div className="w-full flex flex-row justify-between items-start">
            <FilterPanel />
            <div className="w-4/5 flex flex-col justify-between">
                <div className="w-full flex flex-row justify-between items-center">
                    Filters
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
