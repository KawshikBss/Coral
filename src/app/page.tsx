import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/home/carousel";
import clsx from "clsx";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <main className="w-full h-full">
            <div className="w-[90%] h-[514px] bg-[url('/home-banner.png')] bg-no-repeat bg-cover rounded-xl mt-6 mb-16 mx-auto relative">
                <div className="text-[#1B4B66] absolute inset-y-0 right-0 h-fit my-auto pt-6 pb-7 md:pb-14 pl-6 md:pl-12 rounded-l-3xl ml-6 md:ml-0 bg-[#DEDEDE]/70">
                    <h1 className="font-extrabold text-4xl md:text-6xl">
                        Carry your Funk
                    </h1>
                    <p className="font-medium text-lg md:text-2xl w-3/4 mb-8">
                        Trendy handbags collection for your party animal
                    </p>
                    <Link
                        href={"/shop"}
                        className="text-white text-sm md:text-base py-3 px-8 rounded-lg bg-[#1B4B66]"
                    >
                        See more
                    </Link>
                </div>
            </div>
            <Carousel
                heading="New Arrivals"
                allLink="/shop"
                items={[1, 2, 3, 4, 1, 2, 3, 4]}
            />
            <div className="flex flex-col justify-between items-start gap-6 px-5 pt-8 pb-16 mt-8 mb-16 bg-[#1B4B66]">
                <h1 className="text-white font-semibold text-3xl">
                    Handpicked Collections
                </h1>
                <div className="w-full overflow-x-scroll">
                    <div className="w-max flex flex-row justify-between items-center gap-10">
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
                            <div
                                className="bg-cover w-36 md:w-72 h-36 md:h-72 rounded-md relative"
                                style={{
                                    backgroundImage: `url('/products/card${item}.png')`,
                                }}
                                key={index}
                            >
                                <h1 className="absolute bottom-0 left-0 text-[#171520] font-semibold text-lg md:text-2xl pl-4 pb-4">
                                    Product {item.toString()}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full px-5 mb-16 flex flex-col gap-6 justify-between items-start">
                <h1 className="text-[#13101E] font-semibold text-4xl">
                    Shop by Brands
                </h1>
                <div className="w-full flex justify-center items-center md:overflow-x-scroll">
                    <div className="w-max flex flex-row justify-between items-center gap-10 flex-wrap">
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-[#F4F4F4] w-20 md:w-40 h-20 md:h-40 flex justify-center items-center"
                            >
                                <Image
                                    src={`/brands/brand${item}.png`}
                                    alt={item.toString()}
                                    width={100}
                                    height={60}
                                    className="object-contain object-center w-16 md:w-36 h-16 md:h-36"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[url('/home-banner-2.png')] bg-cover bg-center w-[95vw] h-[35vh] md:h-[50vh] mx-auto mb-10 px-4 rounded-3xl text-[#97451F] flex flex-col gap-5 justify-center items-start pl-16">
                <p className="uppercase font-normal text-xl md:text-3xl">
                    Lifestyle
                </p>
                <h1 className="uppercase font-bold text-3xl md:text-5xl">
                    Makeup Accessories
                    <br />
                    from Top Brands
                </h1>
            </div>
            <div className="w-[95%] md:h-[35vh] mx-auto mb-16 flex flex-col md:flex-row gap-8 justify-between items-center">
                <div className="w-[80%] md:w-1/2 md:h-full bg-[url('/home-banner-3.png')] bg-cover bg-center rounded-3xl text-[#A53F64] flex flex-col gap-1 md:gap-5 justify-center items-end py-2 pr-9">
                    <h1 className="uppercase font-bold text-2xl md:text-5xl">
                        Skincare
                        <br />
                        Essentials
                    </h1>
                    <Link
                        href={"/"}
                        className="bg-white rounded-full p-3 text-[#A53F64] scale-50 md:scale-100"
                    >
                        <ArrowRightIcon width={40} height={40} />
                    </Link>
                </div>
                <div className="w-[80%] md:w-1/2 md:h-full bg-[url('/home-banner-4.png')] bg-cover bg-center rounded-3xl text-[#1B4B66] flex flex-col gap-1 md:gap-5 justify-center items-end py-2 pr-10">
                    <h1 className="uppercase font-bold text-2xl md:text-5xl">
                        Facepacks
                        <br />& Peels
                    </h1>
                    <Link
                        href={"/"}
                        className="bg-white rounded-full p-3 text-[#1B4B66] scale-50 md:scale-100"
                    >
                        <ArrowRightIcon width={40} height={40} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
