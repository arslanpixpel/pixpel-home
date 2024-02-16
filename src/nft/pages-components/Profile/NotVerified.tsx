import React, { useState } from 'react';
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import DropDownButton from "../../components/DropDown/DropDownButton";
// import { cross } from '../../../../public/icons/create_rocket_plus.png';
// import { crossHover } from '../../../../public/icons/create_rocket_plus_hover.png'
import UploadModel from '@nft/components/Modal/UploadModel'
import { useAppContext } from '@nft/contexts/AppContext';
// import axios from '../../../../../utils/Axios';
import axios from 'axios'
import * as AWS from "aws-sdk";
import Loader from '@nft/components/Loader/Loader';
import {message} from "antd";


interface yesno {
    id: number;
    title: string;
}
const yesno: yesno[] = [
    {
        id: 1,
        title: "Yes",
    },
    {
        id: 2,
        title: "No",
    },
];

const NotVerified = () => {
    const [toggleImg, setToggleImg] = useState(false);
    const [toggleModel, setToggleModel] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [ValidationError, setValidationError] = useState<string | any | null | undefined>("Provide All Details");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { userData, userImg, setUserImg, tempData, setTempData } = useAppContext();
    const [country, setCountry] = useState('');
    const [shareHolders, setShareHolders] = useState('');
    const [willBeLaunchedInPixPel, setWillBeLaunchedInPixPel] = useState('');
    const [legalName, setLegalName] = useState('');
    const [perPercentage, setPerPercentage] = useState('');
    const [percentage, setPercentage] = useState('');
    const [url, setUrl] = useState('');
    const [process , setProcess] = useState(false);
    const navigate = useRouter();
    const userDataDev = userData?.player
    const handleModel = () => {
        setToggleModel((prev: any) => !prev);
    }

    const onMouseIn = () => {
        setToggleImg(true);
    }
    const onMouseOut = () => {
        setToggleImg(false);
    }
    console.log(userData)

    function setNewImages(name: any, img: string) {
        console.log(img, "name");
        setUserImg?.((pre: any) => ({ ...pre, [name]: img }));
        // handleFileUpload(image);
    }

const handleValidation = () => {
    let isValid = true;

    switch (true) {
        case !userImg:
                setValidationError("Image is required");
                isValid = false;
                break;
        // case !name.trim():
        //     setValidationError("Name is required");
        //     isValid = false;
        //     break;
        case !address.trim():
            setValidationError("Address is required");
            isValid = false;
            break;
        case !phone.trim():
            setValidationError("Phone is required");
            isValid = false;
            break;
        // case !email.trim():
        //     setValidationError("Email is required");
        //     isValid = false;
        //     break;
        case !country.trim():
            setValidationError("Country is required");
            isValid = false;
            break;
        case !shareHolders.trim():
            setValidationError("Shareholders is required");
            isValid = false;
            break;
        case !willBeLaunchedInPixPel:
            setValidationError("Will be Launched in PixPel is required");
            isValid = false;
            break;
        case !legalName.trim():
            setValidationError("Legal Name is required");
            isValid = false;
            break;
        case !perPercentage.trim():
            setValidationError("Per Percentage is required");
            isValid = false;
            break;
        case !percentage.trim():
            setValidationError("Percentage is required");
            isValid = false;
            break;
        // case !process:
        //     setValidationError("Process is required");
        //     isValid = false;
        //     break;
        // case !url.trim():
        //     setValidationError("URL is required");
        //     isValid = false;
        //     break;
        default:
            setValidationError("");
            break;
    }

    return isValid;
};
    const handleClickArrow = () => {
        navigate.back();
    };

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
    // console.log(image);

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
            setProcess(true);
            let myLink = `https://${s3Bucket}.s3.amazonaws.com/${params.Key}`;
            await axios.put(`https://backend.pixpel.io/players/update/${userDataDev?.id}`, {

                name: `${name ? name : userDataDev?.name}`,
                email: `${email ? email : userDataDev?.email}`,
                wallet: `${userDataDev?.wallet ? userDataDev?.wallet :"4dgSpWaZf4Z5yDFE5hb6XpaioDv6kao7UF3wvZiMbFkynSdh1A"}`,
                contact_details: `${phone ? phone : userDataDev?.contact_details}`,
                verified: false,
                img: `${myLink ? myLink : userDataDev?.img}`,
                address: `${address ? address : userDataDev?.address}`,
                country: `${country ? country : userDataDev?.country}`,
                legalName: `${legalName ? legalName : userDataDev?.legalName}`,
                perPercentage: `${perPercentage ? perPercentage : userDataDev?.perpercentage}`,
                percentage: `${percentage ? percentage : userDataDev?.percentage}`,
                shareHolders: `${shareHolders ? shareHolders : userDataDev?.shareholders}`,
                launchedAtPixpel: willBeLaunchedInPixPel
    
            }).then((res: any) => {
                console.log(res.data);
                const dat = res.data;
                const devData = dat.data;
                console.log(devData);
                if(res.data){
                    setTempData?.({ player: { ...devData } })
                    console.log("Changed", tempData);
                    setProcess(false);
                    navigate.push("/player/profile");
                }
            }).catch((e) => {
                console.log(e.message);
                setProcess(false);
            })
            setUrl(myLink);
            console.log("Error :", err);
            //    console.log(`https://${s3Bucket}.s3.amazonaws.com/${params.Key}`);
            // Fille successfully uploaded
            // alert("File uploaded successfully.");
            message.success("File uploaded successfully.");
            myLink = '';
            console.log("IMage URL : ", url);
            console.log("PREV LINK STORE: ", myLink);
        });
    }

    // async function handleSubmit() {
      
    // }
    console.log("WILL BE ", willBeLaunchedInPixPel)
    return (
        <div className="flex pt-11 flex-col px-56 pb-56 max-xl:px-10 max-xl:pb-10">
            <div className="flex flex-row items-center justify-between w-full mb-5">
                <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
                    onClick={handleClickArrow}
                >
                    <svg
                        className="h-6 w-6 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="11" y2="18" />
                        <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>
                </div>
                <div className="text-[40px]  2xs:text-[40px] 1xs:text-[40px] font-semibold leading-nromal">Profile</div>
                <div className="w-12 h-12"></div>
            </div>
            <div className="flex gap-10 bg-app-black px-32 py-14 mb-20 mt-[40px] max-xl:px-10 max-xl:justify-center  max-xl:flex-wrap">
                <div className="flex flex-col gap-1 items-center">
                    <div
                        style={{
                            backgroundImage: `${ userDataDev ? `url(${userDataDev?.img})` : userImg ? `url(${URL.createObjectURL(userImg.img)})` :  "#29313C"}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                        }}

                        onMouseOver={onMouseIn}
                        onMouseOut={onMouseOut}
                        onClick={handleModel} className={`text-[18px] leading-normal border-app-black w-44 h-44 flex-none rounded-full flex justify-center items-center text-2xl font-medium ${userImg ? 'border-8' : ''}`}>
                        <div className={`m-0 ${userImg ? 'hidden' :''}`}>
                            <img className='w-full mt-[1.5rem]' src={toggleImg ? '/icons/create_rocket_plus_hover.png' : '/icons/create_rocket_plus.png'} />
                        </div>
                    </div>
                    <div className="text-[#45515f] font-poppins text-[24px] font-normal mt-[30px]">{userData?.verified ? "Verified" : 'Not Verified'}</div>
                </div>

                <div className="flex gap-24 justify-between w-full max-xl:flex-wrap max- max-xl:justify-center ">
                    <div className="flex flex-col gap-3 w-1/2">
                        <div className="flex flex-col gap-1 text-[18px] font-semibold leading-normal max-xl:flex-wrap">
                            Name:
                            <input
                                className="bg-app-black-button h-16 rounded-lg px-3"
                                placeholder={userDataDev ? userDataDev?.name : 'player'}
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] font-semibold leading-normal max-xl:flex-wrap">
                            Email:
                            <input className="bg-app-black-button h-16 rounded-lg px-3" placeholder={userDataDev ? userDataDev?.email : 'Dev@Dev.com'} value={email} onChange={(e: any) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-1/2">
                        <div className="flex flex-col gap-1 text-[18px] font-semibold leading-normal max-xl:flex-wrap">
                            Phone Number:
                            <input className="bg-app-black-button h-16 rounded-lg px-3" placeholder={userDataDev ? userDataDev?.contact_details : '92-8888000'} value={phone} onChange={(e: any) => { setPhone(e.target.value) }} />
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] font-semibold leading-normal max-xl:flex-wrap">
                            Address:
                            <input className="bg-app-black-button h-16 rounded-lg px-3" placeholder={userDataDev ? userDataDev?.address : 'abc at abc'} value={address} onChange={(e: any) => { setAddress(e.target.value) }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-[40px]  leading-normal mb-8">Verification Form</div>
            <div className="flex justify-between gap-16 w-full max-xl:flex-wrap  max-xl:justify-start">
                <div className="flex flex-col gap-8 w-1/2">
                    <div className="py-7 px-12 bg-app-black max-xl:w-[80vw] rounded-lg text-[24px] max-xl:flex-wrap font-medium leading-normal flex justify-between">
                        Date of Launch: <span className="max-xl:text-center">{userDataDev !== null ? userDataDev?.dateoflaunch.substring(0, 10) : '03/Nov/2023'}</span>
                    </div>
                    <div className="max-xl:w-[80vw] py-7 px-12 bg-app-black rounded-lg max-xl:justify-between max-md:justify-center max-xl:flex-wrap text-[24px] font-medium leading-normal flex justify-between">
                        Country: <span className="max-xl:text-center">{userDataDev !== null ? (<input className="bg-app-black text-right rounded-lg text-[24px] font-medium leading-normal max-xl:text-center" placeholder={userDataDev?.country} value={country} onChange={(e: any) => { setCountry(e.target.value) }} />) : 'Pakistan'}</span>
                    </div>
                    <div className="max-xl:w-[80vw] py-7 px-12 bg-app-black rounded-lg max-xl:justify-between max-md:justify-center max-xl:flex-wrap text-[24px] font-medium leading-normal flex justify-between">
                        Share Holders: <span className="max-xl:text-center">{userDataDev !== null ? (<input className="bg-app-black text-right rounded-lg text-[24px] font-medium leading-normal max-xl:text-center" placeholder={userDataDev?.shareholders} value={shareHolders} onChange={(e: any) => { setShareHolders(e.target.value) }} />) : 'Juan'}</span>
                    </div>
                    {/* <div className="py-7 px-12 bg-app-black rounded-lg text-[24px] font-medium leading-normal flex justify-between">
                        Share Holders:
                    </div> */}
                </div>
                <div className="flex flex-col gap-8 w-1/2">
                    <div className=" h-21 max-xl:w-[80vw] items-center pl-12 bg-app-black max-xl:flex-wrap max-xl:justify-between max-md:justify-center rounded-lg text-[24px] font-medium leading-normal justify-between flex gap-5">
                        Will be Launched in PixPel:
                        <div className="w-1/6 left-[-20px] relative">
                            <DropDownButton
                                initialContent=""
                                contentList={yesno}
                                backgroundColor="bg-app-black"
                                fontSize={""}
                                textColor={""}
                                setState={setWillBeLaunchedInPixPel} setCustomState={undefined} property={undefined}                            />
                        </div>
                    </div>
                    <div className="max-xl:w-[80vw] py-7 px-12 bg-app-black rounded-lg max-xl:justify-between max-md:justify-center max-xl:flex-wrap text-[24px] font-medium leading-normal flex justify-between">
                        Legal Name: <span className="max-xl:text-center">{userDataDev !== null ? (<input className="bg-app-black text-right rounded-lg text-[24px] font-medium leading-normal max-xl:text-center" placeholder={userDataDev?.legalname} value={legalName} onChange={(e: any) => { setLegalName(e.target.value) }} />) : 'player'}</span>
                    </div>
                    <div className="max-xl:w-[80vw] py-7 px-12 bg-app-black rounded-lg max-xl:justify-between max-md:justify-center max-xl:flex-wrap text-[24px] font-medium leading-normal flex justify-between">
                        Per Percentage: <span className="max-xl:text-center">{userDataDev !== null ? (<input className="bg-app-black text-right rounded-lg text-[24px] font-medium leading-normal max-xl:text-center" placeholder={userDataDev?.perpercentage} value={perPercentage} onChange={(e: any) => { setPerPercentage(e.target.value) }} />) : '30%'}</span>
                    </div>
                    <div className="max-xl:w-[80vw] py-7 px-12 bg-app-black rounded-lg max-xl:justify-between max-md:justify-center max-xl:flex-wrap text-[24px] font-medium leading-normal flex justify-between">
                        Percentage: <span className="max-xl:text-center">{userDataDev !== null ? (<input className="bg-app-black text-right rounded-lg text-[24px] font-medium leading-normal max-xl:text-center" placeholder={userDataDev?.percentage} value={percentage} onChange={(e: any) => { setPercentage(e.target.value) }} />) : '20%'}</span>
                    </div>
                </div>
            </div>
            {/* <div className="mt-[31px]">
                <button className="flex bg-[#2EBD85] rounded-[10px] px-[30px] py-[15px] items-center gap-x-[5px] text-[#FFFFFF] text-[18px] hover:bg-[#1FF19F]">
                    <AiOutlinePlus /> More
                </button>
            </div> */}
            <div className="mt-[49px] flex justify-center">
                <button
                    onClick={(e: any) => {
                        e.preventDefault();
                        const valid = handleValidation();
                        if (valid) {
                            handleFileUpload();
                        } else {
                            message.error({
                                content: "Message: " + `${ValidationError}`,
                            });
                        }
                        if(url !== null){
                        // handleSubmit();
                        }else {
                            alert("Unexpected Error Occured: Please Click Submit Again!")
                        }
                    }}
                    className="flex bg-[#0095C8] rounded-[5px] px-[80px] py-[20px] items-center gap-x-[5px] text-[#FFFFFF] text-[18px] hover:bg-[#50D0FB]"
                >
                   {process ? <Loader size="md" /> : 'SUBMIT' } 
                </button>
            </div>
            {/* MODEL */}
            {toggleModel ? (
                <UploadModel
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(image: string) => setNewImages('img', image)}
                    handleClick={handleModel}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default NotVerified;
