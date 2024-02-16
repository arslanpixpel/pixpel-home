import React from "react";

interface Button {
    title: string;
    handleClick: () => void;
}
const SwapButton = ({ title, handleClick }: Button) => {
    return (
        <div
            className=" text-[16px] flex bg-app-blue hover:bg-[#50D0FB] py-2 px-5 h-max w-max text-base font-medium rounded-md cursor-pointer active:bg-violet-700"
            onClick={handleClick}
        >
            {title}
        </div>
    );
};

export default SwapButton;
