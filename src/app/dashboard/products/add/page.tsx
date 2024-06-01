import {
    fetchBrandList,
    fetchCategoryList,
    fetchColorList,
} from "@/app/lib/data";
import ProductCreateForm from "@/app/ui/dashboard/product-create-form";
import React from "react";

type Props = {};

async function AddProductPage({}: Props) {
    const brandsList = await fetchBrandList();
    const categoriesList = await fetchCategoryList();
    const colorList = await fetchColorList();
    return (
        <div className="w-ful h-full">
            <ProductCreateForm
                brandsList={brandsList}
                categoriesList={categoriesList}
                colorList={colorList}
            />
        </div>
    );
}

export default AddProductPage;
