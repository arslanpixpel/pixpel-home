import React from "react";
import { devicesList } from "@nft/pages-components/Profile/datalist";

const ProfileDevices = () => {
    return (
        <div className="h-auto lg:w-1/2 w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
            <div className="text-white text-[24px] leading-normal font-semibold">Devices</div>
            <div className="flex flex-col">
                {devicesList.map((device, idx) => {
                    return (
                        <div key={idx} className="flex flex-row justify-between border-b-2 border-app-black pb-4 my-2">
                            <div className="flex flex-col">
                                <div className="text-white font-medium text-[16px] leading-normal">
                                    {device.title.OS}
                                </div>
                                <div className="text-app-black-duration font-medium text-[12px] leading-normal">
                                    {device.title.locate}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-white font-medium text-[16px] leading-normal">
                                    {device.title.level}
                                </div>
                                <div className="text-app-black-duration font-medium text-[12px] leading-normal">
                                    {device.title.time}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileDevices;
