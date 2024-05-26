"use client";
import { Product } from "@/app/lib/defenitions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

type Props = { product: Product | undefined };

function Slides({ product }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imagesLength = product?.images?.length ?? 1;
    const handlePrevSlide = () => {
        setCurrentSlide((prev) => {
            return prev - 1 >= 0 ? prev - 1 : imagesLength - 1;
        });
    };
    const handleNextSlide = () => {
        setCurrentSlide((prev) => {
            return prev + 1 < imagesLength ? prev + 1 : 0;
        });
    };
    return (
        <div className="w-full flex flex-col justify-between items-center">
            <Image
                src={product?.images?.[currentSlide] ?? ""}
                alt={product?.name ?? ""}
                width={605}
                height={605}
                className="object-cover object-center rounded-2xl"
            />
            <div className="w-full mx-16 mt-6 flex justify-center items-center gap-8">
                <ChevronLeftIcon
                    width={24}
                    height={24}
                    onClick={handlePrevSlide}
                />
                <div className="w-full">
                    <div className="flex justify-center items-center gap-8">
                        {product?.images?.map((item, index) => (
                            <Image
                                src={item}
                                alt={item}
                                key={index}
                                width={75}
                                height={75}
                                className="object-cover object-center rounded-xl cursor-pointer"
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                <ChevronRightIcon
                    width={24}
                    height={24}
                    onClick={handleNextSlide}
                />
            </div>
        </div>
    );
}

export default Slides;
