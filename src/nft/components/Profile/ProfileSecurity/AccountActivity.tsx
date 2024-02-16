import React, { useState } from "react";
import ActivityModal from "../Modal/ActivityModal";
import DeviceModal from "../Modal/DeviceModal";

const AccountActivity = () => {
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [showDeviceModal, setShowDeviceModal] = useState(false);

    return (
        <>
            <div className="flex flex-col bg-app-black rounded-lg px-6 py-8 gap-x-6 overflow-x-auto">
                <div className="flex items-center gap-6">
                    <div className="rounded-full w-3 h-3 bg-app-green flex-none"></div>
                    <div className="text-[18p] font-semibold leading-normal">Devices and activites</div>
                </div>
                <div className="flex justify-between mt-[30px] items-end flex-col 2xs:flex-row">
                    <div className="flex gap-6 items-baseline">
                        <div className="bg-app-green w-3 h-3 rounded-full flex-none"></div>
                        <div className="flex flex-col">
                            <div className="text-[16px] leading-normal font-medium">Safe devices</div>
                            <div className="text-[#717A8B] text-[12px] leading-normal font-normal">
                                Verified: 03-07-2022
                            </div>
                        </div>
                    </div>
                    <div className="ml-8 ">
                        <div
                            className="text-sm font-medium bg-app-blue hover:bg-[#50D0FB] rounded-md px-4 py-2 cursor-pointer flex justify-center items-baseline"
                            onClick={() => {
                                setShowDeviceModal(true);
                            }}
                        >
                            Manage
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-8">
                    <div className="text-base font-medium leading-normal">Account activity</div>
                    <div
                        className="text-[14px] leading-normal font-medium bg-app-blue hover:bg-[#50D0FB] rounded-md px-4 py-2 cursor-pointer flex justify-center items-center"
                        onClick={() => {
                            setShowActivityModal(true);
                        }}
                    >
                        View
                    </div>
                </div>
            </div>
            {<ActivityModal showModal={showActivityModal} setShowModal={setShowActivityModal} />}
            {<DeviceModal showModal={showDeviceModal} setShowModal={setShowDeviceModal} />}
        </>
    );
};

export default AccountActivity;
