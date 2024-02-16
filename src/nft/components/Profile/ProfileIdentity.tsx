import React from 'react'
import { useAppContext } from "@nft/contexts/AppContext";
import greenIcon from "@public/assets/images/tokens/Vector_green.svg";
import greyIcon from "@public/assets/images/tokens/VectorGrey.svg";
import lineIcon from "@public/assets/images/tokens/line.svg";
import FirstPara from "@public/assets/images/tokens/Verified_1.svg";
import SecondPara from "@public/assets/images/tokens/Vector_2.svg";
import ThirdPara from "@public/assets/images/tokens/Vector_3.svg";
import Image from "next/image";

const ProfileIdentity = () => {
const {userData} = useAppContext();
const player:any = userData?.player;

    const limits = [
        {
         title : "Fiat Deposit & Withdrawal Limits",
         text: "50K USD Daily"
        },{
         title : "Crypto Deposit Limit",
         text: "Unlimited"
        },{
         title : "Crypto Withdrawal Limit",
         text: "8M USDT Daily"
        },{
         title : "P2P Transaction Limits",
         text: "Unlimited"
        }
    ]
    const details = [
        {
            title : "Name",
            text : userData ? player.name : "N/A"
        },
        {   title : "Date",
            text : userData ? "1982-02-30" : "N/A"},
        {
             title : "Address",
            text : userData ? player.address : "N/A"
        },
        {
             title : "Identification Document",
            text : userData ? "ID Card, M1******98" : "N/A"
        },
        {
             title : "Email Address",
            text : userData ? player.email : "N/A"
        }
    ]
    const VerifiedData = [
        {
            title: "Verified",
            desc: FirstPara,
            subHead : "Fiat Limit of 50K USD Daily",
            isTrue : player ? player.verified : false
        },
        {
            title: "Verified Plus",
            desc: SecondPara,
            subHead : "Fiat Limit of 2M USD Daily",
            isTrue : false
           
        },
        {
            title: "Verified Plus",
            desc: ThirdPara,
            subHead : "Unlimited Fiat Transactions",
            isTrue : false
            
        },
    ]
    // console.log(userData , "userData");
  return (
    <div className=" px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between gap-5 mt-6 my-5">
                <div className='w-[90%] max-md:w-full'>
                <div className="mt-12 font-semibold text-2xl leading-normal mb-12">Identification</div>
                <div className="bg-app-black w-[95%] rounded-md p-1 pb-10">
                <div className="mt-12 ml-14 font-semibold text-2xl leading-normal">Account Limits</div>
                        <div className='flex justify-center px-3'>
                        <table className='w-[90%] text-xl justify-between'>
                        {limits && limits.map((val:any , key:any) =>(
                            <tr key={key}>
                            <td><p className='text-[#717A8B] py-3'>{val.title}</p></td>
                            <td><p className='text-right py-3'>{val.text}</p></td>
                            </tr>
                        ))}
                        </table>
                        </div>
                    <div className='flex justify-center my-10'>
                    <div className='border border-[#717A8B] w-[80%]'>  
                    </div>
                    </div>

                    <div className='flex justify-center px-3'>
                        <table className='w-[90%] text-xl justify-between'>
                        {details && details.map((val:any , key:any) =>(
                            <tr key={key}>
                            <td><p className='text-[#717A8B] py-3'>{val.title}</p></td>
                            <td><p className='text-right py-3 '>{val.text}</p></td>
                            </tr>
                        ))}
                        </table>
                        </div>
                </div>
                </div>
                <div className='w-[55%] max-md:!w-full'>
                    <div className="mt-12 font-semibold text-2xl  leading-normal mb-12">Personal Information</div>
                <div className="border border-[#717A8B] w-full rounded-md p-1 pb-10">
                   <div className='py-6 px-3'>
                    {VerifiedData && VerifiedData.map((val:any , key:any) => (
                        <div key={key} className='p-2'>
                          <div className='flex'>
                            <div className='items-center'>
                                <Image className='mr-2' src={val.isTrue ? greenIcon : greyIcon} alt="icon" />
                                <Image className='ml-3 mt-2' src={lineIcon} alt="Line" />
                            </div>
                            <div className='text-xl font-semibold pl-2'>
                               <p className={val.isTrue ? "text-[#2EBD85] pb-2" : "pb-2"}>{val.title}</p>
                               <p className='pb-4'>{val.subHead}</p>
                               <Image src={val.desc} alt="Line" />
                            </div>
                          </div>
                        </div>    
                    ))}
                    </div>
                </div>
                </div>
            </div>
      </div>      
  )
}

export default ProfileIdentity