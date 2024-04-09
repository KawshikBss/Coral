import { reviews } from "@/app/lib/placeholder-data";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

function MyReviews({}: Props) {
    return (
        <div className="w-full md:w-4/5 flex flex-col gap-8 gap-y-8 mx-auto">
            {reviews.map((item, index) => (
                <div key={index} className="w-fit">
                    <h2 className="text-[#1B4B66] font-medium text-sm md:text-base">
                        {item.username}
                    </h2>
                    <span className="flex flex-row items-center gap-1 text-[#FF8C4B]">
                        {item.rating && item.rating < 1 ? (
                            <StarIconOutline
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        ) : (
                            <StarIconSolid
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        )}
                        {item.rating && item.rating < 2 ? (
                            <StarIconOutline
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        ) : (
                            <StarIconSolid
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        )}
                        {item.rating && item.rating < 3 ? (
                            <StarIconOutline
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        ) : (
                            <StarIconSolid
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        )}
                        {item.rating && item.rating < 4 ? (
                            <StarIconOutline
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        ) : (
                            <StarIconSolid
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        )}
                        {item.rating && item.rating < 5 ? (
                            <StarIconOutline
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        ) : (
                            <StarIconSolid
                                width={24}
                                height={24}
                                className="w-4 h-4"
                            />
                        )}
                    </span>
                    <p className="text-[#626262] font-medium text-xs md:text-sm">
                        {item.review}
                    </p>
                    <span className="text-[#E21D1D] font-medium text-xs md:text-sm">
                        {item.date.toDateString()}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default MyReviews;
