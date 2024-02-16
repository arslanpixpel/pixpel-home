import React from "react";

interface EditButton {
    title: string;
}

const EditButton = (props: EditButton) => {
    return (
        <div className="flex rounded-md bg-app-black hover:bg-[#0196C9] py-[10px] px-[30px] justify-center cursor-pointer mb-5 mx-10 w-[91px] h-[44px] sm:mx-2">
            <div className="gap-2 px-6 justify-center items-center">
                <button className="text-[16px] leading-normal font-semibold">{props.title}</button>
            </div>
        </div>
    );
};
export default EditButton;
