import React, { useState, useEffect } from "react";
import ProfileButton from "@nft/components/Button/ProfileButton";
import { menuList } from "./dataList";
import Overview from "@nft/components/Wallet/Overview";
import StartAccount from "@nft/components/Wallet/StartAccount";
import StakingAccount from "@nft/components/Wallet/StakingAccount";
import TradeAccount from "@nft/components/Wallet/TradeAccount";
import GameAccount from "@nft/components/Wallet/GameAccount";
import PaymentMethod from "@nft/components/Wallet/PaymentMethod";
import NFTAccount from "@nft/components/Wallet/NFTAccount";
import TransactionHistory from "@nft/components/Wallet/TransactionHistory";
import { useAppContext } from "@nft/contexts/AppContext";
import { useRouter } from "next/router";

const Wallet = () => {
    const [tempComponent, setTempComponent] = useState(<Overview />);
    const context = useAppContext();
    const navigate = useRouter();

    useEffect(() => {
        switch (context.selectedIndex) {
            // case -1:
            //     setTempComponent(<TransactionHistory />);
            //     break;
            // case 0:
            //     setTempComponent(<Overview />);
            //     break;
            // case 1:
            //     setTempComponent(<PaymentMethod />);
            //     break;
            // case 2:
            //     setTempComponent(<StartAccount />);
            //     break;
            // case 3:
            //     setTempComponent(<GameAccount />);
            //     break;
            // case 4:
            //     setTempComponent(<TradeAccount />);
            //     break;
            case 0:
                setTempComponent(<NFTAccount />);
                break;
            // case 1:
            //     setTempComponent(<StakingAccount />);
            //     break;
            // default:
            //     break;
        }
    }, [context.selectedIndex]);

    const handleClick = (idx: number) => async () => {
        await context.setSelectedIndex?.(idx);
    };
    return (
        <>
            <div
                className="flex mb-[30px] py-2 h-12 px-4 w-[60px] relative top-[2%] left-[6%] items-center bg-app-black-button hover:bg-app-blue rounded-md cursor-pointer"
                onClick={() => navigate.back()}
            >
                <svg className="md:h-5 h-4 md:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </div>
            <div className="flex xl:flex-row flex-col xl:px-32 xs:px-10 px-2 pt-11 w-full min-h-screen gap-8 xl:pb-[185px] pb-20">
                <div className="flex flex-col xl:w-1/5 w-full bg-app-black h-max rounded-xl px-4 py-8 gap-2 xl:text-base">
                    {menuList.map((menu, idx) => {
                        return (
                            <ProfileButton
                                key={idx}
                                title={menu.title}
                                selected={context.selectedIndex === idx}
                                handleClick={handleClick(idx)}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col xl:w-4/5 x-full">{tempComponent}</div>
            </div>
        </>
    );
};

export default Wallet;
