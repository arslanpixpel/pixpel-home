import React from "react";

interface TokenButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}
const TokenButton = ({ handleClick, title, selected }: TokenButton) => {
    const className = "rounded-md cursor-pointer";
    return (
        <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={handleClick}>
            {/* lg:px-12 change to 8 if find any UI bugs in othercomponents then revert it to 12  */}
            <div className=" flex items-center font-semibold text-[18px] leading-normal justify-center gap-2 lg:px-8 px-4 py-4">
                {title}
            </div>
        </div>
    );
};
export default TokenButton;
