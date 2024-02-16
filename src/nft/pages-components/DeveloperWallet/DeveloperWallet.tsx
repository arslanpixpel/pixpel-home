import React, { useState, useEffect } from "react";
import ProfileButton from "../../components/Button/ProfileButton";
import { menuList } from "./dataList";
import DeveloperOverview from "../../components/Wallet/DeveloperOverview";
import DeveloperStartAccount from "../../components/Wallet/DeveloperStartAccount";
import DeveloperStakingAccount from "../../components/Wallet/DeveloperStakingAccount";
import DeveloperGameAccount from "../../components/Wallet/DeveloperGameAccount";
import TransactionHistory from "../../components/Wallet/TransactionHistory";
import { useAppContext } from "../../contexts/AppContext";
import DeveloperFaitAccount from "@nft/components/Wallet/DeveloperFiatAccount";
import { useRouter } from "next/router";

const DeveloperWallet = () => {
    const { push } = useRouter();
    const navigate = useRouter();
    const [tempComponent, setTempComponent] = useState(<DeveloperOverview />);
    const context = useAppContext();

    useEffect(() => {
        switch (context.selectedDevWalletIndex) {
            // case -1:
            //     setTempComponent(<TransactionHistory />);
            //     break;
            // case 0:
            //     setTempComponent(<DeveloperOverview />);
            //     break;
            // case 1:
            //     setTempComponent(<DeveloperStartAccount />);
            //     break;
            case 0:
                setTempComponent(<DeveloperGameAccount />);
                break;
            // case 3:
            //     setTempComponent(<DeveloperStakingAccount />);
            //     // push("/stakingaccount");
            //     break;
            // case 4:
            //     setTempComponent(<DeveloperFaitAccount />);
            //     break;
            // default:
            //     break;
        }
    }, [context.selectedDevWalletIndex, push]);

    const handleClick = (idx: number) => async () => {
        await context.setSelectedDevWalletIndex?.(idx);
    };
    return (
        <>
            <div
                className="flex mb-10 py-2 h-12 px-4 w-[50px] relative top-[6%] left-[6.7%] items-center bg-app-black-button hover:bg-app-blue rounded-md cursor-pointer"
                onClick={() => navigate.back()}
            >
                <svg className="md:h-5 h-4 md:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </div>
            <div className="flex pt-11 xl:flex-row flex-col xl:px-32 xs:px-10 px-2 w-full min-h-screen gap-8 xl:pb-[100px] pb-20">
                <div className="flex flex-col xl:w-1/5 w-full bg-app-black h-full rounded-xl px-4 pt-4 pb-4 gap-2 xl:text-base">
                    {menuList.map((menu, idx) => {
                        return (
                            <ProfileButton
                                key={idx}
                                title={menu.title}
                                selected={context.selectedDevWalletIndex === idx}
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

export default DeveloperWallet;
