import React from "react";

const FiatBanks = () => {
    return (
        <div className="flex justify-between w-full h-max py-8 md:px-5 px-2 bg-app-black rounded-lg items-baseline flex-col md:flex-row gap-4">
            <div className="flex flex-col">
                <div className="text-[24px] font-medium leading-normal xl:text-3xl lg:text-2xl md:text-xl text-lg mb-[4px]">
                    Deposit payment method
                </div>
                <div className="text-[#717A8B] text-[18px] font-medium w-full ">
                    This data will be showed to the buyer of the crypto or token you are selling
                </div>
            </div>
            <div className="text-[18px] font-medium leading-normal bg-app-blue hover:bg-[#50D0FB] rounded-md px-6 py-2 hover:cursor-pointer active:bg-green-600">
                Deposit
            </div>
        </div>
    );
};

export default FiatBanks;
