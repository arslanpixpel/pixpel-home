import React from "react";
import DropDownButton from "@nft/components/DropDown/DropDownButton";
import EachTokenDetail from "@nft/components/TokenRoom/EachTokenDetail";

interface TokenList {
    id: number;
    title: string;
}

const TokenList: TokenList[] = [
    {
        id: 1,
        title: "PIXP",
    },
    {
        id: 2,
        title: "BNB",
    },
    {
        id: 3,
        title: "AVAX",
    },
    {
        id: 4,
        title: "ETH",
    },
];

const Supplies = () => {
    return (
        <div className="my-28 flex flex-col">
            <div className="flex gap-7 items-end mb-12">
                <div className="w-44">
                    <DropDownButton
                    setState={undefined} setCustomState={undefined} property={undefined}
                        initialContent="Token"
                        contentList={TokenList}
                        backgroundColor="bg-app-black"
                        fontSize={""}
                        textColor={""}
                    />
                </div>
                <div className="text-app-blue text-xl">PIXPEL</div>
            </div>
            <div className="flex flex-col gap-9 justify-center">
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="RESERVE" />
                <EachTokenDetail type="VESTING" />
                <EachTokenDetail type="YIELD" />
                <EachTokenDetail type="STAKING" />
                <EachTokenDetail type="PUBLIC" />
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="MAIN" />
                <EachTokenDetail type="MAIN" />
            </div>
        </div>
    );
};

export default Supplies;
