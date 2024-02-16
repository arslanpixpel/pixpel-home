import React from "react";
import ProfileCircle from "../../Profile/ProfilePlayer/ProfileCircle";

const WalletOverview = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row gap-8 justify-between w-full h-max py-12 px-10 bg-app-black rounded-lg">
            <div className="flex flex-col">
                <div className="text-[30px] leading-normal font-semibold mb-8 ">WALLET OVERVIEW</div>
                <div className="text-[#717A8B] text-[18px] font-medium mb-4 leading-normal">Value Purchase</div>
                <div className="flex xs:gap-3 gap-1 xs:items-center px-4 w-full bg-app-black-button py-3 rounded-md xs:flex-row flex-col">
                    <div className="text-[22px] font-semibold leading-normal ">300.000 PIXP</div>
                    <div className="text-[#717A8B] font-medium  text-[18px] ">= 3,832,194,124.10 TUSD</div>
                </div>
            </div>
            <ProfileCircle />
        </div>
    );
};

export default WalletOverview;
