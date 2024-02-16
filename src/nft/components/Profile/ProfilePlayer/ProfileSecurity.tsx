import React, { useState } from "react";
import { securityList } from "@nft/pages-components/Profile/datalist";
import SecurityButton from "../../Button/SecurityButton";

const ProfileSecurity = () => {
    const [selected, setSelected] = useState<boolean>();

    const handleClick = (idx: boolean) => () => {
        setSelected(idx);
    };

    return (
        <div className="w-full h-auto bg-app-black my-12 flex flex-col rounded-lg py-10 px-8">
            <div className="text-2xl font-semibold">Security</div>
            <div className="xl:flex-row flex flex-col gap-6 items-baseline mt-6">
                {securityList.map((menu, idx) => {
                    return (
                        <SecurityButton
                            key={idx}
                            title={menu.title}
                            handleClick={handleClick(menu.show as boolean)}
                            selected={menu.show as boolean}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileSecurity;
