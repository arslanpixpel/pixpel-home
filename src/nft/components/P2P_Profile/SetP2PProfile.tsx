import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import sucessImage from "@public/assets/images/sucess.svg";
import Link from "next/link";
import { paymentMethod } from "./datalist";

function SetP2PProfile() {
    const [payment, setPayment] = useState("set");
    const [show, setshow] = useState(false);
    const { push } = useRouter();
    const handleClickArrow = () => {
        // navigate.back();
        push("/player/profile");
    };

    const sucessPopup = () => {
        setshow(true);
    };

    const closeModal = () => {
        setshow(false);
    };
    const [showDropDown, setShowDropDown] = useState(false);
    // const [selectedContent, setSelectedContent] = useState(props.initialContent);
    const handleDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
        }
    };
    const selectHandleClick = (contentTitle: string) => {
        // setSelectedContent(contentTitle);
        setShowDropDown(false);
    };
    return (
        <div>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center z-100">
                    {/* <div className="modal-bg fixed inset-0 bg-black opacity-50" onClick={closeModal}></div> */}
                    <div className="bg-[#1F2630] w-[364px] h-[370px] p-4 rounded-lg shadow-lg flex flex-col justify-around items-center text-center ">
                        <Image alt="successImage" src={sucessImage} width={130} height={130} />
                        <h2 className="text-xl font-semibold text-[#FFF] text-[24px] leading-normal">
                            Saved Successfully
                        </h2>
                        <div>
                            <Link href="/player/profile">
                                {" "}
                                <button
                                    onClick={closeModal}
                                    className="w-[203px] h-[67px] bg-[#2EBD85] hover:bg-[#1FF19F] text-white font-semibold py-2 px-4 rounded-[5px]"
                                >
                                    OK
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex px-36 justify-center">
                <div className="flex w-full items-center justify-between">
                    <div
                        className="flex items-center justify-center cursor-pointer -mr-10 w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
                        onClick={handleClickArrow}
                    >
                        <svg
                            className="h-6 w-6 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="11" y2="18" />
                            <line x1="5" y1="12" x2="11" y2="6" />
                        </svg>
                    </div>
                    <p className="text-white text-2xl font-medium">Set P2P profile</p>
                    <div></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="text-white text-base font-medium mt-3.5">Payment Methods</p>
                <p className="text-app-black-duration font-medium text-sm bg-app-black px-3 py-2 rounded-[5px] mt-6">
                    The payment method added will be displayed to buyer as option to accept payment.
                </p>

                {/* <div className="flex flex-col justify-center items-center w-full">
                    <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                        <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                            <div className="text-[14px] bg-transparent outline-none border-l border-l-4 border-[#0196C9] px-2">
                                UPI
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                            <div className="w-full">
                                <p className="text-[#FFFFFF73] text-[15px] ">Name:</p>
                                <input
                                    className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                    placeholder="Juan Vivas"
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                <input
                                    className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                    placeholder="juanvivas@venezuelanbank"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[33px] flex justify-center">
                        <button
                            className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-[20px] items-center gap-x-[5px] text-white text-[18px]"
                            onClick={() => setPayment("add")}
                        >
                            + Add Payment Method
                        </button>
                    </div>
                    <div className="flex gap-x-[50px] mt-[135px]">
                        <button className="text-[16px] text-white bg-app-black px-[68px] py-[15px] rounded-[5px]">
                            Cancel
                        </button>
                        <button className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]">
                            Save
                        </button>
                    </div>
                </div> */}

                {payment === "add" ? (
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="min-w-[958px] border-b border-[#37404C] pb-[80px]">
                            <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                <div className="text-[14px] bg-transparent outline-none  border-l-4 border-[#2EBD85] px-2">
                                    Bank Transfer
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] font-medium mb-[5px]">
                                        Account holder name:
                                    </p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Juan Vivas"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] font-medium  mb-[5px] leading-normal">
                                        Account number:
                                    </p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="juanvivas@venezuelanbank"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">IFSC code:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Enter yur IFSC code"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] fon">Account type:</p>
                                    <input
                                        className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="(savings or current)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-[50px] mt-[34px]">
                            <button
                                className="text-[16px] text-white bg-app-black px-[68px] py-[15px] rounded-[5px]"
                                onClick={() => setPayment("set")}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px] hover:bg-[#1FF19F]"
                                onClick={() => setPayment("save")}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ) : payment === "set" ? (
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                            <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                <div className="text-sm font-medium bg-transparent outline-none border-l-4 border-app-blue px-2">
                                    UPI
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-[99px] mt-[14px] w-full">
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] mb-[6px] font-medium ">Name:</p>
                                    <input
                                        className="text-white text-[16px] font-medium placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="Juan Vivas"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                    <input
                                        className="text-white text-[16px] font-medium  placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                        placeholder="juanvivas@venezuelanbank"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[33px] flex justify-center">
                            {/* <DropDownP2p
                                backgroundColor="black"
                                contentList={paymentMethod}
                                initialContent=""
                                key={""}
                            /> */}
                            <div onClick={handleDropDown}>
                                <div className="flex">
                                    <button
                                        className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-2.5 items-center gap-x-[5px] text-white text-lg font-medium hover:bg-[#50D0FB]"
                                        // onClick={() => setPayment("add")}
                                        onClick={handleDropDown}
                                    >
                                        + Add Payment Method
                                    </button>
                                </div>
                                <div className="relative">
                                    {showDropDown === true ? (
                                        <div className="absolute inset-0 z-10">
                                            <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                                            <div className="flex flex-col bg-app-black-button rounded-b-md">
                                                {paymentMethod.map((content, idx) => {
                                                    const isLastItem = idx === paymentMethod.length - 1;

                                                    return (
                                                        <div
                                                            key={idx}
                                                            className={`relative flex justify-start pt-[8px] pb-[8px] border-b-2 border-app-black w-full ${
                                                                isLastItem ? "border-b-0" : ""
                                                            }`}
                                                            onClick={() => {
                                                                selectHandleClick(content.title);
                                                            }}
                                                        >
                                                            <div className="flex flex-col w-full">
                                                                <div
                                                                    className="text-base font-medium hover:text-app-blue px-5 mb-[5px] cursor-pointer"
                                                                    onClick={() => setPayment("add")}
                                                                >
                                                                    {content.title}
                                                                </div>
                                                                {!isLastItem && (
                                                                    <div className="bg-[#717A8B] h-[1px] w-full"></div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            {/* <button
                                className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-2.5 items-center gap-x-[5px] text-white text-lg font-medium hover:bg-[#50D0FB]"
                                onClick={() => setPayment("add")}
                            >
                                + Add Payment Method
                            </button> */}
                        </div>
                        <div className="flex gap-x-[50px] mt-[135px]">
                            <Link href="/player/profile">
                                {" "}
                                <button className="text-[16px]  font-medium bg-[#29313C] px-[68px] py-[15px] rounded-[5px] hover:bg-[#37404C] text-[#FFFFFF]">
                                    Cancel
                                </button>
                            </Link>
                            <button
                                className="text-[16px] font-medium  bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px]  hover:bg-[#1FF19F] text-[#FFFFFF]"
                                onClick={sucessPopup}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                ) : payment === "save" ? (
                    <>
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="min-w-[958px] border-b border-[#37404C] pb-[18px]">
                                <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                    <div className="text-[14px] bg-transparent outline-none  border-l-4 border-[#0196C9] px-2">
                                        UPI
                                    </div>
                                </div>
                                <div className="flex justify-between gap-x-[99px] mt-[14px] w-full border-b border-[#37404C] pb-[18px]">
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Name:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="Juan Vivas"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">UPI ID:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="juanvivas@venezuelanbank"
                                        />
                                    </div>
                                </div>
                                <div className="bg-[#37404C] px-[22px] py-[15px] rounded-[5px] mt-[40px] ">
                                    <div className="text-[14px] bg-transparent outline-none  border-l-4 border-[#2EBD85] px-2">
                                        Bank Transfer
                                    </div>
                                </div>
                                <div className="flex justify-between gap-x-[99px] mt-[18px] w-full">
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Account holder name:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="Juan Vivas"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[#FFFFFF73] text-[15px] ">Account number:</p>
                                        <input
                                            className="text-white text-[16px] placeholder:text-app-black-duration w-full bg-app-black px-[22px] py-[15px] rounded-[5px]"
                                            placeholder="juanvivas@venezuelanbank"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[33px] flex justify-center">
                                <button
                                    className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-[20px] items-center gap-x-[5px] text-white text-[18px]"
                                    onClick={() => setPayment("add")}
                                >
                                    + Add Payment Method
                                </button>
                            </div>
                            <div className="flex gap-x-[50px] mt-[82px]">
                                {/* <Link href="/player/profile"> */}
                                <button
                                    className="text-[16px] text-white bg-[#2EBD85] px-[68px] py-[15px] rounded-[5px] hover:bg-[#1FF19F]"
                                    onClick={sucessPopup}
                                >
                                    Save
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default SetP2PProfile;
