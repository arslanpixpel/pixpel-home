import Image, { StaticImageData } from "next/image";

interface collection {
    id?: number;
    img: StaticImageData | string;
    name?: string;
    price?: string;
}

function TopCollection() {
    const perChunk = 3; // items per chunk

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = collection.reduce((resultArray: any[], item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    console.log(result);
    return (
        <>
            <div className="flex flex-col px-[130px] mt-[35px] max-sm:px-0 max-2xl1:px-[15px]">
                <div className="flex justify-center">
                    <p className="flex text-[#FFFFFF] text-[77px] leading-[88.55px] text-center max-sm:text-[24px] max-lg:text-[36px] font-semibold relative">
                        Last Week&apos;s Top Collections
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
                            className="absolute right-[-48px] top-[9px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72941)">
                                <path
                                    d="M14.3094 7.50233C9.71204 8.72105 8.72283 9.71026 7.50234 14.3076C6.28362 9.71026 5.29975 8.71571 0.695312 7.50233C5.29441 6.28184 6.28362 5.29263 7.50234 0.695312C8.72283 5.29263 9.71204 6.28184 14.3094 7.50233Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72941">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute right-[-40px] top-[18px]"
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
                            className="absolute left-[-53px] bottom-[15px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72945)">
                                <path
                                    d="M14.3094 7.50233C9.71204 8.72105 8.72283 9.71026 7.50234 14.3076C6.28362 9.71026 5.29975 8.71571 0.695312 7.50233C5.29441 6.28184 6.28362 5.29263 7.50234 0.695312C8.72283 5.29263 9.71204 6.28184 14.3094 7.50233Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72945">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-[-44px] bottom-[-12px]"
                        />
                    </p>
                </div>

                <div className="flex flex-wrap gap-x-[34px] max-lg:mt-4 justify-center">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {result.map((collectionitem: any[], idx) => (
                        <div key={idx}>
                            <div className="flex 3xl1:flex-col flex-wrap gap-x-[34px] mt-[100px] max-lg:mt-4 justify-center">
                                {collectionitem.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-x-[22px] border-b border-b-[#FFFFFF80] pb-[52px] max-lg:pb-[20px] pt-[32px] max-lg:min-w-[300px] min-w-[372px]"
                                    >
                                        <p className="">{collection.indexOf(item) + 1}</p>
                                        <Image src={item.img} alt="" width={54} height={54} />
                                        <div>
                                            <p className="text-[22px] max-sm:text-[18px] text-[#FFFFFF]">{item.name}</p>
                                            <p className="text-[18px] max-sm:text-[16px] text-[#DBDBDB]">
                                                {item.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TopCollection;

const collection: collection[] = [
    {
        id: 1,
        img: "/assets/images/home/Players/topcollectionicon.svg",
        name: "CloneX",
        price: "$21,017,447",
    },
    {
        id: 2,
        img: "/assets/images/home/Players/topcollection2.svg",
        name: "BoredApeYatch",
        price: "$21,017,447",
    },
    {
        id: 3,
        img: "/assets/images/home/Players/topcollection3.svg",
        name: "MutantApe",
        price: "$21,017,447",
    },
    {
        id: 4,
        img: "/assets/images/home/Players/topcollectionicon.svg",
        name: "CloneX",
        price: "$21,017,447",
    },
    {
        id: 5,
        img: "/assets/images/home/Players/topcollection2.svg",
        name: "BoredApeYatch",
        price: "$21,017,447",
    },
    {
        id: 6,
        img: "/assets/images/home/Players/topcollection3.svg",
        name: "MutantApe",
        price: "$21,017,447",
    },
    {
        id: 7,
        img: "/assets/images/home/Players/topcollectionicon.svg",
        name: "CloneX",
        price: "$21,017,447",
    },
    {
        id: 8,
        img: "/assets/images/home/Players/topcollection2.svg",
        name: "BoredApeYatch",
        price: "$21,017,447",
    },
    {
        id: 9,
        img: "/assets/images/home/Players/topcollection3.svg",
        name: "MutantApe",
        price: "$21,017,447",
    },
    {
        id: 10,
        img: "/assets/images/home/Players/topcollectionicon.svg",
        name: "CloneX",
        price: "$21,017,447",
    },
    {
        id: 11,
        img: "/assets/images/home/Players/topcollection2.svg",
        name: "BoredApeYatch",
        price: "$21,017,447",
    },
    {
        id: 12,
        img: "/assets/images/home/Players/topcollection3.svg",
        name: "MutantApe",
        price: "$21,017,447",
    },
];
