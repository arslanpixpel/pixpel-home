import React from "react";
import TransactionHistoryButton from "../../Button/TransactionHistoryButton";

const TradeAccountOverview = () => {
    return (
        <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline xs:flex-row flex-col gap-5">
            <div className="flex flex-col">
                <div className="text-[30px] font-semibold leading-normal mb-8">Trade account</div>
                <div className="text-[18px] font-mediumtext-[#717A8B]  mb-4">Estimated balance</div>
                <div className="flex gap-3 md:items-center flex-col md:flex-row pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                    <div className="text-[22px] font-semibold leading-normal">300.000 PIXP</div>
                    <div className=" text-[#717A8B]  text-[18px]  font-medium leading-normal">
                        = 3,832,194,124.10 TUSD
                    </div>
                </div>
            </div>
            <TransactionHistoryButton />
        </div>
    );
};

export default TradeAccountOverview;
