import React from "react";
import DeveloperTransactionHistory from "../../Button/DeveloperTransactionHistory";

const DeveloperStakingAccountOverview = () => {
    return (
        <div className="flex justify-between w-full h-max py-9 px-8 bg-app-black rounded-lg items-baseline xs:flex-row flex-col gap-5 pb-12">
            <div className="flex flex-col">
                <div className=" text-[30px] font-semibold leading-normal sm:text-3xl mb-8 text-xl">
                    STAKING ACCOUNT
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col">
                        <div className="text-[18px] font-medium leading-normal text-[#717A8B]  mb-4">Balance</div>
                        <div className="flex gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md md:flex-row flex-col">
                            <div className="text-[22px] font-semibold leading-normal">300.000 PIXP</div>
                            <div className=" text-[#717A8B]  text-[18px] leading-normal">≈ 5.000.000 BUSD</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[18px] font-medium leading-normal text-[#717A8B]  mb-4">
                            Balance in Stake
                        </div>
                        <div className="flex gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md md:flex-row flex-col">
                            <div className="text-[22px] font-semibold leading-normal">5.000.000 PIXP</div>
                            <div className=" text-[#717A8B]  text-[18px] leading-normal">≈ 5.000.000 BUSD</div>
                        </div>
                    </div>
                </div>
            </div>
            <DeveloperTransactionHistory />
        </div>
    );
};

export default DeveloperStakingAccountOverview;
