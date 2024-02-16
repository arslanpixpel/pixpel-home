import { useRouter } from "next/router";
import { useState } from "react";
import EditButton from "../../Button/EditButton";
import NicknameModal from "../Modal/NicknameModal";
import { useAppContext } from "@nft/contexts/AppContext";

const MyProfile = () => {
    const [name, setName] = useState<string>("Alberto1738");
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const handleClickArrow = () => {
    router.replace("/p2p/profile");
    };
    const { userData } = useAppContext();
    const developer = userData.developer;
    console.log(userData);
    return (
        <>
            <div className="2xl:px-8 2xl:pr-20">
                <p className="mt-[40px] mb-8 font-semibold text-[24px]">My Profile</p>
                <div className="flex flex-col border-y-2 border-app-black gap-3 py-3">
                    <div className="flex sm:flex-row flex-col justify-between sm:items-center border-b-2 border-app-black overflow-x-auto">
                        <div className="flex pr-6">
                            <div className="bg-app-black-light items-baseline h-6 w-6 rounded-md flex-none"></div>
                            <div className="flex flex-col mx-4">
                                <p className="text-base font-medium">Nickname</p>
                                <p className="md:my-4 text-gray-400 text-sm font-normal">
                                    Set a customized nickname for your profile
                                </p>
                            </div>
                        </div>
                        <p className="sm:py-12 my-3 text-base px-10 font-medium">{developer?.name}</p>
                        <button
                            className="flex rounded-md bg-app-black hover:bg-[#0196C9] py-[10px] px-[30px] justify-center cursor-pointer mb-5 mx-10 w-[91px] h-[44px] sm:mx-2"
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            Edit
                        </button>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row">
                            <div className="bg-app-black-light h-6 w-6 items-baseline rounded-md flex-none"></div>
                            <div className="flex flex-col mx-4">
                                <p className="text-base font-medium">P2P Profile</p>
                                <p className="my-4 text-gray-400 text-sm font-normal">Edit your P2P Profile</p>
                            </div>
                        </div>
                        <div className="py-10" onClick={handleClickArrow}>
                            <EditButton title="Edit" />
                        </div>
                    </div>
                </div>
            </div>
            {<NicknameModal showModal={showModal} setShowModal={setShowModal} name={name} setName={setName} />}
        </>
    );
};

export default MyProfile;
