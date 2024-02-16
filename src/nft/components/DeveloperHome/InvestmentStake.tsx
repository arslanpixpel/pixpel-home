import { useAppContext } from "@nft/contexts/AppContext";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function InvestmentStake() {
    const { setSelectedDevWalletIndex } = useAppContext();
    const { push } = useRouter();
    const redirecthandler = () => {
     window.location.href = "https://dex.pixpel.io/swap-master/liquidity";
                                            
        // push("/developer/wallet");
        // if (setSelectedDevWalletIndex) {
        //     setSelectedDevWalletIndex(3);
        // }
    };

    return (
        <div className="bg-[linear-gradient(24deg,#2EBD85_0%,#0095C8_100%)] flex flex-col items-center py-[75px]">
            <div className="flex gap-x-[68px]">
                <div>
                    <Image src={"/assets/images/developerhome/mltiplebtc.png"} alt="" width={160} height={297} />
                </div>
                <div className="flex flex-col items-center pt-[20px]">
                    <p className="text-[60px] font-semibold leading-normal max-w-[883px] text-center relative max-lg:text-[36px]">
                        Create your investment stake in the best place
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute right-[30px] top-[104px]"
                        />
                        {/* <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={59}
                            height={59}
                            className="absolute right-[-15px] top-[36px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="59"
                            height="59"
                            viewBox="0 0 59 59"
                            fill="none"
                            className="absolute right-[-15px] top-[36px]"
                        >
                            <g opacity="0.42" clip-path="url(#clip0_6283_74804)">
                                <path
                                    d="M56.2752 29.5008C38.1924 34.2945 34.3015 38.1853 29.5009 56.2681C24.7072 38.1853 20.8373 34.2735 2.72656 29.5008C20.8164 24.7002 24.7072 20.8094 29.5009 2.72656C34.3015 20.8094 38.1924 24.7002 56.2752 29.5008Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6283_74804">
                                    <rect width="59" height="59" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute left-[27px] bottom-[80px]"
                        />
                        {/* <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={84}
                            height={84}
                            className="absolute left-[-44px] bottom-[4px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85"
                            height="85"
                            viewBox="0 0 85 85"
                            fill="none"
                            className="absolute left-[-44px] bottom-[4px]"
                        >
                            <g opacity="0.42" clip-path="url(#clip0_6283_74816)">
                                <path
                                    d="M80.4185 42.1584C54.5785 49.0084 49.0184 54.5684 42.1584 80.4084C35.3084 54.5684 29.7784 48.9784 3.89844 42.1584C29.7484 35.2984 35.3084 29.7384 42.1584 3.89844C49.0184 29.7384 54.5785 35.2984 80.4185 42.1584Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6283_74816">
                                    <rect width="84.31" height="84.31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </p>
                    <p className="text-[20px] text-[#FFFFFF] text-center flex justify-center mt-[35px] max-w-[588px] max-lg:text-[14px]">
                        Lorem Ipsum eoiasdñfoa ksdhfaiefñoaishfñlkanvñoashvñoanfvk
                    </p>
                    {/* <Link href="/developer/wallet"> */}
                    <button
                        className="text-[18px] font-medium border border-solid border-white bg-[#1F2630] hover:bg-[#37404C] px-[100px] py-[25px] rounded-[10px] w-fit mt-[76px] max-lg:mt-4 max-lg:px-8 max-lg:py-4"
                        onClick={redirecthandler}
                    >
                        Create Staking
                    </button>
                    {/* </Link> */}
                </div>
                <div>
                    <Image src={"/assets/images/developerhome/mulbtc.png"} alt="" width={160} height={297} />
                </div>
            </div>
        </div>
    );
}
