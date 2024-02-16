import React from "react";
import Arrow from "@public/assets/images/arrow.svg";
import ArrowW from "@public/assets/images/arrowWhite.svg";
import Image from "next/image";
import { useAppContext } from "@nft/contexts/AppContext";
import { useRouter } from "next/router";

const Logout = () => {
  const { setUserData, setTempData , setType , setIsUserLog } = useAppContext();
  const router = useRouter();

  return (
    <div
      onClick={async (e: any) => {
        await router.push('/');
        setUserData?.({});
        setTempData?.({});
        setType?.('');
        setIsUserLog?.(false);
      }}
      className="flex bg-app-black-button  justify-center items-center rounded-md cursor-pointer gap-3 hover:bg-app-red w-[100%] h-[50px] hover:!text-[#fff]"
    >
      <div className="group uppercase flex text-app-red font-medium text-[18px] leading-normal hover:text-[#FFFFFF] py-3">
        Log Out{" "}
        <Image src={Arrow} alt="arrow" className="ml-[4px] group-hover:hidden block" />{" "}
        <Image src={ArrowW} alt="arrow" className="ml-[4px] group-hover:block hidden" />
      </div>
    </div>
  );
};

export default Logout;
