import React from "react";
import TransactionHistoryButton from "../../Button/TransactionHistoryButton";

const StakingAccountOverview = () => {
    return (
        <div className="flex justify-between w-full h-max pt-4 pb-10 md:px-10 px-2 bg-app-black rounded-lg">
            <div className="flex flex-col w-full">
                <div className="flex mt-[20px] md:flex-row flex-col gap-3 justify-between mb-8 md:items-end">
                    <div className="text-[30px] leading-normal font-semibold">STAKING ACCOUNT</div>
                    <TransactionHistoryButton />
                </div>

                <div className="flex xl:flex-row flex-col xl:items-end md:pr-16 gap-10">
                    <div className="flex  justify-between flex-col md:flex-row gap-5    ">
                        <div className="flex flex-col">
                            <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-2">Balance</div>
                            <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                                <div className="text-[22px] font-semibold leading-normal">1.000.000 PIXP</div>
                                <div className=" text-[#717A8B]  text-[18px] font-medium leading-normal">
                                    ≈ 5.000.000 BUSD
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className=" text-[#717A8B]  mb-2 text-[18px] font-medium">Balance in Stake</div>
                            <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                                <div className="text-[22px] font-semibold leading-normal ">5.000.000 PIXP</div>
                                <div className=" text-[#717A8B]  text-[18px] font-medium leading-normal">
                                    ≈ 5.000.000 BUSD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingAccountOverview;
