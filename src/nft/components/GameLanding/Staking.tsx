import React, { MutableRefObject, useState } from "react";
import StakingModal from "../Modal/StakingModal";

import bnb from "@public/assets/images/UserHome/bnb.png";
import eth from "@public/assets/images/UserHome/eth.png";
import btc from "@public/assets/images/UserHome/btc.png";
import luna from "@public/assets/images/UserHome/luna.png";
import Image, { StaticImageData } from "next/image";

interface stakingListType {
    id: number;
    img: StaticImageData | string;
    token: string;
    minimun: string;
    duration: string[];
    invest: number;
}
interface skatingProps {
    scrollToRef: MutableRefObject<HTMLDivElement>;
}

const stakingList: stakingListType[] = [
    {
        id: 1,
        img: bnb,
        token: "BNB",
        invest: 7.8,
        duration: ["90"],
        minimun: "2 BNB",
    },
    {
        id: 2,
        img: eth,
        token: "ETH",
        invest: 2.2,
        duration: ["30", "90", "120"],
        minimun: "200 ETH",
    },
    {
        id: 3,
        img: btc,
        token: "BTC",
        invest: 1.03,
        duration: ["120", "LOCKED"],
        minimun: "0.02 BNB",
    },
    {
        id: 4,
        img: luna,
        token: "LUNA",
        invest: 54.2,
        duration: ["90", "120"],
        minimun: "835,213 LUNA",
    },
];

const Staking = ({ scrollToRef }: skatingProps) => {
    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    return (
        <>
            <div
                className="flex flex-col 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4 gap-2 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-3 2xl:py-24 xl:py-20 lg:py-16 md:py-12 sm:py-9 py-5"
                ref={scrollToRef}
            >
                <div className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold">Staking</div>
                <div className="overflow-x-auto relative">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <td className=" text-[#717A8B]  w-1/4">Token</td>
                                <td className=" text-[#717A8B]  w-1/5 px-10">Invest</td>
                                <td className=" text-[#717A8B]  w-1/4 px-10">Duration</td>
                                <td className=" text-[#717A8B]  w-1/4 px-10">Minimun</td>
                                <td className=" text-[#717A8B]  px-6"></td>
                            </tr>
                        </thead>
                        <tbody className="px-4">
                            {stakingList.map((staking, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td className="py-3">
                                            <div className="flex gap-2 items-center">
                                                <Image
                                                    src={staking.img as StaticImageData}
                                                    alt="token"
                                                    className="md:w-10 sm:w-7 w-5"
                                                />
                                                <div className="md:text-lg sm:text-base text-sm">{staking.token}</div>
                                            </div>
                                        </td>
                                        <td className="px-10">
                                            <div className="text-app-green flex items-center">{staking.invest}%</div>
                                        </td>
                                        <td className="px-10">
                                            <div className="flex items-center gap-3">
                                                {staking.duration?.map((day, idx) => {
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="bg-app-black-duration py-2 sm:px-7 px-5 md:text-lg sm:text-base text-sm rounded-md"
                                                        >
                                                            {day}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-10">
                                            <div className="md:text-lg sm:text-base text-sm">{staking.minimun}</div>
                                        </td>
                                        <td className="px-10">
                                            <div
                                                className="bg-app-green cursor-pointer px-7 py-2 md:text-lg sm:text-base text-sm rounded-md"
                                                onClick={() => setShowModal(true)}
                                            >
                                                STAKE
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {<StakingModal showModal={showModal} setShowModal={setShowModal} />}
        </>
    );
};

export default Staking;
