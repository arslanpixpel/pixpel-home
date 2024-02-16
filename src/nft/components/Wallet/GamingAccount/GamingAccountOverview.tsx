import React from "react";
import TransactionHistoryButton from "../../Button/TransactionHistoryButton";

const GamingAccountOverview = () => {
    return (
        <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline flex-col xs:flex-row gap-5">
            <div className="flex flex-col">
                <div className="md:text-3xl 2xs:mb-8 mb-3 text-[30px] font-semibold leading-normal ">GAME ACCOUNT</div>
                <div className="text-smtext-[#717A8B]  mb-4 text-[18px] font-medium leading-normal">
                    Estimated balance
                </div>
                <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                    <div className="text-[22px] font-semibold leading-normal">300.000 PIXP</div>
                    <div className=" text-[#717A8B]  text-sm">= 3,832,194,124.10 TUSD</div>
                </div>
            </div>
            <TransactionHistoryButton />
        </div>
    );
};

export default GamingAccountOverview;
