import React from "react";
import { devicesList } from "@nft/pages-components/Profile/datalist";

interface DeviceModal {
    setShowModal: (val: boolean) => void;
    showModal: boolean;
}

const DeviceModal = (props: DeviceModal) => {
    return (
        <>
            {props.showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => props.setShowModal(false)}
                        ></div>
                        <div className="flex items-center xs:px-4 py-6 px-2 min-h-screen">
                            <div
                                className="relative flex flex-col w-full max-w-2xl p-4 mx-auto 
															rounded-xl shadow-lg xs:px-12 xs:py-12 py-3 px-1 text-lg"
                            >
                                <div className="h-auto w-full xs:py-10 xs:px-12 px-2 py-2 bg-app-black flex flex-col rounded-lg">
                                    <div className="text-2xl font-semibold">Devices</div>
                                    <div className="flex flex-col">
                                        {devicesList.map((device, idx) => {
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`flex flex-row justify-between ${
                                                        idx !== devicesList.length - 1
                                                            ? "border-b-2 border-app-black"
                                                            : ""
                                                    } items-center py-4`}
                                                >
                                                    <div className="flex flex-col">
                                                        <div className="font-medium text-base">{device.title.OS}</div>
                                                        <div className="text-gray-400" style={{ fontSize: "12px" }}>
                                                            {device.title.locate}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="font-medium text-base text-end">
                                                            {device.title.level}
                                                        </div>
                                                        <div className="text-gray-400" style={{ fontSize: "12px" }}>
                                                            {device.title.time}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default DeviceModal;
