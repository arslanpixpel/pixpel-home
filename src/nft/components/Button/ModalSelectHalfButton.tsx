import React from "react";

interface ModalSelectHalfButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}

const ModalSelectHalfButton = ({ title, selected, handleClick }: ModalSelectHalfButton) => {
    const className = "rounded-full w-3 h-3 flex-none";
    return (
        <div
            className="flex items-center gap-3 justify-center rounded-md py-4 px-2 xs:w-1/2 bg-app-black-button cursor-pointer"
            onClick={handleClick}
        >
            <div className={className + (selected ? " bg-app-green" : " bg-app-red")}></div>
            {title}
        </div>
    );
};

export default ModalSelectHalfButton;
