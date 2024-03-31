import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const categoryLinks = [
    {
        name: "Skincare",
        href: "/",
    },
    {
        name: "Personal Care",
        href: "/",
    },
    {
        name: "Handbags",
        href: "/",
    },
    {
        name: "Apparels",
        href: "/",
    },
    {
        name: "Watches",
        href: "/",
    },
    {
        name: "Eye Wear",
        href: "/",
    },
    {
        name: "Jewellery",
        href: "/",
    },
];

const aboutLinks = [
    {
        name: "Contact Us",
        href: "",
    },
    {
        name: "About Us",
        href: "",
    },
    {
        name: "Careers",
        href: "",
    },
    {
        name: "Press",
        href: "",
    },
];

const policyLinks = [
    {
        name: "Return Policy",
        href: "/",
    },
    {
        name: "Terms of Use",
        href: "/",
    },
    {
        name: "Sitemap",
        href: "/",
    },
    {
        name: "Security",
        href: "/",
    },
    {
        name: "Privacy",
        href: "/",
    },
    {
        name: "EPR Compliance",
        href: "/",
    },
];

const socialLinks = [
    {
        icon: "/icons/facebook.svg",
        href: "/",
    },
    {
        icon: "/icons/insta.svg",
        href: "/",
    },
    {
        icon: "/icons/twitter.svg",
        href: "/",
    },
    {
        icon: "/icons/youtube.svg",
        href: "/",
    },
];

function Footer({}: Props) {
    return (
        <div className="w-full bg-[#1B4B66] flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-start px-16 pt-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-16">
                <ul className="flex flex-col justify-between items-start gap-2 text-[#B6B6B6] font-medium text-base">
                    <li className="text-white">Shop by Category</li>
                    {categoryLinks.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col justify-between items-start gap-2 text-[#B6B6B6] font-medium text-base">
                    <li className="text-white">About</li>
                    {aboutLinks.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col justify-between items-start gap-2 text-[#B6B6B6] font-medium text-base">
                    <li className="text-white">Policy</li>
                    {policyLinks.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-between items-center md:items-end gap-6 self-center md:self-start">
                <div className="flex flex-row justify-between items-center gap-4">
                    {socialLinks.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <Image
                                src={item.icon}
                                alt=""
                                width={38}
                                height={38}
                            />
                        </Link>
                    ))}
                </div>
                <h1 className="text-white font-medium text-base">
                    @KawshikBss
                </h1>
            </div>
        </div>
    );
}

export default Footer;
