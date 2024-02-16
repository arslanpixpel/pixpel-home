import React, { useEffect, useState } from "react";
import DeveloperTransactionHistory from "../../Button/DeveloperTransactionHistory";
import { useAppContext } from "@nft/contexts/AppContext";
import axios from "axios";

const DeveloperGamingAccountOverview = () => {
    const context = useAppContext();
    const { userData } = context;
    const [usernft, setUsernft] = useState<any>();
    const [usercollection, setUsercollections] = useState<any>();

    const getAllNfts = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

            const filterednft = response?.data?.data?.filter(
                (s: any) => s.primary_owner === userData?.developer?.wallet
            );
            setUsernft(filterednft);

            console.log(usernft, "filterednft");
        } catch (error) {
            console.error("Error fetching NFTs:", error);
        }
    };

    const getCollections = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/collections/getAll");
            console.log(response, "Collection responce");
            const filterCollection = response?.data?.data?.filter(
                (data: any) => data.developer_id === userData?.developer?.id
            );
            setUsercollections(filterCollection);
            console.log(usercollection, "Filtered Collections");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // console.log(userData, "User data");
        getAllNfts();
        getCollections();
        // console.log();
    }, []);
    return (
        <div className="flex justify-between w-full h-max py-8 px-8 bg-app-black rounded-lg flex-col xs:flex-row gap-5">
            <div className="flex flex-col mt-6">
                <div className="text-[30px] font-semibold leading-normal md:text-3xl 2xs:mb-8 mb-3 text-2xl">
                    GAME ACCOUNT
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col mb-[20px]">
                        <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-4">TOTAL NFTS</div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">{usernft ? usernft.length : "0"}</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-4">
                            TOTAL COLLECTION
                        </div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">
                                {usercollection ? usercollection.length : "0"}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row gap-10">
                    <div className="flex flex-col mb-[20px]">
                        <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-4">
                            Insurance holding
                        </div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">300.000 PIXP</div>
                            <div className="text-gray-400 text-lg">≈ 4.000.000 BUSD</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[18px] font-medium leading-normaltext-[#717A8B]  mb-4">
                            Insurance fee income
                        </div>
                        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                            <div className="text-[24px] font-semibold">300.000 PIXP</div>
                            <div className="text-gray-400 text-lg">≈ 4.000.000 BUSD</div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <DeveloperTransactionHistory /> */}
        </div>
    );
};

export default DeveloperGamingAccountOverview;
