import React, { useState } from "react";

interface DropDownButton {
    initialContent: string;
    contentList: { title: string }[];
    backgroundColor: string;
}

const DropDownP2p = (props: DropDownButton) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedContent, setSelectedContent] = useState(props.initialContent);
    const handleDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowDropDown(true);
        }
    };
    const selectHandleClick = (contentTitle: string) => {
        setSelectedContent(contentTitle);
        setShowDropDown(false);
    };

    return (
        <>
            <div onClick={handleDropDown}>
                <div className="flex">
                    <button
                        className="flex bg-[#0095C8] rounded-[5px] px-[30px] py-2.5 items-center gap-x-[5px] text-white text-lg font-medium hover:bg-[#50D0FB]"
                        // onClick={() => setPayment("add")}
                        onClick={handleDropDown}
                    >
                        + Add Payment Method
                    </button>
                </div>
                <div className="relative">
                    {showDropDown === true ? (
                        <div className="absolute inset-0 z-10">
                            <div className="fixed inset-0 w-full h-full" onClick={handleDropDown}></div>
                            <div className="flex flex-col bg-app-black-button rounded-b-md">
                                {props.contentList?.map((content, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="relative flex justify-start py-3 border-b-2 border-app-black w-ful"
                                            onClick={() => {
                                                selectHandleClick(content.title);
                                            }}
                                        >
                                            <div className="flex flex-col w-full">
                                                <div className="text-base font-medium hover:text-app-blue px-5 mb-[5px] cursor-pointer">
                                                    {content.title}
                                                </div>
                                                <div className="bg-[#717A8B] h-[1px] w-full"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default DropDownP2p;
