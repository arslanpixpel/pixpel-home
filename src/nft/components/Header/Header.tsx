/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DeveloperHeader from "./DeveloperHeader";
import Logo from "@public/assets/images/logo.svg";
import PlayerImage from "@public/assets/images/playerimg.jpg";
import DeveloperImage from "@public/assets/images/developerimg.jpg";
import PlayerHoverImage from "@public/assets/images/UserHome/hoverplayer.jpg";
import DeveloperHHoverImage from "@public/assets/images/UserHome/hoverdeveloper.jpg";
import PlayerHeader from "./PlayerHeader";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import Loader from "../Loader/Loader";
import axios from "../../../utils/Axios";
import { useAppContext } from "@nft/contexts/AppContext";

let typeModal = "register",
    typeUser = "player/account";
interface HeaderProps {
    styles: any;
}

const Header = (props: HeaderProps) => {
    const { userData, setUserData, setType, type, setIsUserLog } = useAppContext();
    const [process, setProcess] = useState<boolean>(false);
    const styles = {};
    const router = useRouter();
    // console.log("TYPE: ", userData);

    useEffect(() => {
        const data: any = localStorage.getItem("userData");
        const fill = JSON.parse(data);
        console.log(fill, "DATA");
        console.log(router.query, "DATA");
        const query = window.location.search;
        const urlParams = new URLSearchParams(query);
        if (urlParams.get("logout") === "true") {
            localStorage.clear();
        } else {
            if (fill?.player && router.pathname === "/") {
                setType?.("player");
                router.push("/player/account");
            } else if (fill?.developer && router.pathname === "/") {
                setType?.("developer");
                router.push("/developer");
            }
        }
    }, []);

    if (props.styles) Object.assign(styles, props.styles);
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
    const customStylesLogin = {
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

    const [signup, setSignup] = useState({
        email: "",
        contactNo: "",
        pass: "",
        wallet: "",
        zetawallet: "",
    });

    const [signin, setSignin] = useState({
        email: "",
        pass: "",
    });

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
    const [modalIsOpenRegister, setIsOpenRegister] = useState(false);
    const [modalIsOpenVerify, setIsOpenVerify] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    if (Modal.defaultStyles.overlay) {
        Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }

    const createAccount = async () => {
        if (typeUser === "player/account") {
            try {
                await axios
                    .post("/players/emailCheck", {
                        email: signup.email,
                    })
                    .then((res) => {
                        alert("Try Another Email ! Email Already Registered!");
                        setSignup({
                            email: "",
                            contactNo: "",
                            pass: "",
                            wallet: "",
                            zetawallet: "",
                        });
                    });
            } catch (e) {
                await axios
                    .post("players/wallet", {
                        wallet: signup.wallet,
                    })
                    .then((res) => {
                        alert("Try Another Wallet ! Wallet Already Registered!");
                        setSignup({
                            email: "",
                            contactNo: "",
                            pass: "",
                            wallet: "",
                            zetawallet: "",
                        });
                    })
                    .catch(async (e) => {
                        console.log(e);
                        await axios
                            .post(`players/signup`, {
                                name: signup.email.split("@")[0],
                                email: signup.email,
                                wallet: signup.wallet,
                                password: signup.pass,
                                zetawallet: signup.zetawallet,
                            })
                            .then((res) => res.data)
                            .then((data: any) => {
                                // const decodedToken = jwtDecode(data.token) as JwtPayload;
                                // console.log(data)
                            });
                        console.log("Player Account Created");
                        openModalLogin();
                    });
            }
        } else if (typeUser === "developer") {
            try {
                await axios
                    .post("/developers/emailCheck", {
                        email: signup.email,
                    })
                    .then((res) => {
                        console.log(res);
                        alert("Try Another Email! Email Already Registered!");
                        setSignup({
                            email: "",
                            contactNo: "",
                            pass: "",
                            wallet: "",
                            zetawallet: "",
                        });
                    });
            } catch (e) {
                await axios
                    .post(`developers/wallet`, {
                        wallet: signup.wallet,
                    })
                    .then((res) => {
                        alert("Try Another Wallet! Wallet Already Registered!");
                        setSignup({
                            email: "",
                            contactNo: "",
                            pass: "",
                            wallet: "",
                            zetawallet: "",
                        });
                    })
                    .catch(async (e) => {
                        console.log(e);
                        await axios
                            // .post(`http://3.16.112.122:3000/developers/create`, {
                            .post(`developers/signup`, {
                                name: signup.email.split("@")[0],
                                email: signup.email,
                                wallet: signup.wallet,
                                contact_details: signup.contactNo,
                                password: signup.pass,
                                zetawallet: signup.zetawallet,
                            })
                            .then((res) => res.data)
                            .then((data) => {
                                // const decodedToken = jwtDecode(data.token) as JwtPayload;
                                // console.log(data)
                            });
                        console.log("Developer Account Created");
                        typeUser = "developer";
                        openModalLogin();
                    });
            }
        }
    };

    const signInAccount = async () => {
        if (typeUser === "player/account") {
            const type = "player";
            setType?.(type);
            setProcess(true);
            await axios
                .post(`players/signin`, {
                    email: signin.email,
                    password: signin.pass,
                })
                .then((res) => res.data)
                .then((resData) => {
                    const player = resData.data;
                    setIsUserLog?.(true);
                    setUserData?.(player);
                    router.push(`/${typeUser}`);
                    localStorage.setItem("userData", JSON.stringify(player));
                    setProcess(false);
                    closeModalLogin();
                    document.cookie =
                        "userlogin=true; expires=" +
                        new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString() +
                        "; path=/";
                })
                .catch((e: any) => {
                    alert("Email Or Password is Incorrect!");
                    setProcess?.(false);
                    // setSignin({
                    //     email: "",
                    //     pass: "",
                    // });
                });
            console.log("Player signed in successfully");
            // setTimeout(() => {
            //     setIsHovered(false);
            //     setModalLogin((prev: any) => !prev);
            //     closeModalLogin();
            //     setProcess?.(false);
            //     router.push(`/${typeUser}`);
            // }, 3000);
        } else if (typeUser === "developer") {
            const type = "developer";
            setType?.(type);
            setProcess(true);
            await axios
                .post(`developers/signin`, {
                    email: signin.email,
                    password: signin.pass,
                })
                .then((res) => res.data)
                .then((resData) => {
                    const dev = resData.data;
                    setIsUserLog?.(true);
                    setUserData?.(dev);
                    router.push(`/${typeUser}`);
                    setProcess(false);
                    localStorage.setItem("userData", JSON.stringify(dev));
                    closeModalLogin();
                    document.cookie =
                        "userlogin=true; expires=" +
                        new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString() +
                        "; path=/";
                })
                .catch((e: any) => {
                    alert("Email Or Password is Incorrect!");
                    setProcess(false);
                    setSignin({
                        email: "",
                        pass: "",
                    });
                });
            console.log("Developer signed in successfully");
            // setTimeout(() => {
            //     setIsHovered(false);
            //     setModalLogin((prev: any) => !prev);
            //     closeModalLogin();
            //     setProcess?.(false);
            //     router.push(`/${typeUser}`);
            // }, 3000);
        }
    };

    const openModal = () => {
        if (!modalIsOpenLogin && !modalIsOpenRegister) {
            setIsOpen(true);
            setIsHovered(false);
            sethoverImage(false);
        }
    };
    function mainHeader() {
        return (
            <div className="container-fluid bg-[#29313C80] px-2 sm:px-8 !py-[18px] relative z-10">
                <div className="header__inner flex  items-start">
                    <div className="header__logo cursor-pointer">
                        <Image src={Logo as StaticImageData} className="logo" alt="" />
                    </div>
                    <div className="header__group flex flex-wrap">
                        <button
                            className="btn max-sm:text-[10px] hover:text-[#50D0FB]"
                            onClick={() => {
                                typeModal = "login";
                                openModal();
                                setIsHovered(false);
                            }}
                        >
                            Log in
                        </button>
                        <button
                            className="btn btn--brand hover:bg-[#50D0FB] ml-2"
                            onClick={() => {
                                typeModal = "register";
                                openModal();
                                setIsHovered(false);
                            }}
                        >
                            Register
                        </button>
                        {/* <Link href={"/launchpad"} className="btn ml-2 btn--brand hover:bg-[#50D0FB] ">
                            Launchpad
                        </Link>
                        <Link href={"/dex/bridge"} className="btn ml-2 btn--brand">
                            Bridge
                        </Link> */}
                    </div>
                </div>
            </div>
        );
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openModalLogin() {
        setIsOpenLogin(true);
        closeModal();
        setIsHovered(false);
    }

    function closeModalLogin() {
        setIsOpenLogin(false);
    }

    function openModalRegister() {
        setIsOpenRegister(true);
        closeModal();
        setIsHovered(false);
    }

    function closeModalRegister() {
        setIsOpenRegister(false);
    }

    function openModalVerify() {
        // createAccount();
        setIsOpenVerify(true);
        closeModalRegister();
        setIsHovered(false);
    }

    function closeModalVerify() {
        setIsOpenVerify(false);
    }

    // const getPlayerById = async () => {
    //     await axios
    //         // .get("http://3.16.112.122:3000/players/read/7")
    //         .get("http://localhost:3000/players/read/1")
    //         .then((res) => res.data)
    //         .then((data) => console.log(data));
    // };

    // const getDeveloperById = async () => {
    //     await axios
    //         // .get("http://3.16.112.122:3000/developers/read/2")
    //         .get("http://localhost:3000/developers/read/2")
    //         .then((res) => res.data)
    //         .then((data) => console.log(data));
    // };

    // useEffect(() => {
    //     getPlayerById();
    //     getDeveloperById();
    // }, []);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverImage, sethoverImage] = useState(false);
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
                            // className="image-container"
                            // className="hover:opacity-[0.100] bg-[#FFF] cursor-pointer rounded-[12px]"
                            onClick={() => {
                                typeUser = "player/account";
                                if (typeModal === "register") {
                                    openModalRegister();
                                } else {
                                    openModalLogin();
                                    setIsHovered(false);
                                }
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={isHovered ? PlayerHoverImage : PlayerImage}
                                width={500}
                                height={300}
                                // className="modal__img hover:bg-[ rgba(217, 217, 217, 0.50)]"
                                alt=""
                                style={{ cursor: "pointer" }}
                            />
                            {/* <div className="image-overlay-main"></div> */}
                        </div>
                        <div
                            className=""
                            onClick={() => {
                                typeUser = "developer";
                                if (typeModal === "register") {
                                    openModalRegister();
                                } else {
                                    openModalLogin();
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

            {/* login model */}
            <div className={`${modalLogin ? "hidden" : ""}`}>
                <Modal
                    isOpen={modalIsOpenLogin}
                    onRequestClose={closeModalLogin}
                    ariaHideApp={false}
                    style={customStylesLogin}
                    contentLabel="Example Modal"
                >
                    <div className={`modal modal-login`}>
                        <button
                            onClick={closeModalLogin}
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
                            {typeUser === "developer" ? "Developer Login" : "Player Login"}
                        </div>
                        <form
                            action=""
                            className="modal__form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (signin.email && signin.pass) setIsHovered(false);
                                signInAccount();
                            }}
                        >
                            <div className="modal__form-group">
                                <div className="modal__field">
                                    <label htmlFor="" className="modal__label">
                                        Mail
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        className="modal__input"
                                        placeholder="Example@gmail.com"
                                        value={signin.email}
                                        onChange={(e) => setSignin((pre) => ({ ...pre, email: e.target.value }))}
                                    />
                                </div>
                                <div className="modal__field">
                                    <label htmlFor="" className="modal__label">
                                        Password
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        className="modal__input"
                                        placeholder="**************"
                                        value={signin.pass}
                                        onChange={(e) => setSignin((pre) => ({ ...pre, pass: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <button
                                // href="#"
                                className={`btn modal__btn !py-3 bg-[#2EBD85]  hover:bg-[#1FF19F] ${
                                    !signin.email && !signin.pass ? "cursor-not-allowed" : ""
                                }`}
                                disabled={!signin.email && !signin.pass ? true : false}
                                // onClick={() => {
                                //     if(signin.email && signin.pass)
                                //     setIsHovered(false);
                                //     signInAccount();
                                // }}
                            >
                                {process ? <Loader size="md" /> : "Login"}
                            </button>
                            {/* <button className="btn modal__btn">Login</button> */}
                            <button
                                className="modal__btn-forgot"
                                onClick={() => {
                                    openModalRegister();
                                }}
                            >
                                Dont have account?
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
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
                        {typeUser === "developer" ? "Create Developer account" : "Create Player account"}
                    </div>
                    <form
                        action="#"
                        className="modal__form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (signup.email && signup.pass) openModalVerify();
                            createAccount();
                        }}
                    >
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Mail
                                </label>
                                {/* <input
                                    type="email"
                                    required
                                    className="modal__input"
                                    placeholder="Example@gmail.com"
                                    value={signup.email}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, email: e.target.value }))}
                                /> */}
                                <input
                                    type="email"
                                    required
                                    className="modal__input"
                                    placeholder="Example@gmail.com"
                                    value={signup.email}
                                    onChange={(e) => setSignup((prev) => ({ ...prev, email: e.target.value }))}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                    title="Please enter a valid email address"
                                />
                            </div>
                            {typeUser === "developer" && (
                                <div className="modal__field">
                                    <label htmlFor="" className="modal__label">
                                        Contact No
                                    </label>
                                    <input
                                        type="number"
                                        required
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
                                    required
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.pass}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, pass: e.target.value }))}
                                />
                            </div>
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Add Concordium Wallet Address
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.wallet}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, wallet: e.target.value }))}
                                />
                            </div>
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">
                                    Add ZetaChain Wallet Address
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="modal__input"
                                    placeholder="**************"
                                    value={signup.zetawallet}
                                    onChange={(e) => setSignup((pre) => ({ ...pre, zetawallet: e.target.value }))}
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
                            className={`modal__btn  bg-[#2EBD85] !py-3 hover:bg-[#1FF19F] ${
                                !signup.email && !signup.pass ? "cursor-not-allowed" : ""
                            }`}
                            disabled={!signup.email && !signup.pass ? true : false}
                            // onClick={() => {
                            //     if(signup.email && signup.pass)
                            //     openModalVerify();
                            //     createAccount();
                            // }}
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </Modal>

            <Modal
                isOpen={false}
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
                        <button className="modal__btn bg-[#2EBD85] hover:bg-[#1FF19F]">
                            {/* <a href={`#`} className="modal__btn bg-[#2EBD85] hover:bg-[#1FF19F]"> */}
                            Create account
                        </button>
                    </form>
                </div>
            </Modal>
            <header style={styles}>
                {router.pathname !== "/" ? (
                    router.pathname === "/mycollection" ||
                    router.pathname.includes("/developer") ||
                    router.pathname === "/create-nft" ||
                    router.pathname === "/collection" ||
                    router.pathname === "/mysterybox" ||
                    router.pathname === "/stakingportfolio" ||
                    router.pathname === "/finishmint" ||
                    router.pathname === "/gamelanding" ||
                    router.pathname === "/developerwallet" ||
                    router.pathname === "/tokenroom/mint" ||
                    router.pathname === "/tokenroom/burn" ||
                    router.pathname === "/developer/profile" ||
                    router.pathname === "/stakingaccount" ||
                    router.pathname === "/launchpad/developer" ||
                    router.pathname === "/tokenroom" ? (
                        <DeveloperHeader />
                    ) : (
                        <PlayerHeader />
                    )
                ) : (
                    mainHeader()
                )}
            </header>
        </>
    );
};

export default Header;
