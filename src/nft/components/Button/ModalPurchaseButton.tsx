import React from "react";

interface ModalPurchaseButton {
    title: string;
    selected: boolean;
    handleClick: () => void;
}

const ModalPurchaseButton = ({ title, selected, handleClick }: ModalPurchaseButton) => {
    const className = "rounded-full w-3 h-3 flex-none font-medium text-base";
    return (
        <div
            className="flex justify-center gap-3 items-center py-3 px-6 rounded-lg bg-app-black-button hover:cursor-pointer"
            onClick={handleClick}
        >
            <div className={className + (selected ? " bg-app-green" : " bg-app-red")}></div>
            {title}
        </div>
    );
};

export default ModalPurchaseButton;
