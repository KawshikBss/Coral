import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/layout/nav-bar";
import Footer from "./ui/layout/footer";
import { fetchCategoryList } from "./lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CORA'L",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const categoryList = await fetchCategoryList();
    return (
        <html lang="en">
            <body className={`${inter.className} w-full h-full`}>
                <Navbar categoryList={categoryList} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
