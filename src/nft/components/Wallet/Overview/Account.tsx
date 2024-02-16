import React from "react";
import Transfer from "../../Button/TransferButton";
interface Account {
    title: string;
}
const Account = ({ title }: Account) => {
    return (
        <div className="flex flex-col px-5 py-7 bg-app-black rounded-lg">
            <div className="mb-5 text-[18px] leading-normal font-semibold ">{title}</div>
            <div className="flex gap-3 xs:items-center mb-5 xs:flex-row flex-col">
                <div className="text-[16px] font-semibold leading-normal  flex items-center rounded bg-app-black-button text-[#0095C8] py-2 pl-2 pr-5">
                    50,000 USDT
                </div>
                <div className="text-[#717A8B] text-[14px] font-medium leading-normal">=3,000,000.00 PIXP</div>
            </div>
            <Transfer />
        </div>
    );
};

export default Account;
