import React from "react";
import Image from "next/image";
import Link from "next/link";

function MintGameCharacter() {
    return (
        <div className="relative max-lg:pb-[50px]">
            <div className="flex flex-col items-center justify-center pt-[79px] pb-[180px] sliding-background-developer relative">
                <h1 className="title banner__title flex text-center relative font-semibold">
                    Design and Mint
                    <br />
                    Your Game Characters
                    <Image
                        src={"/assets/images/home/Players/starlb.svg"}
                        alt=""
                        width={33}
                        height={33}
                        className="absolute right-[-7px] top-[35px]"
                    />
                    {/* <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={59}
                        height={59}
                        className="absolute right-[16px] top-[-7px]"
                    /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        className="absolute right-[16px] top-[-7px]"
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
                        width={41}
                        height={41}
                        className="absolute left-[-86px] bottom-[25px]"
                    />
                    {/* <Image
                        src={"/assets/images/home/Players/starlbt.svg"}
                        alt=""
                        width={84}
                        height={84}
                        className="absolute left-[-74px] bottom-[-42px]"
                    /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="85"
                        height="85"
                        viewBox="0 0 85 85"
                        fill="none"
                        className="absolute left-[-74px] bottom-[-42px]"
                    >
                        <g opacity="0.42" clip-path="url(#clip0_6283_74814)">
                            <path
                                d="M80.4185 42.1584C54.5785 49.0084 49.0184 54.5684 42.1584 80.4084C35.3084 54.5684 29.7784 48.9784 3.89844 42.1584C29.7484 35.2984 35.3084 29.7384 42.1584 3.89844C49.0184 29.7384 54.5785 35.2984 80.4185 42.1584Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-miterlimit="10"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6283_74814">
                                <rect width="84.31" height="84.31" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h1>

                <p className="text-[#fff] text-[20px] leading-[30px] max-w-[590px] text-center  mt-[30px]">
                    Our Marketplace is the world´s first and largest NFT market for independent creators worldwide
                </p>
                <Link href="https://nft.pixpel.io/developer/factory">
                    <button className="text-[18px] text-[#FFFFFF] bg-[#0196C9] hover:bg-[#50D0FB] rounded-[10px] mt-[27px] px-[100px] max-sm:px-[50px] py-[25px]">
                        Start Creating
                    </button>
                </Link>
            </div>
            {/* <Image
                src={"/assets/images/developerhome/img1.png"}
                alt=""
                width={230}
                height={230}
                className="w-[230px] h-[230px] absolute top-[-62px] right-[220px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img2.png"}
                alt=""
                width={268}
                height={268}
                className="w-[268px] h-[268px] absolute left-0 top-[-54px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img3.png"}
                alt=""
                width={203}
                height={203}
                className="w-[203px] h-[203px] absolute top-[59px] left-[290px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img4.png"}
                alt=""
                width={173}
                height={173}
                className="w-[173px] h-[173px] absolute top-[173px] right-[173px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img5.png"}
                alt=""
                width={165}
                height={165}
                className="w-[165px] h-[165px] absolute top-[271px] left-[142px] max-xl1:hidden"
            />
            <Image
                src={"/assets/images/developerhome/img6.png"}
                alt=""
                width={141}
                height={141}
                className="absolute top-[32px] right-0 max-xl1:hidden"
            /> */}
        </div>
    );
}

export default MintGameCharacter;
