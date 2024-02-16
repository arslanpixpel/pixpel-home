import React, { useState } from "react";
import { gamingList2 } from "../dataList";
import SwapButton from "../StartAccount/SwapButton";
import BuyButton from "../StartAccount/BuyButton";
import TradeButton from "../StartAccount/TradeButton";
import WithdrawModal from "../Modal/WithdrawModal";
import TransferModal from "../Modal/TransferModal";
import { useAppContext } from "@nft/contexts/AppContext";

const GamingTable = (content: any) => {
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const context = useAppContext();

    const handleDepositClick = () => {
        context.setSelectedIndex?.(1);
    };

    const handleTransferClick = () => {
        setShowTransferModal(true);
    };

    const handleWithdrawClick = () => {
        setShowWithdrawModal(true);
    };

    console.log(content, "content");

    return (
        <div>
            <div className="overflow-x-auto relative w-full mt-10">
                <table className="table-auto text-left justify-between">
                    <thead>
                        <tr>
                            <td className="text-gray-400 pr-6">Coin</td>
                            <td className="text-gray-400 pr-6">Total</td>
                            <td className="text-gray-400 pr-6">Available</td>
                            <td className="text-gray-400 pr-6">Pending</td>
                            <td className="text-gray-400 pr-6">PIXP Value</td>
                            {/* <td className="flex gap-1 px-6">
                                <div className="text-gray-400">DAW</div>
                                <svg
                                    className="h-5 w-5text-[#717A8B] "
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {" "}
                                    <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{" "}
                                    <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                            </td> */}
                            {/* <td className="text-gray-400 w-1/6 px-6">Action</td> */}
                        </tr>
                    </thead>
                    {/* <tbody>
                        {gamingList2.map((menu, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className={idx !== gamingList2.length - 1 ? "border-b-2 border-app-black" : ""}
                                >
                                    <td className="py-5 pr-6 tex-[16px] font-normal">
                                        <div className="w-max tex-[16px] font-normal">{menu.coin}</div>
                                    </td>
                                    <td className="pr-6">
                                        <div className="w-max ">{menu.game}</div>
                                    </td>
                                    <td className="pr-6">
                                        <div className="w-max">{menu.reward}</div>
                                    </td>
                                    <td className="pr-6">
                                        <div className="w-max">{menu.deposit}</div>
                                    </td>
                                    <td className="pr-6">
                                        <div className="w-max">{menu.available}</div>
                                    </td>
                                    {/* <td className="px-6">
                                        <div className="w-max">{menu.daw}</div>
                                    </td> */}
                    {/* <td className="px-6">
                                        <div className="flex gap-4">
                                            <BuyButton title="Deposit" handleClick={handleDepositClick} />
                                            <TradeButton title="Withdraw" handleClick={handleWithdrawClick} />
                                            <SwapButton title="Transfer" handleClick={handleTransferClick} />
                                        </div>
                                    </td> */}
                    {/* </tr>
                            );
                        })}
                    </tbody> */}
                    <tbody>
                        <tr className={"border-b-2 border-app-black"}>
                            <td className="py-5 pr-6 tex-[16px] font-normal">
                                <div className="w-max tex-[16px] font-normal">{content.id}</div>
                            </td>
                            <td className="pr-6">
                                <div className="w-max ">{content.game}</div>
                            </td>
                            <td className="pr-6">
                                <div className="w-max">{content.reward}</div>
                            </td>
                            <td className="pr-6">
                                <div className="w-max">{content.deposit}</div>
                            </td>
                            <td className="pr-6">
                                <div className="w-max">{content.available}</div>
                            </td>
                            {/* <td className="px-6">
                                        <div className="w-max">{menu.daw}</div>
                                    </td> */}
                            {/* <td className="px-6">
                                        <div className="flex gap-4">
                                            <BuyButton title="Deposit" handleClick={handleDepositClick} />
                                            <TradeButton title="Withdraw" handleClick={handleWithdrawClick} />
                                            <SwapButton title="Transfer" handleClick={handleTransferClick} />
                                        </div>
                                    </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
            {<WithdrawModal showModal={showWithdrawModal} setShowModal={setShowWithdrawModal} />}
            {<TransferModal showModal={showTransferModal} setShowModal={setShowTransferModal} />}
        </div>
    );
};

export default GamingTable;
