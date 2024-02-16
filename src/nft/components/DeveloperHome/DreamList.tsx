import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function DreamList() {
    const [img, setImg] = useState(0);
    const router = useRouter();
    return (
        <div className="pt-[74px] pb-[171px] px-[60px] max-xl1:px-8">
            <div className="flex flex-col items-center">
                <p className="text-[60px] max-w-[570px] text-[#FFFFFF] font-semibold text-center max-lg:text-[36px]">
                    Follow your dream list your game
                </p>
                <p className="text-[16px] max-w-[570px] mt-[33px] text-[#FFFFFF] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                    dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis posuere leo
                    mi sed lectus.{" "}
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[20px] mt-[89px] max-xl1:max-h-full w-full">
                <div className="relative rounded-[20px] h-fit mr-3">
                    <Image
                        src={images[img]}
                        alt=""
                        className="max-sm:max-w-[300px] max-sm:max-h-[300px] max-w-[732px] max-h-[732px] rounded-[20px]"
                        width={732}
                        height={732}
                    />
                    <div className="flex justify-center">
                        <button
                            className="text-[18px] font-medium leading-normal absolute bottom-[50px] max-sm:bottom-[30px]] mt-[18px] rounded-[10px] px-[100px] py-[25px] 
                            [background:linear-gradient(272deg,#2EBD85_0%,#0095C8_100%)] hover:[background:#1FF19F] flex justify-center"
                            onClick={() => router.push("https://nft.pixpel.io/developer/factory")}
                        >
                            List now
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-10 gap-y-6">
                    {images
                        .filter((_, index) => index !== img)
                        .map((item, idx) => (
                            <div
                                key={idx}
                                className="min-w-[150px] min-h-[150px] max-w-[352px] max-h-[352px] rounded-[20px] cursor-pointer image-container"
                                onClick={() => setImg(images.indexOf(item))}
                            >
                                <Image
                                    key={idx}
                                    src={item}
                                    alt=""
                                    width={352}
                                    height={352}
                                    className="min-w-[150px] min-h-[150px] max-w-[352px] max-h-[352px] rounded-[20px] hover:bg-[#D9D9D980] cursor-pointer"
                                    onClick={() => setImg(images.indexOf(item))}
                                />
                                <div className="image-overlay"></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

const images = [
    "/assets/images/developerhome/followimg5.png",
    "/assets/images/developerhome/followimg1.png",
    "/assets/images/developerhome/followimg2.png",
    "/assets/images/developerhome/followimg3.png",
    "/assets/images/developerhome/followimg4.png",
];
