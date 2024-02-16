import React from "react";
import DeveloperTransactionHistory from "../../Button/DeveloperTransactionHistory";

const DeveloperFiatAccountOverview = () => {
    return (
        <div className="flex justify-between w-full h-max py-6 px-8 bg-app-black rounded-lg  flex-col xs:flex-row gap-5">
            <div className="flex flex-col mt-6">
                <div className="text-[30px] font-semibold leading-normal md:text-3xl 2xs:mb-8 mb-3 text-2xl">
                    FIAT ACCOUNT
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col">
                        <div className="text-[18px] font-medium leading-normal text-gray-400 mb-4">
                            Available balance
                        </div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">300.000 PIXP</div>
                            <div className="text-gray-400 text-lg">≈ 4.000.000 BUSD</div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-[20px]">
                        <div className="text-[18px] font-medium leading-normal text-gray-400 mb-4">
                            Estimated balance
                        </div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">300.000 PIXP</div>
                            <div className="text-gray-400 text-lg">≈ 4.000.000 BUSD</div>
                        </div>
                    </div>
                </div>
            </div>
            <DeveloperTransactionHistory />
        </div>
    );
};

export default DeveloperFiatAccountOverview;
