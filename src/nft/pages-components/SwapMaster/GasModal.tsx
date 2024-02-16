import Image from "next/image";
import fontawesome from "@public/assets/images/common/font-awesome.svg";
import { Divider } from "antd";

interface GasModal {
    setShowCreateModal: (val: boolean) => void;
    showCreateModal: boolean;
}
function GasModal(props: GasModal) {
    return (
        <div>
            {props.showCreateModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto bg-[#29313C]">
                        <div
                            className="fixed inset-0 w-full h-full"
                            onClick={() => props.setShowCreateModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative flex flex-col mx-auto text-lg shadow-lg bg-app-black-modal rounded-xl w-158 sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center justify-center text-center">
                                        <h1 className="text-[20px] font-semibold leading-nromal text-center">
                                            Slippage
                                        </h1>
                                    </div>
                                    <div className="flex justify-between items-center my-3">
                                        <div
                                            className="flex w-[50px] h-[50px] bg-app-black-select rounded-md justify-center items-center cursor-pointer hover:bg-[#717A8B]"
                                            onClick={() => props.setShowCreateModal(false)}
                                        >
                                            <svg
                                                className="h-6 w-6text-[#717A8B] "
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                {" "}
                                                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-10 2xs:mb-7 2xs:justify-start">
                                    <div className="text-[20px] font-medium leading-normal 2xs:text-2xl">
                                        Gas on destination chain
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <button className="text-[18px] leading-normal font-semibold bg-[#0196C9] rounded-[5px] px-[95px] py-[20px]">
                                            None
                                        </button>
                                        <button className="text-[18px] leading-normal font-semibold bg-[#37404C] rounded-[5px] px-[95px] py-[20px] hover:bg-[#717A8B]">
                                            Default
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex flex-row w-full  mt-[20px] justify-between py-5 mb-2 rounded-md px-7 bg-app-black">
                                            <div className="font-normal ">0.0</div>
                                            <div className="font-medium text-[#0095C8]">Max</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-[20px]">
                                        <h3 className="text-[20px] font-medium leading-normal">Slippage Tolerance</h3>
                                        <Image src={fontawesome} width={18} height={18} alt="fontAwesome" />
                                    </div>
                                    <div className="w-full">
                                        <Divider className="!bg-[#37404C]" />
                                    </div>
                                    <div className="flex justify-between mt-[20px]">
                                        <div className="text-[18px] leading-normal font-semibold bg-[#0196C9] rounded-[5px] px-[50px] py-[15px]">
                                            0.10%
                                        </div>
                                        <div className="text-[18px] leading-normal font-semibold bg-[#37404C] rounded-[5px] px-[50px] py-[15px] hover:bg-[#717A8B]">
                                            0.5%
                                        </div>
                                        <div className="text-[18px] leading-normal font-semibold bg-[#37404C] rounded-[5px] px-[50px] py-[15px] hover:bg-[#717A8B]">
                                            1%
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex flex-row w-full  mt-[20px] justify-between py-5 mb-2 rounded-md px-7 bg-app-black">
                                            <div className="font-normal ">0.1</div>
                                            <div className="font-medium">%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default GasModal;
