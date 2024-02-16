import React from "react";
import CreateRockets from "@launchpad/pages-components/Frontend/DevSide/CreateRocket/CreateRockets";
import DeveloperHeader from "@nft/components/Header/DeveloperHeader";

function CreateRocket() {
    return (
        <>
            <DeveloperHeader />
            <div className="2xl:px-28 pt-11 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 flex flex-col pb-20 pr-5">
                <main>
                    <CreateRockets />
                </main>
            </div>
        </>
    );
}

export default CreateRocket;
