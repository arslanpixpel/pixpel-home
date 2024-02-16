import React from "react";
import Graph from "@public/assets/images/UserHome/graph-clone.png";
import Image from "next/image";

const GraphCard = () => {
    return (
        <>
            <div className="flex flex-col h-full !pb-[76px] text-lg bg-app-black rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] ">
                <div className="flex items-center justify-center rounded-md cursor-pointer w-36 bg-app-black-button hover:bg-app-blue h-14">
                    <div className="text-[18px] font-medium leading-normal">BTC/USDT</div>
                </div>
                <div className="flex flex-col justify-between mt-4 sm:items-center sm:flex-row">
                    <div className="flex flex-row items-center mb-5 sm:mb-0">
                        <div className="flex items-center justify-center h-16 px-2 mr-4 rounded-md cursor-pointer w-60 bg-app-black-button">
                            <div className="text-[24px] font-medium 1xl:text-2xl">40656.65839907</div>
                        </div>
                        <div className="flex items-center justify-center w-24 h-12 px-2 bg-red-500 rounded-md cursor-pointer">
                            <div className="text-[18px] font-medium 1xl:text-base">-1.59</div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex items-center justify-center h-12 rounded-md cursor-pointer w-36 bg-app-black-button">
                            <div className=" text-[#717A8B]  text-[18px] font-medium leading-normal">Past 24 Hours</div>
                        </div>
                    </div>
                </div>
                <div className="flex h-72 mt-7">
                    <Image className="w-full h-full" src={Graph} alt={""} />
                </div>
                <div className="flex flex-row justify-end gap-3 mt-8">
                    <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
                        <div className="text-[18px] leading-norma text-[#717A8B]">24H</div>
                    </div>
                    <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
                        <div className="text-[18px] leading-normal text-[#717A8B]">1W</div>
                    </div>
                    <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
                        <div className="text-[18px] leading-normal text-[#717A8B]">1M</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GraphCard;
