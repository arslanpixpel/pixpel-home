import React from "react";
import Transfer from "../../Button/TransferButton";

interface Account {
    title: string;
}
const AccountHalf = ({ title }: Account) => {
    return (
        <div className="flex flex-col px-5 py-7 bg-app-black rounded-lg">
            <div className="flex mb-5 text-[24px] font-semibold leading-normal  justify-center">{title}</div>
            <div className="flex gap-3 xs:items-center mb-5 justify-center xs:flex-row flex-col">
                <div className="tex-[20px]  font-semibold leading-normal flex items-center rounded bg-app-black-button text-[#0095C8] py-2 px-14 ">
                    50,000 USDT
                </div>
                <div className=" text-[#717A8B]  text-[20px] font-medium leading-normal">=3,000,000.00 PIXP</div>
            </div>
            <Transfer />
        </div>
    );
};

export default AccountHalf;
