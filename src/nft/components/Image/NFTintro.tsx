import Image, { StaticImageData } from "next/image";
import React from "react";

interface GameIntroProps {
    image: string | StaticImageData;
    name: string;
    bid: string;
}

const NFTintro = ({ image, name, bid }: GameIntroProps) => {
    return (
        <div className="flex cursor-pointer group flex-col gap-0">
            <div
            // className="w-72 h-72" style={{ backgroundImage: `url(${image})` }}
            >
                <Image src={image} alt="" width={293} height={293} className="rounded-tr-[20px] rounded-tl-[20px]" />
                {/* <div className="relative bg-app-black-button h-16 w-16 left-52 top-4" /> */}
            </div>
            <div className="bg-[#555B63] rounded-bl-[20px] rounded-br-[20px] px-[17px] pt-[6px] pb-[23px] group-hover:bg-[#50D0FB]">
                <div className="flex justify-between">
                    <div className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] ">Name</div>
                    <h4 className="text-[#FFFFFF] font-normal  text-[16px] leading-[24px] text-right">Bid</h4>
                </div>
                <div className="flex justify-between">
                    <div className="font-medium text-[22px] leading-[33px]  text-right">{name}</div>
                    <div className="text-app-blue text-[22px] leading-[33px]  font-medium">{bid}</div>
                </div>
            </div>
        </div>
    );
};

export default NFTintro;
