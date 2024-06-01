"use client";
import {
    createColor,
    createProduct,
} from "@/app/lib/actions/dashboard-actions";
import { Brand, CategoryItem, Color } from "@/app/lib/defenitions";
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

type Props = {
    brandsList: Brand[];
    categoriesList: CategoryItem[];
    colorList: Color[];
};

function ProductCreateForm({ brandsList, categoriesList, colorList }: Props) {
    const [extendBrands, setExtendBrands] = useState(false);
    const toggleBrandsExtend = () => setExtendBrands((prev) => !prev);
    const [extendCategories, setExtendCategories] = useState(false);
    const toggleCategoriesExtend = () => setExtendCategories((prev) => !prev);
    const [extendColors, setExtendColors] = useState(false);
    const toggleColorsExtend = () => setExtendColors((prev) => !prev);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
    const [selectedCategory, setSelectedCategory] =
        useState<CategoryItem | null>(null);
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);
    const [newColor, setNewColor] = useState<string>("");
    return (
        <form
            action={createProduct}
            className="flex flex-col items-center gap-4 mx-5 mb-4"
        >
            <h1 className="text-[#1B4B66] font-semibold text-2xl md:text-4xl mx-4 md:mx-5 mt-3 mb-4">
                Add Product
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-evenly gap-5 items-start">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="thumbnail"
                            >
                                Thumbnail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="thumbnail"
                                name="thumbnail"
                                type="text"
                                placeholder="Thumbnail"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="images"
                            >
                                Images
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="images"
                                name="images"
                                type="text"
                                placeholder="Images"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="thumbnail"
                        >
                            Thumbnail
                        </label>

                        <div className="col-span-full">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="thumbnail"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="thumbnail"
                                                name="thumbnail"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs italic">
                            Please fill out this field.
                        </p>
                    </div>
                </div> */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="slug"
                            >
                                Slug
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="slug"
                                name="slug"
                                type="text"
                                placeholder="Slug"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="description"
                                name="description"
                                placeholder="Description"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="price"
                            >
                                Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="price"
                                name="price"
                                type="text"
                                placeholder="Price"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="discount_price"
                            >
                                Discount Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="discount_price"
                                name="discount_price"
                                type="text"
                                placeholder="Discount Price"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="discount"
                            >
                                Discount
                            </label>
                            <input
                                type="text"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="discount"
                                name="discount"
                                placeholder="Discount"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="brand"
                            >
                                Brand
                            </label>
                            <div className="relative">
                                <div
                                    className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                                    onClick={toggleBrandsExtend}
                                >
                                    <span>
                                        {selectedBrand?.name ?? "Brand"}
                                    </span>
                                    <div
                                        className={clsx(
                                            "flex flex-col gap-2 justify-start items-center h-0 absolute inset-x-0 top-[2rem] bg-gray-200 border border-gray-200 overflow-hidden rounded",
                                            {
                                                "h-20 overflow-y-scroll":
                                                    extendBrands,
                                            }
                                        )}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        <input
                                            type="text"
                                            name="brand"
                                            value={selectedBrand?.id}
                                            readOnly
                                            hidden
                                        />
                                        <input
                                            className="bg-white w-4/5 rounded py-1 mt-2"
                                            type="text"
                                        />
                                        {brandsList.map((item, index) => (
                                            <span
                                                key={index}
                                                className="hover:bg-white w-4/5 text-center py-1 rounded"
                                                onClick={() =>
                                                    setSelectedBrand(item)
                                                }
                                            >
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <div className="relative">
                                <div
                                    className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                                    onClick={toggleCategoriesExtend}
                                >
                                    <span>
                                        {selectedCategory?.name ?? "Category"}
                                    </span>
                                    <div
                                        className={clsx(
                                            "flex flex-col gap-2 justify-start items-center h-0 absolute inset-x-0 top-[2rem] bg-gray-200 border border-gray-200 overflow-hidden rounded",
                                            {
                                                "h-20 overflow-y-scroll":
                                                    extendCategories,
                                            }
                                        )}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        <input
                                            type="text"
                                            name="category"
                                            value={selectedCategory?.id}
                                            hidden
                                            readOnly
                                        />
                                        <input
                                            className="bg-white w-4/5 rounded mt-2"
                                            type="text"
                                        />
                                        {categoriesList.map((item, index) => (
                                            <span
                                                key={index}
                                                className="hover:bg-white w-4/5 text-center py-1 rounded"
                                                onClick={() =>
                                                    setSelectedCategory(item)
                                                }
                                            >
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="size"
                            >
                                Sizes
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="size"
                                name="size"
                                type="text"
                                placeholder="SM, M, L, XL..."
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full md:w-3/5 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="color"
                            >
                                Color
                            </label>
                            <div className="relative">
                                <div
                                    className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                                    onClick={toggleColorsExtend}
                                >
                                    <span>
                                        {selectedColor?.name ?? "Color"}
                                    </span>
                                    <div
                                        className={clsx(
                                            "flex flex-col gap-2 justify-start items-center h-0 absolute inset-x-0 top-[2rem] bg-gray-200 border border-gray-200 overflow-hidden rounded",
                                            {
                                                "h-28 overflow-y-scroll":
                                                    extendColors,
                                            }
                                        )}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        <input
                                            type="text"
                                            name="color"
                                            value={selectedColor?.id}
                                            hidden
                                            readOnly
                                        />
                                        <span className="w-4/5 flex flex-row justify-between items-center mt-2">
                                            New
                                            <input
                                                className="bg-white w-full rounded mx-2"
                                                type="color"
                                                onChange={(event) => {
                                                    setNewColor(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                            <button
                                                onClick={async () =>
                                                    await createColor(newColor)
                                                }
                                            >
                                                Add
                                            </button>
                                        </span>
                                        <input
                                            className="bg-white w-4/5 rounded mt-2"
                                            type="text"
                                        />
                                        {colorList.map((item, index) => (
                                            <span
                                                key={index}
                                                className="hover:bg-white w-4/5 text-center py-1 rounded flex flex-row justify-start items-center gap-2"
                                                onClick={() =>
                                                    setSelectedColor(item)
                                                }
                                            >
                                                <div
                                                    className="w-5 h-5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            item.code,
                                                    }}
                                                />
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="sku"
                            >
                                SKU
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="sku"
                                name="sku"
                                type="text"
                                placeholder="SKU"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="tags"
                            >
                                Tags
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="tags"
                                name="tags"
                                type="text"
                                placeholder="Tags"
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="cursor-pointer text-center px-4 py-2 rounded-lg bg-[#1B4B66] text-white font-semibold text-sm"
            >
                Create Product
            </button>
        </form>
    );
}

export default ProductCreateForm;
