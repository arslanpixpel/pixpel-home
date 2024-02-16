import React from "react";
import { transactionList } from "../dataList";

const TransactionTable = () => {
    return (
        <div className="overflow-x-auto w-full relative mt-10">
            <table className="table-auto">
                <thead>
                    <tr>
                        <td className="text-gray-400 w-1/6 pr-6 tex-[16px] font-normal">Time</td>
                        <td className="text-gray-400 w-1/6 px-6 tex-[16px] font-normal">Type</td>
                        <td className="w-1/6 px-6">
                            <div className=" text-[#717A8B]  w-max">Deposit wallet</div>
                        </td>
                        <td className="text-gray-400 w-1/6 px-6 tex-[16px] font-normal">Asset</td>
                        <td className="text-gray-400 w-1/6 px-6 tex-[16px] font-normal">Amount</td>
                        <td className="text-gray-400 w-1/6 px-6 tex-[16px] font-normal">TxID</td>
                        <td className="text-gray-400 pl-6 tex-[16px] font-normal">Status</td>
                    </tr>
                </thead>
                <tbody className="px-4">
                    {transactionList.map((menu, idx) => {
                        return (
                            <tr
                                key={idx}
                                className={idx !== transactionList.length - 1 ? "border-b-2 border-app-black" : ""}
                            >
                                <td className="py-3 pr-6 text-[16px] font-medium">{menu.time}</td>
                                <td className="px-6 text-[16px] font-medium">{menu.type}</td>
                                <td className="px-6 text-[16px] font-medium">{menu.wallet}</td>
                                <td className="px-6 text-[16px] font-medium">{menu.asset}</td>
                                <td className="px-6 text-[16px] font-medium">{menu.amount}</td>
                                <td className="px-6 text-[16px] font-medium">{menu.TxID}</td>
                                <td className="pl-6 text-[16px] font-medium">{menu.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
