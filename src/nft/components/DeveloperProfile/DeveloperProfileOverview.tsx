import React, { useState, useEffect } from "react";
import profileImage from "@public/assets/images/devpic.jpg";
import editPic from "@public/icons/Edit_profile_pic.png";
import Image from "next/image";
import Logout from "../Button/Logout";
import { useRouter } from "next/router";
import UploadModel from "@nft/components/Modal/UploadModel";
import { useAppContext } from "@nft/contexts/AppContext";
import editPicHover from "@public/icons/Edit_profile_hover.png";
import axios from "../../../utils/Axios";
import * as AWS from "aws-sdk";
import { message } from "antd";

const DeveloperProfileOverview = () => {
    const router = useRouter();
    const { tempData, userData, userImg, setUserImg } = useAppContext();
    const userDataDev = tempData?.developer;
    const realData = userData?.developer;
    const [toggleModel, setToggleModel] = useState(false);
    const [hover, setHover] = useState(false);
    useEffect(() => {
        if (!realData) {
            router.push("/player/profile");
        } else if (!userDataDev && !realData?.verified) {
            router.push("/developer/notverified");
        }
    }, [realData]);
    const handleHoverIn = () => {
        setHover(true);
    };
    const handleHoverOut = () => {
        setHover(false);
    };

    const handleModel = () => {
        setToggleModel((prev: any) => !prev);
    };
    function setNewImages(name: any, img: string) {
        setUserImg?.((pre: any) => ({ ...pre, [name]: img }));
        handleFileUpload();
    }

    // AWS
    const s3Bucket = "pixpel-backend";

    AWS.config.update({
        accessKeyId: "AKIA2QRNOOF3G2N4S6K6",
        secretAccessKey: "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",
    });

    const s3 = new AWS.S3({
        params: { Bucket: s3Bucket },
        region: "us-east-1",
    });
    console.log(userImg.name);
    console.log(userImg);

    const handleFileUpload = async () => {
        const params = {
            Bucket: "pixpel-backend",
            Key: userImg?.img?.name,
            Body: userImg?.img,
        };
        const upload = s3
            .putObject(params)
            .on("httpUploadProgress", (evt: any) => {
                console.log(`Uploading ${Math.floor((evt.loaded * 100) / evt.total)}%`);
                // console.log("Uploading " + String(parseInt((evt.loaded * 100) / evt.total)) + "%");
                // console.log(`Uploading ${parseInt((Number(evt.loaded) * 100) / Number(evt.total))}%`);
            })
            ?.promise();

        await upload.then(async (err: any) => {
            let myLink = `https://${s3Bucket}.s3.amazonaws.com/${params.Key}`;
            await axios
                .put(`/developers/updateImg/${realData?.id}`, {
                    img: `${myLink ? myLink : userDataDev?.img}`,
                })
                .then((res: any) => {
                    console.log("Changed", tempData);
                })
                .catch((e) => {
                    console.log(e.message);
                });
            console.log("Error :", err);
            //    console.log(`https://${s3Bucket}.s3.amazonaws.com/${params.Key}`);
            // Fille successfully uploaded
            // alert("File uploaded successfully.");
            message.success("File uploaded successfully.");
            myLink = "";
            console.log("PREV LINK STORE: ", myLink);
        });
    };

    console.log(userDataDev);
    return (
        <div className="flex max-sm:flex-col bg-app-black rounded-lg px-6 py-5 2xl:w-[1317px] w-full mt-[20px] 2xl:ml-8">
            <img
                src={
                    userImg
                        ? URL.createObjectURL(userImg?.img)
                        : userDataDev?.img || (realData?.img ? realData.img : "")
                }
                alt="Profile"
                className="w-28 h-28 rounded-full mr-6"
            />
            <Image
                src={hover ? editPicHover : editPic}
                onMouseOver={handleHoverIn}
                onMouseOut={handleHoverOut}
                width={100}
                alt="edit"
                className="w-[32px] h-[32px] mt-[76px] ml-[-47px] mr-[20px]"
                onClick={handleModel}
            />
            <div className="flex max-sm:flex-col mt-10 w-full gap-20">
                <div className="flex flex-col gap-3 w-4/5 max-xl1:w-full">
                    <p className="flex gap-2 font-medium text-[18px] leading-normal">
                        {realData ? (
                            realData?.verified ? (
                                <>
                                    Verified Regular
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M9.17998 0.464508C9.9043 -0.154836 11.0905 -0.154836 11.8253 0.464508L13.4839 1.89215C13.7988 2.16508 14.3867 2.38552 14.8066 2.38552H16.5911C17.7038 2.38552 18.6171 3.2988 18.6171 4.41152V6.19607C18.6171 6.60546 18.8376 7.20381 19.1105 7.51873L20.5381 9.17735C21.1575 9.90167 21.1575 11.0879 20.5381 11.8227L19.1105 13.4813C18.8376 13.7962 18.6171 14.384 18.6171 14.8039V16.5885C18.6171 17.7012 17.7038 18.6145 16.5911 18.6145H14.8066C14.3972 18.6145 13.7988 18.8349 13.4839 19.1078L11.8253 20.5355C11.101 21.1548 9.9148 21.1548 9.17998 20.5355L7.52136 19.1078C7.20644 18.8349 6.61859 18.6145 6.19869 18.6145H4.38265C3.26993 18.6145 2.35666 17.7012 2.35666 16.5885V14.7934C2.35666 14.384 2.13621 13.7962 1.87378 13.4813L0.456635 11.8122C-0.152212 11.0879 -0.152212 9.91216 0.456635 9.18785L1.87378 7.51873C2.13621 7.20381 2.35666 6.61596 2.35666 6.20656V4.40102C2.35666 3.2883 3.26993 2.37503 4.38265 2.37503H6.19869C6.60809 2.37503 7.20644 2.15458 7.52136 1.88165L9.17998 0.464508Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M9.21952 13.8219C9.00957 13.8219 8.81012 13.7379 8.66316 13.5909L6.12285 11.0506C5.81843 10.7461 5.81843 10.2423 6.12285 9.93784C6.42727 9.63341 6.93115 9.63341 7.23557 9.93784L9.21952 11.9218L13.7334 7.40801C14.0378 7.10358 14.5417 7.10358 14.8461 7.40801C15.1505 7.71243 15.1505 8.2163 14.8461 8.52069L9.77588 13.5909C9.62891 13.7379 9.42946 13.8219 9.21952 13.8219Z"
                                            fill="white"
                                        />
                                    </svg>
                                </>
                            ) : (
                                "Not Verified"
                            )
                        ) : (
                            ""
                        )}
                    </p>
                    <div className="flex max-xl1:flex-col gap-12 w-full">
                        <div className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Name:
                            <input
                                className="bg-app-black-button h-16 rounded-lg px-3"
                                placeholder={
                                    userDataDev ? userDataDev?.name : realData?.name ? realData?.name : "DEVLOEPER"
                                }
                                disabled
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Email:
                            <input
                                className="bg-app-black-button h-16 rounded-lg px-3"
                                placeholder={
                                    userDataDev
                                        ? userDataDev?.email
                                        : realData?.email
                                        ? realData?.email
                                        : "DEVELOPER@gmail.com"
                                }
                                disabled
                            />
                        </div>
                    </div>
                    <div className="flex max-xl1:flex-col gap-12">
                        <div className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Phone Number:
                            <input
                                className="bg-app-black-button h-16 rounded-lg px-3"
                                placeholder={
                                    userDataDev
                                        ? userDataDev?.contact_details
                                        : realData?.contact_details
                                        ? realData?.contact_details
                                        : "9909893843"
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-[18px] font-normal w-1/2 max-xl1:w-full">
                            Address:
                            <input
                                className="bg-app-black-button h-16 rounded-lg px-3"
                                placeholder={
                                    userDataDev
                                        ? userDataDev?.address
                                        : realData?.address
                                        ? realData?.address
                                        : "abc near abc street"
                                }
                            />
                        </div>
                    </div>
                    {/* <p className="text-gray-500 text-[16px]">Last log-in 2022-04-18 14:12</p> */}
                </div>
                <div onClick={() => router.push("/")} className="w-[20%] 3xl1:w-[15%] -mt-8 -ml-16">
                    <Logout />
                </div>
            </div>
            {/* MODEL */}
            {toggleModel ? (
                <UploadModel
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(image: string) => setNewImages?.("img", image)}
                    handleClick={handleModel}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default DeveloperProfileOverview;
