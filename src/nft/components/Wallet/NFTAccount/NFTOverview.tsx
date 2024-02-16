import TransactionHistoryButton from "@nft/components/Button/TransactionHistoryButton";
import { useAppContext } from "@nft/contexts/AppContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NFTOverview = () => {
    const context = useAppContext();
    const { userData, userImg, isUserLog } = context;
    const [usernft, setUsernft] = useState<any>();

    const getAllNfts = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

            const filterednft = response?.data?.data?.filter((s: any) =>
                s.secondary_owner.some((owner: any) => owner.wallet === userData.player.wallet)
            );
            setUsernft(filterednft);

            console.log(usernft, "filterednft");
        } catch (error) {
            console.error("Error fetching NFTs:", error);
        }
    };

    useEffect(() => {
        getAllNfts();
    }, []);

    return (
        <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline">
            <div className="flex flex-col">
                <div className="text-[30px] leading-normal font-semibold mb-3 ">NFT Account</div>
                <div className="flex gap-10 xs:flex-row flex-col">
                    <div className="flex flex-col">
                        <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-2">Total Purchase</div>
                        <div className="flex gap-3 xs:items-center xs:flex-row flex-col pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[22px] font-semibold leading">
                                {usernft && usernft.length ? usernft.length : "0"}
                            </div>
                            {/* <div className="text-[18px] font-mediumtext-[#717A8B] leading-normal">
                                = 3,832,194,124.10 TUSD
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="flex flex-col">
                        <div className="text-[18px] leading-normal font-medium text-[#717A8B]  mb-2">Selling Value</div>
                        <div className="flex gap-3 xs:items-center xs:flex-row flex-col pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[22px] font-semibold leading">400.000 PIXP</div>
                            <div className="text-[18px] font-mediumtext-[#717A8B] leading-normal">
                                = 5,832,194,124.10 TUSD
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <TransactionHistoryButton /> */}
        </div>
    );
};

export default NFTOverview;
