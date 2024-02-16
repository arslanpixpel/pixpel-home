import {useState} from 'react';
import TextContain from '@public/assets/images/popup-text.svg';
import Pic from '@public/assets/images/pic-below.svg';
import Image from 'next/image';
import arrowDown from '@public/assets/images/free_icon_1.svg';
import arrowUp from '@public/assets/images/free_icon_2.svg';

const ProfileApiStats = () => {
    const [check , setCheck] = useState(false);
    const data = [
        "Each account  can create up to 30 API Keys.",
        "Do not disclose your API Keys, Secret Key (HMAC) or Private Key (Ed25519, RSA) to anyone to avoid asset losses. You should treat your API Key  and your Secret Key (HMAC) or Private Key (Ed25519, RSA) like your passwords.",
        "It is recommended to restrict access to trusted IPs only to increase your account security.",
        "You will not be able to create an API Key if KYC is not completed.",
    ];

    return (
        <div className=" px-4 md:px-0">
            <div className="mt-12 font-semibold text-2xl leading-normal">Api Setup</div>
            <div className="flex flex-col md:flex-row justify-between gap-5 mt-6 my-5">
                <div className="bg-app-black w-full rounded-md p-1 h-full min-h-full">
                 <ol className="p-2" >
                    {data && data.map((val:any , key : any) => (
                        <li key={key}>{key + 1}. {val}</li>

                    ))}
                    </ol>                    
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 mt-6 my-5">
                <div className="border border-[#717A8B] w-full rounded-md p-4 h-full min-h-full">
                   <div className='flex '>
                   <div className='flex mr-2 mt-2'>
                    <input type="radio" className='!rounded-md !mr-1' checked={check} onClick={() => {
                       setCheck((prev) => !prev);
                    }}/>
                    </div>
                    <div className='block'>
                    <p>By checking this box, all existing API Key(s) on your master account and sub-accounts will be subject to Default Security Controls.</p> 
                    <p className='text-[#FFC700] flex'>Default Security Controls Details.{check ? <Image src={arrowDown} alt='arrow-down' className='w-[15px] h-[15px]' /> :  <Image src={arrowUp} alt='arrow-up' className='w-[12px] h-[12px]' />}</p></div>
</div>
<div className={`${check ? 'flex' : 'hidden'} mt-10`}>
    <Image src={TextContain} alt="check-text" />
    </div>                
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Image src={Pic} alt='API' />
            </div>
        </div>
    );
};

export default ProfileApiStats;
