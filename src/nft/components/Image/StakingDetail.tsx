import Image from "next/image";
import React from "react";

interface StackingDetailProps {
    locked: boolean;
}

const StakingDetail = ({ locked }: StackingDetailProps) => {
    return (
        <div className="bg-app-black px-3.5 py-8 w-full max-w-[500px] rounded-[20px]">
            <div className="relative rounded-[10px] w-full mb-8 flex justify-between ">
                <Image
                    src={"/assets/images/stakingicon.png"}
                    alt=""
                    width={500}
                    height={319}
                    className="w-full h-full cursor-pointer hover:opacity-[0.24] hover_stacking_image"
                />
                <div className="bg-app-blue rounded-md w-21 h-11 max-sm:w-fit max-sm:h-fit max-sm:p-3 flex justify-center items-center absolute left-0 ml-[9.5px]">
                    {locked ? (
                        <svg
                            className="h-5 w-5 max-sm:w-3 max-sm:h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    ) : (
                        <svg
                            className="h-5 w-5 max-sm:w-3 max-sm:h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
                            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                        </svg>
                    )}
                </div>
                <div className="bg-button text-[16px] font-medium leading-normal rounded-md w-44 h-11 flex max-sm:text-[12px] max-sm:w-fit max-sm:h-fit max-sm:p-[5px] justify-center items-center absolute right-0 mr-[8.5px]">
                    PIXPEL WARRANTY
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="bg-app-black-button items-center rounded-lg px-8 py-5 flex justify-between">
                    <div className="font-medium text-[16px] leading-[24px] ">USER</div>
                    <div className="text-[18px] leading-[27px] font-semibold text-right">100 K</div>
                </div>
                <div className="bg-app-black-button items-center rounded-lg px-8 py-5 flex justify-between">
                    <div className="font-medium text-[16px] leading-[24px] ">ARP</div>
                    <div className="text-[18px] leading-[27px] font-semibold text-right">30%</div>
                </div>
                <div className="bg-app-black-button items-center rounded-lg px-8 py-5 flex justify-between">
                    <div className="font-medium text-[16px] leading-[24px]">COIN</div>
                    <div className="text-[18px] leading-[27px] font-semibold text-right">PIXP</div>
                </div>
                <div className="bg-app-black-button items-center rounded-lg px-8 py-5 flex justify-between">
                    <div className="font-medium text-[16px] leading-[24px]">STAKING</div>
                    <div className="text-[18px] leading-[27px] font-semibold text-right">3 MUSD</div>
                </div>
            </div>
        </div>
    );
};

export default StakingDetail;
