import ButtonMar from "../Button/ButtonMar";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

import PlayerImage from "@public/assets/images/playerimg.jpg";
import DeveloperImage from "@public/assets/images/developerimg.jpg";
import PlayerHoverImage from "@public/assets/images/UserHome/hoverplayer.jpg";
import DeveloperHHoverImage from "@public/assets/images/UserHome/hoverdeveloper.jpg";

function PlaytoEarn() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [modalIsOpenRegister, setIsOpenRegister] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverImage, sethoverImage] = useState(false);
    const [modalIsOpenVerify, setIsOpenVerify] = useState(false);
    const [type, setype] = useState("");
    const [signup, setSignup] = useState({
        email: "",
        contactNo: "",
        pass: "",
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const MouseEnterDevlelopr = () => {
        sethoverImage(true);
    };

    const MouseLeaveDeveloper = () => {
        sethoverImage(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };
    let typeModal = "register";

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "30px 60px 60px 60px",
            borderRadius: "10px",
        },
    };

    const customStylesRegister = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };

    const customStylesVerify = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };

    function closeModal() {
        setIsOpen(false);
    }

    function openModalRegister() {
        setIsOpenRegister(true);
        closeModal();
    }

    function closeModalRegister() {
        setIsOpenRegister(false);
    }

    function openModalVerify() {
        // createAccount();
        setIsOpenVerify(true);
        closeModalRegister();
    }

    function closeModalVerify() {
        setIsOpenVerify(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Example Modal"
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal">
                    <button
                        onClick={closeModal}
                        className="modal__close modal__close--static flex justify-center items-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__row">
                        <div
                            className=""
                            // className="hover:opacity-[0.100] bg-[#FFF] cursor-pointer rounded-[12px]"
                            onClick={() => {
                                setype("player/account");
                                if (typeModal === "register") {
                                    openModalRegister();
                                }
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={isHovered ? PlayerHoverImage : PlayerImage}
                                width={500}
                                height={300}
                                className="modal__img hover:bg-[ rgba(217, 217, 217, 0.50)]"
                                alt=""
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div
                            className=""
                            onClick={() => {
                                setype("developer");
                                if (typeModal === "register") {
                                    openModalRegister();
                                }
                            }}
                        >
                            <div onMouseEnter={MouseEnterDevlelopr} onMouseLeave={MouseLeaveDeveloper}>
                                <Image
                                    src={hoverImage ? DeveloperHHoverImage : DeveloperImage}
                                    width={500}
                                    height={300}
                                    className="modal__img"
                                    alt=""
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            {/* <div className="modal__name">DEVELOPER</div> */}
                        </div>
                    </div>
                </div>
            </Modal>

            {/* register model */}
            <Modal
                isOpen={modalIsOpenRegister}
                onRequestClose={closeModalRegister}
                ariaHideApp={false}
                style={customStylesRegister}
                contentLabel="Example Modal"
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal modal-register">
                    <button
                        onClick={closeModalRegister}
                        className="modal__close modal-login__close flex items-center justify-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__title">
                        {type === "developer" ? "Create Developer account" : "Create Player account"}
                    </div>
                    <form action="#" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Mail
                                </label>
                                <input
                                    type="text"
                                    className="modal__input"
                                    placeholder="Example@gmail.com"
                                    value={signup.email}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, email: e.target.value }))}
                                />
                            </div>
                            {type === "developer" && (
                                <div className="modal__field">
                                    <label htmlFor="" className="modal__label">
                                        Contact No
                                    </label>
                                    <input
                                        type="number"
                                        className="modal__input"
                                        placeholder="Contact Number"
                                        value={signup.contactNo}
                                        onChange={(e) => setSignup((pre) => ({ ...pre, contactNo: e.target.value }))}
                                    />
                                </div>
                            )}
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.pass}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, pass: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className="modal__form-group">
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input" />I have read an accept Pixpel
                                terms and conditions
                            </div>
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input" />I want to recive marketing
                                email
                            </div>
                        </div>

                        <button
                            className="modal__btn bg-[#2EBD85] !py-3 hover:bg-[#1FF19F]"
                            onClick={() => openModalVerify()}
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpenVerify}
                onRequestClose={closeModalVerify}
                ariaHideApp={false}
                style={customStylesVerify}
                // className="w-[1160px] h-[460px]"
            >
                <div className="modal modal-verify">
                    <button
                        onClick={closeModalVerify}
                        className="modal__close modal-login__close flex items-center justify-center hover:bg-[#FFFFFF80]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                                stroke="#717A8B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="modal__title modal-verify__title">Verify Email</div>
                    <div className="modal__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare eros at ante viverra, at
                        suscipit metus convallis. Nulla porttitor diam neque
                    </div>
                    <form action="" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    6 Didgit code
                                </label>
                                <input type="text" className="modal__input" placeholder="XX-XX-XX" />
                            </div>
                        </div>
                        <a href={`/${type}`} className="modal__btn bg-[#2EBD85] hover:bg-[#1FF19F]">
                            Create account
                        </a>
                    </form>
                </div>
            </Modal>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="title banner__title flex text-center relative font-semibold text-[77px]">
                        Game Changer: All In One,
                        <br /> Platform By Pixpel
                        {/* <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute right-[-78px] top-[49px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            className="absolute right-[-78px] top-[49px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72882)">
                                <path
                                    d="M31.4743 16.4989C21.3602 19.1801 19.184 21.3563 16.4989 31.4704C13.8177 21.3563 11.6532 19.1683 1.52344 16.4989C11.6415 13.8138 13.8177 11.6375 16.4989 1.52344C19.184 11.6375 21.3602 13.8138 31.4743 16.4989Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72882">
                                    <rect width="33" height="33" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {/* <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={55}
                            height={55}
                            className="absolute right-[-59px] top-[7px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="59"
                            height="59"
                            viewBox="0 0 59 59"
                            fill="none"
                            className="absolute right-[-59px] top-[7px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72880)">
                                <path
                                    d="M56.2752 29.5008C38.1924 34.2945 34.3015 38.1853 29.5009 56.2681C24.7072 38.1853 20.8373 34.2735 2.72656 29.5008C20.8164 24.7002 24.7072 20.8094 29.5009 2.72656C34.3015 20.8094 38.1924 24.7002 56.2752 29.5008Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72880">
                                    <rect width="59" height="59" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {/* <Image
                            src={"/assets/images/home/Players/starlb.svg"}
                            alt=""
                            width={33}
                            height={33}
                            className="absolute left-[-43px] bottom-[63px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            className="absolute left-[-53px] bottom-[63px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6296_74336)">
                                <path
                                    d="M32.4288 16.9996C22.0082 19.762 19.766 22.0042 16.9996 32.4248C14.2371 22.0042 12.007 19.7499 1.57031 16.9996C11.9949 14.2331 14.2371 11.9909 16.9996 1.57031C19.766 11.9909 22.0082 14.2331 32.4288 16.9996Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6296_74336">
                                    <rect width="34" height="34" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {/* <Image
                            src={"/assets/images/home/Players/starlbt.svg"}
                            alt=""
                            width={55}
                            height={55}
                            className="absolute left-[-84px] bottom-[15px]"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85"
                            height="85"
                            viewBox="0 0 85 85"
                            fill="none"
                            className="absolute left-[-114px] bottom-[-5px]"
                        >
                            <g opacity="0.7" clip-path="url(#clip0_6105_72884)">
                                <path
                                    d="M80.4185 42.1584C54.5785 49.0084 49.0184 54.5684 42.1584 80.4084C35.3084 54.5684 29.7784 48.9784 3.89844 42.1584C29.7484 35.2984 35.3084 29.7384 42.1584 3.89844C49.0184 29.7384 54.5785 35.2984 80.4185 42.1584Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6105_72884">
                                    <rect width="84.31" height="84.31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </h1>
                    <p className="text-[#fff] text-center text-[16px] leading-[24px]font-normal max-xs:text-[12px] max-w-[826px] leading-[24px] mt-[30px]">
                        Unlock the future of gaming: more secure, more accessible. Pixpel redefines your gaming experience, making it not just a pastime, but a secure, bountiful journey into the heart of innovation. Play on, worry-free!
                    </p>
                </div>
                <div className="flex justify-center mt-[64px] max-sm:mt-4">
                    <form className="flex banner__form max-sm:flex-col max-sm:gap-y-2">
                        <input
                            type="text"
                            className="banner__input !bg-[#fff] placeholder:text-black font-medium text-black"
                            placeholder="Enter Email / Phone number"
                        />
                        {/* <Link href="/game-market"> */}
                        <ButtonMar
                            isBold
                            title="Join"
                            handleClick={() => {
                                typeModal = "login";
                                openModal();
                                setIsHovered(false);
                            }}
                        />
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default PlaytoEarn;
