import React, { useState } from "react";
import BNB from "@public/assets/images/UserHome/bnb.png";
import LiquidityCreateModal from "./LiquidityCreateModal";
import Image from "next/image";

interface LiquidityModal {
    setShowModal: (val: boolean) => void;
    showModal: boolean;
}
export default function LiquidityModal(props: LiquidityModal) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const handleCreateModal = () => {
        setShowCreateModal(true);
    };
    return (
        <>
            {props.showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => props.setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative flex flex-col mx-auto text-lg shadow-lg w-158 bg-app-black-modal rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]">
                                <div className="flex mb-5">
                                    <div className="text-[24px] leading-normal font-medium 2xs:text-2xl">
                                        You are creating a pool
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2 mb-5 2xs:gap-4">
                                    <div className="flex">
                                        <Image height={40} width={40} className="h-6 2xs:h-10" src={BNB} alt={""} />
                                    </div>
                                    <div className="text-[48px] font-medium l 2xs:text-5xl">BNB/PIXP</div>
                                </div>
                                <div className="text-xs 2xs:text-base">
                                    <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black">
                                        <div className="font-normal ">BNB Deposited</div>
                                        <div className="font-medium text-blue-700">0.103576</div>
                                    </div>
                                    <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black">
                                        <div className="font-normal ">PIXP Deposited</div>
                                        <div className="font-medium text-blue-700">20</div>
                                    </div>
                                    <div className="flex flex-col py-5 mb-2 rounded-md px-7 bg-app-black">
                                        <div className="flex flex-row justify-between mb-3">
                                            <div className="font-normal">Rotes</div>
                                            <div className="font-medium text-blue-700">1 BNB = 193.1 PIXP</div>
                                        </div>
                                        <div className="flex flex-row justify-end">
                                            <div className="font-medium text-blue-700">1 PIXP = 0.005179 BNB</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black">
                                        <div className="font-normal">Share of Pool</div>
                                        <div className="font-medium text-blue-700">100%</div>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-center rounded-md cursor-pointer h-14 bg-[#2EBD85] hover:bg-[#1FF19F]"
                                    onClick={handleCreateModal}
                                >
                                    <div className="text-lg">Create Pool & Supply</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <LiquidityCreateModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} />
        </>
    );
}
