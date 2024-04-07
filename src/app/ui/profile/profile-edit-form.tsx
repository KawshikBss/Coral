import clsx from "clsx";
import React from "react";

type Props = {
    tabname: string;
};

function ProfileEditForm({ tabname }: Props) {
    return (
        <div
            className={clsx(
                {
                    "grid-rows-[1fr] opacity-100":
                        tabname === "personal_information",
                    "grid-rows-[0fr] opacity-0 h-0":
                        tabname !== "personal_information",
                },
                "grid overflow-hidden transition-all ease-in-out duration-500"
            )}
        >
            ProfileEditForm
        </div>
    );
}

export default ProfileEditForm;
