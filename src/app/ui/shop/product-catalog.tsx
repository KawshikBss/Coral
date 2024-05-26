"use client";
import React, { ChangeEvent, useState } from "react";
import FilterPanel from "./filter-panel";
import Card from "./product-card";
import { FunnelIcon } from "@heroicons/react/24/outline";
import FilterModal from "./filter-modal";
import { Brand, Color, Product } from "@/app/lib/defenitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "../components/pagination";

type Props = {
    productsList: Product[] | [];
    filterLists: { brandList: Brand[]; colorList: Color[] };
};

function ProductCatalog({ productsList, filterLists }: Props) {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const toggleFilterModal = () => setShowFilterModal((prev) => !prev);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const limit = searchParams.get("limit") ?? 20;
    const handleProductLimitChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        const params = new URLSearchParams(searchParams);
        params.set("limit", event.target.value);
        replace(`${pathname}?${params.toString()}`);
    };
    const handleProductSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort_by", event.target.value);
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="w-full flex flex-row justify-between items-start">
            <FilterPanel filterLists={filterLists} />
            <FilterModal
                show={showFilterModal}
                toggle={toggleFilterModal}
                filterLists={filterLists}
            />
            <div className="w-full md:w-4/5 flex flex-col justify-between p-4 md:px-8">
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 pb-6">
                    <span className="w-full md:w-fit flex flex-row justify-between items-center">
                        Showing 1 - {limit} of {productsList.length} items
                        <FunnelIcon
                            width={24}
                            height={24}
                            onClick={toggleFilterModal}
                            className="md:hidden"
                        />
                    </span>
                    <span>
                        To Show:{" "}
                        <select
                            className="bg-[#F1F1F1] px-1 md:px-2 py-2 md:py-4 rounded-lg"
                            onChange={(event) =>
                                handleProductLimitChange(event)
                            }
                        >
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </span>
                    <span>
                        Sort By:{" "}
                        <select
                            className="bg-[#F1F1F1] px-1 md:px-2 py-2 md:py-4 rounded-lg"
                            onChange={(event) => handleProductSortChange(event)}
                        >
                            <option value="">Rating</option>
                            <option value="ASC">Price (Low to High)</option>
                            <option value="DESC">Price (High to Low)</option>
                        </select>
                    </span>
                </div>
                <div className="w-full flex flex-wrap justify-center items-start gap-8 gap-y-8 md:gap-y-16 mb-6">
                    {productsList.map((item, index) => (
                        <Card product={item} key={index} />
                    ))}
                </div>
                <Pagination totalItems={productsList.length} />
            </div>
        </div>
    );
}

export default ProductCatalog;
