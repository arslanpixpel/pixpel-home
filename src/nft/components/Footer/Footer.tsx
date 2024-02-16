import React from "react";
import Logo from "@public/assets/images/logo.svg";
import Facebook from "@public/assets/images/facebook.svg";
import Twitter from "@public/assets/images/twitter.svg";
import Telegram from "@public/assets/images/telegram.svg";
import Discord from "@public/assets/images/discord.svg";
import Linkedin from "@public/assets/images/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col bg-app-black 2xl:px-20 xl:px-16 lg:px-12 md:px-9 sm:px-6 px-3 xl:pt-16 lg:pt-12 md:pt-9 sm:pt-6 pt-3 xl:pb-8 lg:pb-6 md:pb-4 pb-3">
            <div className="header__logo cursor-pointer xl:mb-12 lg:mb-9 md:mb-6 sm:mb-4 mb-3">
                <Image src={Logo} className="logo" alt="" />
            </div>
            <div className="grid xl1:grid-cols-6 md1:grid-cols-3 2xs:grid-cols-2 grid-cols-1 2xl:mb-20 xl:mb-16 lg:mb-12 md:mb-9 sm:mb-6 mb-3 gap-10">
                <div className="flex flex-col">
                    <div className="text-[24px]  leading-[36px]  font-bold xl:mb-6 md:mb-4 mb-2">About Us</div>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
                        <div className="font-normal text-[18px]  leading-[27px] cursor-default">Contact Us</div>
                        <div className="font-normal text-[18px]  leading-[27px] cursor-default">Copyright</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-[24px] leading-[36px] font-bold xl:mb-6 md:mb-4 mb-2">Products</div>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
                        <Link href="#">
                            <div className="font-normal text-[18px] leading-[27px] cursor-default">NFT</div>
                        </Link>
                        <Link href="#">
                            <div className="font-normal text-[18px] leading-[27px] cursor-default">Launchpad</div>
                        </Link>
                        <Link href="#">
                            <div className="font-normal text-[18px] leading-[27px] cursor-default">Profile</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold xl:mb-6 md:mb-4 mb-2">Service</div>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
                        <div className="font-normal text-[18px] leading-[27px] cursor-default">Staking</div>
                        <div className="font-normal text-[18px] leading-[27px] cursor-default">Trade</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-[24px] leading-[36px] font-bold xl:mb-6 md:mb-4 mb-2">Support</div>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
                        <div className="font-normal text-[18px] leading-[27px] cursor-default">Privacy Policy</div>
                        <div className="font-normal text-[18px] leading-[27px] cursor-default">Terms of Use</div>
                        <div className="font-normal text-[18px] leading-[27px] cursor-default">Help Support</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-[20px] leading-[20px] font-bold xl:mb-6  md:mb-4 mb-2 text-app-blue">
                        Investors
                    </div>
                    <div className="text-[20px] leading-[36px] font-bold xl:mb-6 md:mb-4 text-app-blue">
                        Investors Portal
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-[24px] leading-[36px]  font-bold xl:mb-6 md:mb-4 mb-2">Community</div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-9">
                            <Link href="https://www.facebook.com/PixpelPlatform/">
                                <Image src={Facebook} alt="facebook" className="w-[24px] h-[24px] rounded-full" />
                            </Link>
                            <Link href="https://twitter.com/PixpelPlatform">
                                <Image src={Twitter} alt="twitter" className="w-[24px] h-[24px] rounded-full" />
                            </Link>
                            <Link href="https://t.me/pixpel">
                                <Image src={Telegram} alt="telegram" className="w-[24px] h-[24px]rounded-full" />
                            </Link>
                        </div>
                        <div className="flex gap-9">
                            <Link href="https://discord.gg/wgHYhj6DKX">
                                <Image src={Discord} alt="discord" className="w-[24px] h-[24px] rounded-full" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/81952738/">
                                <Image src={Linkedin} alt="linkedin" className="w-[24px] h-[24px] rounded-full" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-t-2 border-app-black justify-center items-center gap-2">
                <div className="flex mt-5 gap-2">
                    <div className="font-normal text-[24px] leading-[27px] ">PIXPEL</div>
                    <svg
                        className="w-5 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{" "}
                        <path d="M14.5 9a3.5 4 0 1 0 0 6" />
                    </svg>
                    <div className="text-xl">2024</div>
                </div>
                <div className=" text-[#717A8B]  text-base">By Pixpel Trading S.A. de C.V.</div>
            </div>
        </div>
    );
};

export default Footer;
