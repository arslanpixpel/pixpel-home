import React, { useEffect, useState } from "react";
import NFTOverview from "./NFTAccount/NFTOverview";
import { NFTList } from "./dataList";
import EachNFT from "./NFTAccount/EachNFT";
import { useAppContext } from "@nft/contexts/AppContext";
import axios from "axios";
import { Spin } from "antd";

const NFTAccount = () => {
    const context = useAppContext();
    const { userData, userImg, isUserLog } = context;
    const [usernft, setUsernft] = useState<any>();
    const [remainingTime, setRemainingTime] = useState<string>("");

    const getAllNfts = async () => {
        try {
            const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

            // const filterednft = response?.data?.data?.filter((s: any) =>
            //     s.secondary_owner.some((owner: any) => owner.wallet === userData?.player?.wallet)
            // );

            const filterednft = response?.data?.data?.filter((s: any) =>
                s.secondary_owner.some(
                    (owner: any) =>
                        owner.wallet === userData?.player?.wallet || owner.wallet === userData?.player?.zetawallet
                )
            );

            setUsernft(filterednft);

            console.log(usernft, "filterednft");
        } catch (error) {
            console.error("Error fetching NFTs:", error);
        }
    };

    // const getAllNfts = async () => {
    //     try {
    //         const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

    //         const userWallet = userData?.player?.wallet;

    //         const userNfts = response?.data?.data
    //             ?.filter((nft: any) => nft.secondary_owner.some((owner: any) => owner.wallet === userWallet))
    //             .map((nft: any) => {
    //                 const quantity = nft.secondary_owner.filter((owner: any) => owner.wallet === userWallet).length;

    //                 return {
    //                     ...nft,
    //                     quantity: quantity,
    //                 };
    //             });

    //         setUsernft(userNfts);

    //         console.log(userNfts, "userNfts");
    //     } catch (error) {
    //         console.error("Error fetching NFTs:", error);
    //     }
    // };

    // const getAllNfts = async () => {
    //     try {
    //         const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

    //         const userWallet = userData?.player?.wallet;

    //         const userNfts = response?.data?.data
    //             ?.filter((nft: any) => nft.secondary_owner.some((owner: any) => owner.wallet === userWallet))
    //             .map((nft: any) => {
    //                 const quantity = nft.secondary_owner.filter((owner: any) => owner.wallet === userWallet).length;

    //                 // Access insurance information and expiry date
    //                 const insuranceInfo = nft.secondary_owner.find((owner: any) => owner.wallet === userWallet);
    //                 const insurance = insuranceInfo ? insuranceInfo.insurance : false;
    //                 const expiryDate = insuranceInfo ? insuranceInfo.insurance_expirydate : null;
    //                 console.log(expiryDate, "ExpiryDate");
    //                 return {
    //                     ...nft,
    //                     quantity: quantity,
    //                     insurance: insurance,
    //                     expiryDate: expiryDate,
    //                 };
    //             });

    //         setUsernft(userNfts);

    //         console.log(userNfts, "userNfts");
    //     } catch (error) {
    //         console.error("Error fetching NFTs:", error);
    //     }
    // };

    // const getAllNfts = async () => {
    //     try {
    //         const response = await axios.get("https://backend.pixpel.io/nfts/getAll");

    //         const userWallet = userData?.player?.wallet;
    //         const currentDate = new Date(); // Get current date

    //         const userNfts = response?.data?.data
    //             ?.filter((nft: any) => {
    //                 return nft.secondary_owner.some((owner: any) => {
    //                     return (
    //                         owner.wallet === userWallet && // Match user wallet
    //                         (!owner.insurance_expirydate || new Date(owner.insurance_expirydate) > currentDate)
    //                     ); // Check if expiry date is not passed
    //                 });
    //             })
    //             .map((nft: any) => {
    //                 const quantity = nft.secondary_owner.filter(
    //                     (owner: any) => owner.wallet === userWallet && owner?.expiryDate > currentDate
    //                 ).length;

    //                 // Access insurance information and expiry date
    //                 const insuranceInfo = nft.secondary_owner.find((owner: any) => owner.wallet === userWallet);
    //                 const insurance = insuranceInfo ? insuranceInfo.insurance : false;
    //                 const expiryDate = insuranceInfo ? insuranceInfo.insurance_expirydate : null;

    //                 console.log(expiryDate, "ExpiryDate");
    //                 return {
    //                     ...nft,
    //                     quantity: quantity,
    //                     insurance: insurance,
    //                     expiryDate: expiryDate,
    //                 };
    //             });

    //         setUsernft(userNfts);

    //         console.log(userNfts, "userNfts");
    //     } catch (error) {
    //         console.error("Error fetching NFTs:", error);
    //     }
    // };

    // console.log(
    //     usernft?.secondary_owner?.some((owner: any) => owner.wallet === userData?.player?.wallet && owner.insurance),
    //     "Insurance Condition"
    // );

    function calculateTime(targetDateStr: string) {
        if (targetDateStr === undefined || targetDateStr === null || !targetDateStr) {
            return "N/A";
        }

        const FormattedDate = targetDateStr?.slice(0, 10);
        // console.log(targetDateStr, "Calculated");

        const targetDate = new Date(FormattedDate);
        const currentDate = new Date();
        const difference = targetDate.getTime() - currentDate.getTime();

        if (difference < 0) {
            return "Expired";
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const formattedTime = `${days}:${hours}:${minutes}:${seconds}`;
        // console.log(formattedTime, "Formated");

        return formattedTime;
    }

    // const Time = calculateTime("2024-02-31T11:30:52.615Z");
    // console.log(Time);

    useEffect(() => {
        // console.log(userData, "User data");
        getAllNfts();
    }, []);

    return (
        <div>
            <NFTOverview />
            {/* <div className="flex py-6  overflow-x-auto justify-between px-6">
                <div className="flex text-basetext-[#717A8B]   "> ID</div>
                <div className="flex text-basetext-[#717A8B]   "> LOGO</div>
                <div className="flex text-basetext-[#717A8B]   "> NAME</div>
                <div className="flex text-basetext-[#717A8B]   ">BLOCKCHAIN</div>
                <div className="flex text-basetext-[#717A8B]   ">KIND</div>
                <div className="flex text-basetext-[#717A8B]   ">CATEGORY</div>
                <div className="flex text-basetext-[#717A8B]   ">QUANTITY</div>

            </div> */}
            <div className="flex flex-col gap-3 pt-5">
                {/* {NFTList.map((menu, idx) => {
                    return <EachNFT key={idx} content={menu} />;
                })} */}
                {/* <tbody>
                    <tr className="flex py-6 items-center w-full ml-4">
                        <td className="w-1/6">ID</td>
                        <td className="w-1/4">LOGO</td>
                        <td className="w-1/6">NAME</td>
                        <td className="w-1/3">BLOCKCHAIN</td>
                        <td className="w-1/6">KIND</td>
                        <td className="w-1/6">CATEGORY</td>
                        <td className="w-1/6">QUANTITY</td>
                    </tr>
                </tbody> */}
                {/* <table className="table-auto ">
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
                {/* {usernft && usernft != undefined && usernft.length > 0 ? (
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
            </div>
            <>
                <div className="flex justify-center items-center">
                    {/* {(usernft?.length === 0 || !usernft) && <Spin size="large" />} */}
                    {(usernft?.length === 0 || !usernft) && (
                        <>
                            <div className="container flex w-full justify-center text-2xl font-bold">
                                NO NFTS IN THE WALLET
                            </div>
                        </>
                    )}
                </div>
                {usernft && usernft != undefined && usernft.length > 0 && (
                    <div className={`w-full  rounded-md justify-between`}>
                        <table
                            className="w-full table-auto  rounded-lg "
                            style={{ borderSpacing: "0 1rem", borderCollapse: "separate" }}
                        >
                            <thead>
                                <tr className=" !bg-app-black-modal">
                                    <td className="text-gray-400 pr-6 pl-6 font-bold">ID</td>
                                    <td className="text-gray-400 pr-6 font-bold">LOGO</td>
                                    <td className="text-gray-400 pr-6 font-bold">NAME</td>
                                    <td className="text-gray-400 pr-6 font-bold">BLOCKCHAIN</td>
                                    <td className="text-gray-400 pr-6 font-bold">KIND</td>
                                    <td className="text-gray-400 pr-6 font-bold">CATEGORY</td>
                                    <td className="text-gray-400 pr-6 font-bold">WARRANTY</td>
                                    <td className="text-gray-400 pr-6 font-bold">WARRANTY_EXP_DATE</td>
                                </tr>
                            </thead>

                            {usernft && usernft != undefined && usernft.length > 0 ? (
                                usernft.map((data: any) => (
                                    <>
                                        <tbody className="flex-col !gap-10 mb-10 ">
                                            <tr
                                                key={data.id}
                                                className=" bg-app-black-button mb-10"
                                                style={{ borderRadius: "10px" }}
                                            >
                                                <td className="py-8 pr-6 tex-[16px] font-normal pl-6 ">
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
                                                {/* <td className="pr-6  w-[100px]">
                                                    <div className="w-max">{data.quantity}</div>
                                                </td> */}
                                                <td className="pr-6  w-[100px]">
                                                    <div className="w-max">
                                                        {data.secondary_owner.some(
                                                            (owner: any) =>
                                                                owner.wallet === userData?.player?.wallet &&
                                                                owner.insurance
                                                        )
                                                            ? "True"
                                                            : "False"}
                                                    </div>
                                                </td>
                                                <td className="pr-6  w-[100px]">
                                                    {/* <div className="w-max">
                                                        {data.secondary_owner.some(
                                                            (owner: any) =>
                                                                owner.wallet === userData?.player?.wallet &&
                                                                owner.insurance
                                                        )
                                                            ? calculateRemainingTime(owner?.insurance_expirydate)
                                                            : "N/A"}
                                                    </div> */}
                                                    <div className="w-max">
                                                        {data.secondary_owner.some(
                                                            (owner: any) =>
                                                                owner.wallet === userData?.player?.wallet &&
                                                                owner.insurance
                                                        )
                                                            ? // ? calculateTime(
                                                              //       data.secondary_owner.find(
                                                              //           (owner: any) =>
                                                              //               owner.wallet === userData?.player?.wallet &&
                                                              //               owner.insurance
                                                              //       )?.insurance_expirydate
                                                              //   )
                                                              data.secondary_owner.find(
                                                                  (owner: any) =>
                                                                      owner.wallet === userData?.player?.wallet &&
                                                                      owner.insurance
                                                              )?.insurance_expirydate
                                                            : "N/A"}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                ))
                            ) : (
                                <>
                                    <div className="container flex w-full justify-center text-2xl font-bold">
                                        NO NFTS IN THE WALLET
                                    </div>
                                </>
                            )}
                        </table>
                    </div>
                )}
            </>
        </div>
    );
};

export default NFTAccount;
