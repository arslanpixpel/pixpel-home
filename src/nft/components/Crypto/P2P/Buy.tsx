import React from "react";
import BuyButton from "@nft/components/Wallet/StartAccount/BuyButton";
import { buyList } from "../dataList";

const Buy = () => {
    return (
        <div className="overflow-x-auto w-full mt-10">
            <table className="table-auto">
                <thead>
                    <tr>
                        <td className=" text-[#717A8B]  w-1/5">User</td>
                        <td className=" text-[#717A8B]  w-1/5 px-10">Price</td>
                        <td className=" text-[#717A8B]  w-1/3 px-10">Limit/Available</td>
                        <td className=" text-[#717A8B]  w-1/4 px-10">Terms</td>
                        <td className=" text-[#717A8B] ">Action</td>
                    </tr>
                </thead>
                <tbody className="px-4">
                    {buyList.map((menu, idx) => {
                        return (
                            <tr key={idx} className="border-b-2 border-app-black">
                                <td className="py-3">
                                    <div>{menu.User}</div>
                                </td>
                                <td className="py-3 px-10">
                                    <div>{menu.Price}</div>
                                </td>
                                <td className="flex flex-col py-2 gap-2 px-10">
                                    <div className="flex">
                                        <div className=" text-[#717A8B]  w-1/3">Available</div>
                                        <div>{menu.Limit?.Available}</div>
                                    </div>
                                    <div className="flex">
                                        <div className=" text-[#717A8B]  w-1/3">Limit</div>
                                        <div>{menu.Limit?.Limit}</div>
                                    </div>
                                </td>
                                <td className="px-10">{menu.Terms}</td>
                                <td>
                                    <BuyButton
                                        title={menu.Action}
                                        handleClick={function () {
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

export default Buy;
