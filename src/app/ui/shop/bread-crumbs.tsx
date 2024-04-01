import { BreadCrumb } from "@/app/lib/defenitions";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
    breadCrumbs: BreadCrumb[];
};

function BreadCrumbs({ breadCrumbs }: Props) {
    return (
        <ul className="w-full px-4 flex flex-row justify-start items-center gap-1">
            {breadCrumbs.map((item, index) => (
                <Fragment key={index}>
                    <li
                        className={clsx(
                            index < breadCrumbs.length - 1
                                ? "text-[#1B4B66]"
                                : "text-[#626262]",
                            "text-base font-medium"
                        )}
                    >
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                    {breadCrumbs.length - 1 > index ? (
                        <ChevronRightIcon width={24} height={24} />
                    ) : (
                        ""
                    )}
                </Fragment>
            ))}
        </ul>
    );
}

export default BreadCrumbs;
