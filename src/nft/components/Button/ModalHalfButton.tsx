import React from "react";

interface ModalHalfButton {
    title: string;
    handleClick: () => void;
}

const ModalHalfButton = (props: ModalHalfButton) => {
    return (
        <div
            className="flex items-center justify-center rounded-md py-4 px-2 w-1/2 bg-[#29313C] hover:bg-[#37404C] cursor-pointer hover:"
            onClick={props.handleClick}
        >
            {props.title}
        </div>
    );
};

export default ModalHalfButton;
