import React, { useEffect, useState } from "react";
import Clock from "@public/assets/images/clock.svg";
import DeveloperTransactionHistory from "../../Button/DeveloperTransactionHistory";
import Image from "next/image";

interface Button {
    selected: number;
}
const DeveloperStartAccountOverview = ({ selected }: Button) => {
    const className = "flex gap-3 items-center pl-5 pr-12 bg-app-black-button h-max rounded-md py-4 w-max";
    const [tempBalance, setTempBalance] = useState("");
    useEffect(() => {
        selected === 0 ? setTempBalance("Fiat Balance") : setTempBalance("Token balance");
    }, [selected]);
    return (
        <div className="flex justify-between w-full h-max pt-10 pb-12 md:px-10 px-2 bg-app-black rounded-lg">
            <div className="flex flex-col w-full">
                <div className="flex md:flex-row flex-col gap-3 justify-between mb-8 md:items-end">
                    <div className="text-[30px] font-semibold leading-normal">START ACCOUNT</div>
                    <DeveloperTransactionHistory />
                </div>
                <div className="flex xl:flex-row flex-col xl:items-end md:pr-16 gap-10 items-center">
                    <div className="flex md:w-5/6 justify-between flex-col md:flex-row items-center">
                        <div className="flex flex-col">
                            <div className="text-[18px] font-mediumtext-[#717A8B]  mb-2">Estimated balance</div>
                            <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                                <div className="text-[22px] font-semibold leading-normal">300.000 PIXP</div>
                                <div className=" text-[#717A8B]  text-[18px] font-medium leading-normal">
                                    = 3,832,194,124.10 TUSD
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[18px] font-medium text-gray-400 mb-2">{tempBalance}</div>
                            <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                                <div className="text-[22px] font-semibold leading-normal">300.000 PIXP</div>
                                <div className=" text-[#717A8B]  text-[18px] font-medium">= 3,832,194,124.10 TUSD</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center h-[60px]">
                        <div className={className + (selected === 0 ? " hidden" : "")}>
                            <Image src={Clock} alt="history" />
                            <div className="text-[18px] font-medium leading-normal">History</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperStartAccountOverview;
