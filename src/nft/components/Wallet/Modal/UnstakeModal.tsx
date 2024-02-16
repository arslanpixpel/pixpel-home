import React, { useState } from "react";

interface WithdrawModal {
    setShowModal: (val: boolean) => void;
    showModal: boolean;
    selected: number;
}
const UnstakeModal = (props: WithdrawModal) => {
    return (
        <>
            {props.showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => props.setShowModal(false)}
                        ></div>
                        <div className="flex items-center px-4 py-6 min-h-screen">
                            <div className="relative flex flex-col w-full max-w-xl p-4 mx-auto bg-app-black-modal rounded-xl shadow-lg px-6 py-6 text-lg">
                                <div className="flex justify-between  my-3">
                                    <div className="flex text-2xl my-3 w-1/5"></div>
                                    {props.selected === 1 && <div className="flex text-2xl my-3">UNSTAKE</div>}
                                    <div
                                        className="flex py-3 px-8 bg-[#0196C9] rounded-md justify-center items-center cursor-pointer hover:bg-[#717A8B]"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        {props.selected === 0 && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21.25 13.75H7.5C6.11929 13.75 5 14.8693 5 16.25V25C5 26.3807 6.11929 27.5 7.5 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V16.25C23.75 14.8693 22.6307 13.75 21.25 13.75Z"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M8.84766 12.7578V9.00781C8.84766 7.35021 9.44029 5.7605 10.4952 4.5884C11.5501 3.41629 12.9808 2.75781 14.4727 2.75781C15.9645 2.75781 17.3952 3.41629 18.4501 4.5884C19.505 5.7605 20.0977 7.35021 20.0977 9.00781"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        )}
                                        {props.selected === 1 && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21.25 13.75H7.5C6.11929 13.75 5 14.8693 5 16.25V25C5 26.3807 6.11929 27.5 7.5 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V16.25C23.75 14.8693 22.6307 13.75 21.25 13.75Z"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M8.84766 12.7578V9.00781C8.84766 7.35021 9.44029 5.7605 10.4952 4.5884C11.5501 3.41629 12.9808 2.75781 14.4727 2.75781C15.9645 2.75781 17.3952 3.41629 18.4501 4.5884C19.505 5.7605 20.0977 7.35021 20.0977 9.00781V12.7578"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-3 w-full">
                                    <div className="flex flex-col w-full ">
                                        <div className="mb-2 text-base">Game:</div>

                                        <div
                                            className="flex w-full justify-start items-center bg-[#37404C]  cursor-pointer py-3 px-5 rounded-md text-lg font-medium"
                                            onClick={() => props.setShowModal(false)}
                                        >
                                            CRYPTOBOTS
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full ">
                                        <div className="mb-2 text-base">Name</div>

                                        <div
                                            className="flex w-full justify-start items-center bg-[#37404C]  cursor-pointer py-3 px-5 rounded-md text-lg font-medium"
                                            onClick={() => props.setShowModal(false)}
                                        >
                                            BOTS2
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 w-full mt-8">
                                    <div className="flex flex-col w-full ">
                                        <div className="mb-2 text-base">Token:</div>

                                        <div
                                            className="flex w-full justify-start items-center bg-[#37404C]  cursor-pointer py-3 px-5 rounded-md text-lg font-medium"
                                            onClick={() => props.setShowModal(false)}
                                        >
                                            PIXP
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full ">
                                        <div className="mb-2 text-base">Available:</div>

                                        <div
                                            className="flex w-full justify-start items-center bg-[#37404C]  cursor-pointer py-3 px-5 rounded-md text-lg font-medium"
                                            onClick={() => props.setShowModal(false)}
                                        >
                                            1,000.000
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex w-full justify-end items-center bg-[#37404C]  cursor-pointer py-3 px-5 rounded-md mb-4 text-lg font-medium mt-20"
                                    onClick={() => props.setShowModal(false)}
                                >
                                    XXXXXXXXXXXXXX
                                </div>
                                <div
                                    className="flex w-full justify-center items-center bg-[#0196C9] hover:bg-[#50D0FB] cursor-pointer py-3 rounded-md my-6 text-lg font-medium"
                                    onClick={() => props.setShowModal(false)}
                                >
                                    UNSTAKE
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default UnstakeModal;
