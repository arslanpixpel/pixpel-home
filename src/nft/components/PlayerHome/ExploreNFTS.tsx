import { Divider } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
interface btn {
    img?: string;
    img2?: string;
    name: string;
    icon: boolean;
    isBold?: boolean;
    dots?: string;
    links?: string[];
    isOpen?: boolean;
    alignitems?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    left?: string;
    padding?: string;
    btpadding?: string;
    width?: string;
    href?: string;
}

interface nftData {
    img: StaticImageData | string;
    name?: string;
    category?: string;
    order?: string;
    price?: string;
    percent?: string;
    view?: string;
}

function ExploreNFTS() {
    const [model, setModel] = useState(67);
    const { push } = useRouter();
    // const handllerediect = () => {
    //     push("/game-market");
    // };
    return (
        <>
            <div className="flex flex-col px-[50px] max-2xl1:px-[0px] max-sm:mt-4">
                <div className="flex justify-center">
                    <p className="flex text[#FFF] ftext-center text-[77px] leading-[88.55px] font-semibold relative max-xs:text-[24px] max-lg:text-[36px]">
                        Explore Our NFT Games
                        {/* <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute right-[-48px] top-[29px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            className="absolute right-[-48px] top-[15px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72934)">
                                <path
                                    d="M14.3094 7.50233C9.71204 8.72105 8.72283 9.71026 7.50234 14.3076C6.28362 9.71026 5.29975 8.71571 0.695312 7.50233C5.29441 6.28184 6.28362 5.29263 7.50234 0.695312C8.72283 5.29263 9.71204 6.28184 14.3094 7.50233Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72934">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute right-[-40px] top-[28px]"
                        />
                        {/* <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={15}
                            height={15}
                            className="absolute left-[-53px] bottom-[38px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            className="absolute left-[-53px] bottom-[28px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72932)">
                                <path
                                    d="M14.3094 7.50233C9.71204 8.72105 8.72283 9.71026 7.50234 14.3076C6.28362 9.71026 5.29975 8.71571 0.695312 7.50233C5.29441 6.28184 6.28362 5.29263 7.50234 0.695312C8.72283 5.29263 9.71204 6.28184 14.3094 7.50233Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72932">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-[-44px] bottom-[-2px]"
                        />
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[15px] mt-[41px]">
                    {btn.map((item, idx) => (
                        <div key={idx}>
                            <Link href={`${item.href as string}`}>
                                <div
                                    className="bg-[linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] rounded-[5px]  p-[1px]"
                                    style={{
                                        width: item.width,
                                    }}
                                    onClick={() => setModel(model !== idx ? idx : 67)}
                                >
                                    <div
                                        className="relative group h-[60px] flex items-center  justify-center gap-x-[15px] bg-[#29313C] py-[18px] px-[50px] rounded-[5px] cursor-pointer hover:bg-[#0196C9]"
                                        style={{
                                            padding: item.btpadding,
                                        }}
                                    >
                                        {item.img && item.img2 && (
                                            <>
                                                <Image
                                                    className="group-hover:hidden block"
                                                    src={item.img}
                                                    alt=""
                                                    width={24}
                                                    height={24}
                                                />
                                                <Image
                                                    className="group-hover:block hidden"
                                                    src={item.img2}
                                                    alt=""
                                                    width={24}
                                                    height={24}
                                                />
                                            </>
                                        )}
                                        <p className={item.isBold ? "font-semibold" : ""}>{item.name}</p>
                                        {item.icon && (
                                            <Image alt="dots" src={item.dots as string} width={29} height={24} />
                                        )}
                                        {model === idx && (
                                            <div
                                                className="flex flex-col justify-center h-[167px] bg-[#29313C] pt-[0px] gap-y-2 z-10 absolute top-[62px] left-0  dropdownborderradius"
                                                style={{ padding: `${item.padding}` }}
                                            >
                                                {item.links?.map((item2, index) => (
                                                    <React.Fragment key={index}>
                                                        <p
                                                            className="hover:text-[#0196C9] text-[14px] py-2 pb-[0px]  flex flex-col font-medium leading-normal relative"
                                                            style={{
                                                                textAlign: item.alignitems,
                                                                left: `${item.left}`,
                                                            }}
                                                        >
                                                            {item2}
                                                        </p>
                                                        {index < item.links!.length - 1 && (
                                                            <Divider
                                                                style={{
                                                                    margin: 0,
                                                                    padding: 0,
                                                                    backgroundColor: "#37404C",
                                                                    width: "150px",
                                                                    height: "1px",
                                                                    marginBottom: "10px",
                                                                }}
                                                            />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-x-[41px] gap-y-[41px] mt-[111px] max-sm:mt-4">
                    {nftdata.map((item, idx) => (
                        <div key={idx} className="relative">
                            <Image
                                alt=""
                                src={item.img}
                                width={479}
                                height={658}
                                className="rounded-[20px] max-w-[322px] md:max-w-[479px] max-h-[658px]"
                            />
                            <div className="flex flex-col absolute bottom-0 w-full justify-between group/item bg-[#29313CC7] hover:bg-[#717A8Bc4] px-[28px] py-[18px] rounded-tl-[37px] rounded-tr-[37px] rounded-bl-[20px] rounded-br-[20px]">
                                <div className="flex justify-between gap-x-20">
                                    <p className="text-[#FFFFFF] text-[24px] whitespace-nowrap max-sm:text-[16px] font-medium">
                                        {item.name}
                                    </p>
                                    <p className="text-[#FFFFFF] text-[29px] whitespace-nowrap max-sm:text-[16px] font-medium text-end">
                                        {item.price}
                                    </p>
                                </div>
                                <div className="flex justify-between gap-x-8">
                                    <p className="text-[#FFFFFF] text-[16px] max-sm:text-[14px] underline font-medium">
                                        {item.category}
                                    </p>
                                    <p className="text-[#FFFFFF] text-[16px] max-sm:text-[14px] underline font-medium text-end">
                                        {item.percent}
                                    </p>
                                </div>
                                <div className="flex justify-between gap-x-8">
                                    <button
                                    // onClick={() => {
                                    //                 window.location.href = "https://nft.pixpel.io/";
                                    //             }}
                                        className="text-[14px] mt-[18px] rounded-[10px] px-[21px] py-[11px] w-fit max-sm:text-[12px]
                                [background:linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] hover:[background:#1FF19F]"
                                    >
                                        {item.order}
                                    </button>
                                    <div className="bg-[linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] mt-[18px] p-[1px] w-fit self-end rounded-[10px]">
                                        <button className="text-[14px] hover:text-[#000000] hover:bg-[#FFFFFF] px-[21px] py-[11px] bg-[#29313C] rounded-[10px] max-sm:text-[12px]">
                                            {item.view}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExploreNFTS;

const btn: btn[] = [
    {
        img: "/assets/images/UserHome/game copy.jpg",
        img2: "/assets/images/UserHome/game.jpg",
        name: "GAMES",
        icon: false,
        isBold: true,
        width: "165px",
        href: "/game-market",
    },
    {
        name: "Class",
        icon: true,
        dots: "/assets/images/UserHome/dots.jpg",
        links: ["Class 1", "Class 2", "Class 3"], // Add links here
        alignitems: "center",
        padding: "8px",
        btpadding: "16px",
        width: "165px",
        href: "/",
    },
    {
        name: "Category",
        icon: true,
        dots: "/assets/images/UserHome/dots.jpg",
        links: ["Category 1", "Category 2", "Category 3"],
        alignitems: "center",
        padding: "23px",
        btpadding: "16px",
        width: "195px",
        href: "/",
    },
    {
        name: "Newest",
        icon: true,
        dots: "/assets/images/UserHome/dots.jpg",
        links: ["Newest", "Most Popular", "Oldest"],
        left: "36px",
        padding: "15px",
        btpadding: "16px",
        width: "178px",
        href: "/",
    },
];

const nftdata: nftData[] = [
    {
        img: "/assets/images/explore/explore1.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore2.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore3.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore4.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore5.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
    {
        img: "/assets/images/explore/explore6.png",
        name: "Holographic #18",
        category: "Stavanger",
        order: "Place a Bid",
        price: "2.00 PIXP",
        percent: "-16%",
        view: "View Artwork",
    },
];
