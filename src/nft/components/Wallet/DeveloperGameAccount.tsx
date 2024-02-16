import React, { useEffect, useState } from "react";
import DeveloperGamingAccountOverview from "./GamingAccount/DeveloperGamingAccountOverview";
import TokenButton from "../Button/TokenButton";
import GamingTable from "./GamingAccount/GamingTable";
import { useAppContext } from "@nft/contexts/AppContext";
import TransferModal from "./Modal/TransferModal";
import WithdrawModal from "./Modal/WithdrawModal";
import axios from "axios";
import EachNFT from "./NFTAccount/EachNFT";

const DeveloperGameAccount = () => {
    const [selected, setSelected] = useState(0);
    const context = useAppContext();
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const { userData, userImg, isUserLog } = context;
    const [usernft, setUsernft] = useState<any>();
    const [collection, setCollection] = useState(false);
    const [usercollection, setUsercollections] = useState<any>();

    const getAllNfts = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

            // const filterednft = response?.data?.data?.filter(
            //     (s: any) => s.primary_owner === userData?.developer?.wallet
            // );

            const filterednft = response?.data?.data?.filter((s: any) =>
                s.secondary_owner.some(
                    (owner: any) =>
                        owner.wallet === userData?.player?.wallet || owner.wallet === userData?.player?.zetawallet
                )
            );

            setUsernft(filterednft);

            // console.log(usernft, "filterednft");
        } catch (error) {
            console.error("Error fetching NFTs:", error);
        }
    };

    const getCollections = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/collections/getAll");
            // console.log(response, "Collection responce");
            const filterCollection = response?.data?.data?.filter(
                (data: any) => data?.developer_id === userData?.developer?.id
            );
            setUsercollections(filterCollection);
            // console.log(usercollection, "Filtered Collections");
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

    const handleClick = (idx: number) => () => {
        setSelected(idx);
        setCollection(!collection);
        switch (idx) {
            case 0:
                context.setSelectedIndex?.(1);
                break;
            case 1:
                setShowWithdrawModal(true);

                break;
            case 2:
                setShowTransferModal(true);

                break;
            default:
                break;
        }
    };

    // console.log(collection);
    return (
        <>
            <div>
                <DeveloperGamingAccountOverview />
                <div className="flex mt-16 mb-8 gap-4 flex-col 2xs:flex-row">
                    {/* <TokenButton title="DEPOSIT" selected={selected === 0} handleClick={handleClick(0)} /> */}
                    <TokenButton title="NFTS" selected={selected === 0} handleClick={handleClick(0)} />

                    {/* <TokenButton title="WITHDRAW" selected={selected === 1} handleClick={handleClick(1)} /> */}
                    {/* <TokenButton title="TRANSFER" selected={selected === 2} handleClick={handleClick(2)} /> */}
                    <TokenButton title="COLLECTION" selected={selected === 2} handleClick={handleClick(2)} />
                </div>
                {collection && (
                    <div className="overflow-x-auto relative mt-10">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <td className="text-gray-400 pr-6">ID</td>
                                    <td className="text-gray-400 pr-6">LOGO</td>
                                    <td className="text-gray-400 pr-6">NAME</td>
                                    <td className="text-gray-400 pr-6">BLOCKCHAIN</td>
                                </tr>
                            </thead>
                            <tbody>
                                {usercollection && usercollection.length > 0 ? (
                                    usercollection.map((data: any) => (
                                        <tr key={data.id} className="border-b-2 border-app-black">
                                            <td className="py-5 pr-6 tex-[16px] font-normal">
                                                <div className="w-max tex-[16px] font-normal">{data.id}</div>
                                            </td>
                                            <td className="pr-6">
                                                <img src={data.logo_image} alt="" className="h-10 w-10 rounded-lg" />
                                            </td>
                                            <td className="pr-6">
                                                <div className="w-max">{data.name}</div>
                                            </td>
                                            <td className="pr-6 w-[100px]">
                                                <div className="w-max">
                                                    {data.blockchain ? data.blockchain : "Concordium"}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <>
                                        <div className="container flex w-full justify-center text-2xl font-bold mt-10">
                                            FOUND NO COLLECTION
                                        </div>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {/* {<WithdrawModal showModal={showWithdrawModal} setShowModal={setShowWithdrawModal} />} */}
            {/* {<TransferModal showModal={showTransferModal} setShowModal={setShowTransferModal} />} */}
            {!collection && (
                <>
                    {/* <div className="flex py-6  overflow-x-auto justify-between px-6  w-full">
                        <div className="flex text-basetext-[#717A8B]   "> ID</div>
                        <div className="flex text-basetext-[#717A8B]   "> LOGO</div>
                        <div className="flex text-basetext-[#717A8B]   "> NAME</div>
                        <div className="flex text-basetext-[#717A8B]   "></div>
                        <div className="flex text-basetext-[#717A8B]   ">BLOCKCHAIN</div>
                        <div className="flex text-basetext-[#717A8B]   ">KIND</div>
                        <div className="flex text-basetext-[#717A8B]   ">CATEGORY</div>
                        <div className="flex text-basetext-[#717A8B]   ">QUANTITY</div>
                    </div> */}
                    <div className="flex flex-col gap-3">
                        {/* {NFTList.map((menu, idx) => {
                    return <EachNFT key={idx} content={menu} />;
                })} */}
                        {/* <table className="table-auto">
                            <thead>
                                <tr>
                                    <td className=" text-[#717A8B]   px-6">ID</td>
                                    <td className=" text-[#717A8B]  px-16">LOGO</td>
                                    <td className=" text-[#717A8B]  ">NAME</td>
                                    <td className=" text-[#717A8B]  px-6 pl-72">BLOCKCHAIN</td>
                                    <td className=" text-[#717A8B]  px-6">KIND</td>
                                    <td className=" text-[#717A8B]  px-6">CATEGORY</td>
                                    <td className=" text-[#717A8B]  px-6">QUANTITY</td>
                                </tr>
                            </thead>
                        </table> */}

                        {/* {usernft && usernft.length > 0 ? (
                            usernft.map((menu: any, idx: any) => {
                                return <EachNFT key={idx} content={menu} />;
                            })
                        ) : (
                            <>
                                <div className="container flex w-full justify-center text-2xl font-bold">
                                    NO NFTS IN THE WALLET
                                </div>
                            </>
                        )} */}
                        <>
                            <div className="overflow-x-auto relative mt-10">
                                <table
                                    className="w-full table-auto  "
                                    style={{ borderSpacing: "0 1rem", borderCollapse: "separate" }}
                                >
                                    <thead>
                                        <tr className="py-10 my">
                                            <td className="text-gray-400 pr-6 pl-6 font-bold">ID</td>
                                            <td className="text-gray-400 pr-6 font-bold">LOGO</td>
                                            <td className="text-gray-400 pr-6 font-bold">NAME</td>
                                            <td className="text-gray-400 pr-6 font-bold">BLOCKCHAIN</td>
                                            <td className="text-gray-400 pr-6 font-bold">KIND</td>
                                            <td className="text-gray-400 pr-6 font-bold">CATEGORY</td>
                                            <td className="text-gray-400 pr-6 font-bold">QUANTITY</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usernft && usernft != undefined && usernft.length > 0 ? (
                                            usernft.map((data: any) => (
                                                <tr key={data.id} className=" bg-app-black-button rounded-t-md py-10">
                                                    <td className="py-5 pr-6 tex-[16px] font-normal pl-6">
                                                        <div className="w-max tex-[16px] font-normal">{data.id}</div>
                                                    </td>
                                                    <td className="pr-6">
                                                        <img
                                                            src={data.img}
                                                            alt=""
                                                            className="h-10 w-10 rounded-lg object-cover "
                                                        />
                                                    </td>
                                                    <td className="pr-6 ">
                                                        <div className="w-max">{data.name}</div>
                                                    </td>
                                                    <td className="pr-6 ">
                                                        <div className="w-max">{data.blockchain}</div>
                                                    </td>
                                                    <td className="pr-6 ">
                                                        <div className="w-max">{data.kind ? data.kind : "Kind 1"}</div>
                                                    </td>
                                                    <td className="pr-6 ">
                                                        <div className="w-max">
                                                            {data.category ? data.category : "Category 1"}
                                                        </div>
                                                    </td>
                                                    <td className="pr-6  w-[100px]">
                                                        <div className="w-max">{data.supply_quantity}</div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <div className="container flex w-full justify-center text-2xl font-bold">
                                                    NO NFTS IN THE WALLET
                                                </div>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    </div>
                </>
            )}
        </>
    );
};

export default DeveloperGameAccount;
