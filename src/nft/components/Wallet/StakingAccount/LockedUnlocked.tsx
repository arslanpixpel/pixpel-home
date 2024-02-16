import React, { useState } from "react";
import TokenButton from "../../Button/TokenButton";
import { stakingList } from "../dataList";
import UnlockButton from "./UnlockButton";
import UnstakeModal from "../Modal/UnstakeModal";

const LockedUnlocked = () => {
    const [selected, setSelected] = useState(0);
    const [selected2, setSelected2] = useState(0);
    const [showUnstakeModal, setShowUnstakeModal] = useState(false);

    const handleClick = (idx: number) => () => {
        setSelected(idx);
    };
    const handleClick2 = (idx: number) => () => {
        setSelected2(idx);
    };
    return (
        <div>
            <div className="flex gap-4 mt-8">
                <TokenButton title="UNLOCKED" selected={selected === 0} handleClick={handleClick(0)} />
                <TokenButton title="LOCKED" selected={selected === 1} handleClick={handleClick(1)} />
            </div>
            <div className="flex gap-4 mt-8">
                <TokenButton title="TRANSFER" selected={selected2 === 0} handleClick={handleClick2(0)} />
                <TokenButton title="DEPOSIT" selected={selected2 === 1} handleClick={handleClick2(1)} />
            </div>
            <div className="overflow-x-auto relative mt-10 x-full">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <td>
                                <div className=" text-[#717A8B]  w-max">Game</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">Coin</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">Rewards</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">Staked Amount</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">Start Date</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">EST.APY</div>
                            </td>
                            <td className="px-6">
                                <div className=" text-[#717A8B]  w-max">Locked Days</div>
                            </td>
                            <td className="pl-6">
                                <div className="text-gray-400 w-max">Invest Date</div>
                            </td>
                            <td className="w-1/12"></td>
                        </tr>
                    </thead>
                    <tbody className="px-4">
                        {stakingList.map((menu, idx) => {
                            return (
                                <tr
                                    key={idx}
                                    className={idx !== stakingList.length - 1 ? "border-b-2 border-app-black" : ""}
                                >
                                    <td className="py-5">
                                        <div className="w-max">{menu.Game}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.Coin}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.Rewards}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.StakedAmount}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.StartDate}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.ESTAPY}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.LockedDays}</div>
                                    </td>
                                    <td className="px-6">
                                        <div className="w-max">{menu.InvestDate}</div>
                                    </td>
                                    <td
                                        className="pl-6"
                                        onClick={() => {
                                            setShowUnstakeModal(true);
                                        }}
                                    >
                                        <UnlockButton />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {<UnstakeModal showModal={showUnstakeModal} setShowModal={setShowUnstakeModal} selected={selected} />}
        </div>
    );
};

export default LockedUnlocked;
