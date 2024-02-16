// import useCCDWallet from "@dex/hooks/use-ccd-wallet";
import Image, { StaticImageData } from "next/image";
// import network from "@dex/config/network";
// import { CCD_MAINNET_GENESIS, CCD_TESTNET_GENESIS } from "@dex/constants/network";
import Link from "next/link";
interface data {
    img: StaticImageData | string;
    title?: string;
    des?: string;
    href?: string;
    connect?: (() => void) | null;
    account?: string | null;
    connectText?: string;
}

function SellYourNFT() {
    // console.log("🚀 ~ file: SellYourNFT.tsx:18 ~ SellYourNFT ~ network:", network);
    // const { ccdContext, connectCCD: connectCcd, hasWallet: hasCcdWallet } = useCCDWallet();
    // const connectCcdHandleNetwork = async () => {
    //     if (!hasCcdWallet) {
    //         window.alert("Concordium wallet could not be found.");
    //         return;
    //     }
    //     try {
    //         await connectCcd();
    //         data.map((item) => (item.account ? alert("Concordium wallet Already Connected") : ""));
    //     } catch {
    //         if (network.ccd.genesisHash === CCD_MAINNET_GENESIS) {
    //             window.alert('Please connect to the "Concordium Mainnet" network in your Concordium wallet');
    //         } else if (network.ccd.genesisHash === CCD_TESTNET_GENESIS) {
    //             window.alert('Please connect to the "Concordium Testnet" network in your Concordium wallet');
    //         } else {
    //             window.alert("Please connect to the correct network in your Concordium wallet");
    //         }
    //     }
    // };

    const data: data[] = [
        {
            img: "/assets/images/home/Players/connectwallet.svg",
            title: "Connect Wallet",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            href: "",
            // connect: connectCcdHandleNetwork,
            // account: ccdContext.account as string,
            // connectText: "Connected",
        },
        {
            img: "/assets/images/home/Players/nftmarketplace.svg",
            title: "NFT Marketplace",
            des: "We provide a marketplace to buy or sell creator´s collections of NFTs",
            href: "",
        },
        {
            img: "/assets/images/home/Players/collectnft.svg",
            title: "Collect NFT",
            des: "Add your favorite NFT from our marketplace to your collection from now.",
            href: "",
        },
    ];
    return (
        <>
            <div className="flex flex-col px-[30px] mt-[131px] max-sm:mt-4 max-sm:px-0">
                <div className="flex justify-center">
                    <p className="flex text-center text-[77px]  leading-[88.55px] max-sm:text-[24px] max-lg:text-[36px] font-semibold">
                        Create and Sell Your NFTs
                    </p>
                </div>
                <div className="flex gap-x-[35px] mt-[74px] max-sm:gap-x-4 max-sm:mt-4 max-lg:overflow-x-scroll scroll">
                    {data.map((item, idx) => (
                        <Link
                            key={item.title}
                            href={item.href as string}
                            // onClick={() => {
                            //     item.connect && item.connect();
                            // }}
                        >
                            <div
                                key={idx}
                                className="sell-nft flex cursor-pointer flex-col h-[100%] justify-center 3xl1:w-[479px] height-[257px]  min-w-[160px] rounded-[27px] p-[44px_50px_50px_42px] max-sm:rounded-[10px] max-sm:p-[10px_15px_10px_15px] gap-y-[16px]"
                            >
                                <div className=" flex justify-between text-center items-center ">
                                    <Image
                                        alt=""
                                        src={item.img}
                                        width={72}
                                        height={67}
                                        onClick={() => {
                                            item.connect && item.connect();
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className="text-[28px]  max-sm:text-[18px] font-medium ">{item.title}</p>
                                    <p className="text-[18px]  max-sm:text-[12px]">{item.des}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SellYourNFT;

// const data: data[] = [
//     {
//         img: "/assets/images/home/Players/connectwallet.svg",
//         title: "Connect Wallet",
//         des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
//         href: "/",
//         connect: connectCcdHandleNetwork;
//     },
//     {
//         img: "/assets/images/home/Players/nftmarketplace.svg",
//         title: "NFT Marketplace",
//         des: "We provide a marketplace to buy or sell creator´s collections of NFTs",
//         href: "/nft-market",
//     },
//     {
//         img: "/assets/images/home/Players/collectnft.svg",
//         title: "Collect NFT",
//         des: "Add your favorite NFT from our marketplace to your collection from now.",
//         href: "/collection",
//     },
// ];
