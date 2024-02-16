import React from "react";
import EnableButton from "../../Button/EnableButton";

const IDVerification = () => {
    return (
        <div className="flex gap-x-6 flex-col bg-app-black rounded-lg px-6 py-8 overflow-x-auto">
            <div className="flex gap-6 items-center">
                <div className="bg-app-green w-3 h-3 rounded-full flex-none"></div>
                <div className="text-lg font-semibold leading-normal">ID Verification</div>
            </div>
            <div className="flex mt-[30px] gap-6 items-baseline">
                <div className="bg-app-green w-3 h-3 rounded-full flex-none"></div>
                <div className="flex flex-col">
                    <div className="text-base font-medium leading-normal">Passport</div>
                    <div className="text-app-black-duration text-[12px] leading-normal">Verified: 03-07-2022</div>
                </div>
            </div>
            <div className="flex justify-between mt-[20px] items-center flex-col 2xs:flex-row">
                <div className="flex gap-6 items-baseline">
                    <div className="bg-app-red w-3 h-3 rounded-full flex-none"></div>
                    <div className="flex flex-col">
                        <div className="text-base font-medium leading-normal">ID country</div>
                        <div className="text-app-black-duration text-[12px] leading-normal">Not Verified</div>
                    </div>
                </div>
                <div className="flex pl-8 py-3 items-baseline">
                    <EnableButton className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium" title="Enable" />
                </div>
            </div>
            <div className="flex gap-6 mt-[20px] items-baseline">
                <div className="bg-app-green w-3 h-3 rounded-full flex-none"></div>
                <div className="flex flex-col">
                    <div className="text-base font-medium">Address</div>
                    <div className="text-app-black-duration text-[12px] leading-normal">Verified: 03-07-2022</div>
                </div>
            </div>
        </div>
    );
};

export default IDVerification;
