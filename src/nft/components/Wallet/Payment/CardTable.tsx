import React from "react";
import { paymentCardList } from "../dataList";
import TradeButton from "../StartAccount/TradeButton";

const CardTable = () => {
    return (
        <div className="overflow-x-auto relative mt-10 w-full">
            <table className="table-auto">
                <thead>
                    <tr>
                        <td className="text-[#717A8B] px-6">Type</td>
                        <td className=" text-[#717A8B]  w-1/2 px-6">Number</td>
                        <td className=" text-[#717A8B]  w-1/12 px-6">Action</td>
                    </tr>
                </thead>
                <tbody className="px-4">
                    {paymentCardList.map((menu, idx) => {
                        return (
                            <tr
                                key={idx}
                                className={idx !== paymentCardList.length - 1 ? "border-b-2 border-app-black" : ""}
                            >
                                <td className="py-5 px-6 text-base font-medium">{menu.type}</td>
                                <td className="px-6 text-base font-medium">{menu.Number}</td>
                                <td className="px-6 text-base font-medium">
                                    <TradeButton
                                        title="Remove"
                                        handleClick={function (): void {
                                            console.log("Function not implemented.");
                                        }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CardTable;
