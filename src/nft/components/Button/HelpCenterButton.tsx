import React from "react";

interface HelpCenterButton {
    title: string;
}

const HelpCenterButton = (props: HelpCenterButton) => {
    const { title } = props;
    return (
        <div
            className="flex justify-center items-center py-2 px-8 rounded-md  hover:bg-app-blue cursor-pointer"
            style={{ background: title === "Default" ? "#0095C8" : "#29313C" }}
        >
            {props.title}
        </div>
    );
};

export default HelpCenterButton;
