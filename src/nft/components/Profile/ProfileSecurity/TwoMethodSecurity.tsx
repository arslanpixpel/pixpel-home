import React, { useEffect, useState } from "react";
import { verificationList } from "@nft/pages-components/Profile/datalist";
import EnableButton from "../../Button/EnableButton";
import { useAppContext } from "@nft/contexts/AppContext";
import axios from "../../../../utils/Axios";
import { useRouter } from "next/router";

interface checker {
    id?: number;
    email?: string;
    developer?: object;
    contact_details?: string;
    verified?: boolean;
}

const TwoMethodSecurity = () => {
    const { userData, tempData, type } = useAppContext();
    const [otp, setOtp] = useState("");
    const [otpCheck, setOtpCheck] = useState("");
    const [developer, setDeveloper] = useState<checker>();
    const [modalIsOpenVerify, setIsOpenVerify] = useState(false);
    const [modalPhone, setModelPhone] = useState(false);
    useEffect(() => {
        function check() {
            if (type === "player") {
                setDeveloper({ ...userData?.player });
            } else {
                setDeveloper({ ...userData?.developer });
            }
        }
        check();
    }, []);

    const router = useRouter();
    const updDev = tempData?.type;
    const userDataDev = userData?.type;
    // console.log("DATA :", developer)
    async function handleSendOtp() {
        await axios.post("/email/send-otp", { email: developer?.email }).then((res) => {
            //   console.log(res);
            const resOtp = res.data.otp;
            setOtp(resOtp);
        });
        closeModalVerify();
    }
    // console.log(type , "TYPE");
    // console.log(otp , "otp");
    const onSubmit = async () => {
        if (otp === otpCheck) {
            await axios
                .post(`/email/verify-email`, {
                    id: developer?.id,
                    type: type,
                })
                .then((res) => {
                    closeModalVerify();
                    alert("OTP VERIFIED");
                    router.push("/");
                    //   console.log(res.data)
                })
                .catch((e) => {
                    console.log(e.message);
                });
        } else {
            alert("WRONG OTP");
        }
    };
    function closeModalPhoneVerify() {
        setModelPhone((prev: any) => !prev);
    }
    function closeModalVerify() {
        setIsOpenVerify((prev: any) => !prev);
    }
    // console.log(modalIsOpenVerify);
    const customStylesVerify = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            maxWidth: "519px",
            width: "100%",
            marginRight: "-50%",
            transform: "translate( -50%, -50%)",
            border: "none",
            background: "#1F2630",
            padding: "60px 60px 32px 60px",
            borderRadius: "10px",
        },
    };

    return (
        <div className="flex flex-col bg-app-black rounded-lg px-6 py-8 overflow-x-auto w-full">
            <div className="flex gap-4 items-center">
                <div
                    className={`${developer?.verified ? "bg-app-green" : "bg-app-red"} rounded-full w-3 h-3 flex-none`}
                ></div>
                <div className="text-[18px] leading-normal font-semibold">Two method security log-in</div>
            </div>
            <div className="text-base mt-4 font-medium mb-2">Phone number</div>
            <div className="flex justify-between flex-col xs:flex-row gap-4 w-full">
                <div className="flex items-center justify-center w-auto text-sm px-8 bg-app-black-button h-10 rounded-md  font-normal">
                    {developer?.contact_details}
                </div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Enable"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="text-base font-medium mt-10 mb-2">Gmail verification</div>
            <div className="flex justify-between xs:flex-row flex-col gap-4">
                <div className="flex items-center justify-center w-auto text-sm font-normal px-8 bg-app-black-button h-10 rounded-md">
                    {developer?.email}
                </div>
                <EnableButton
                    onClick={handleSendOtp}
                    disabled={developer ? developer.verified : false}
                    className="bg-[#0095C8] disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:cursor-not-allowed hover:bg-[#50D0FB] text-sm font-medium"
                    title="Enable"
                />
            </div>
            {/* MODEL Gmail */}

            <div
                className={`absolute top-[30%] p-20 left-[50%] bg-slate-800 rounded-xl p- ${
                    modalIsOpenVerify ? "" : "hidden"
                }`}
            >
                <h1 className="text-2xl font-bold mb-4">OTP Verification('Email')</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
                            OTP:
                        </label>
                        <input
                            type="number"
                            id="otp"
                            value={otpCheck}
                            onChange={(e: any) => {
                                setOtpCheck(e.target.value);
                            }}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter OTP"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold bg-green-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
            {/* MODEL GMAIL CLOSED */}
            {/* MODEL PHONE */}

            <div
                className={`absolute top-[30%] p-20 left-[50%] bg-slate-800 rounded-xl p- ${
                    modalPhone ? "" : "hidden"
                }`}
            >
                <h1 className="text-2xl font-bold mb-4">OTP Verification('Phone')</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
                            OTP:
                        </label>
                        <input
                            type="number"
                            id="otp"
                            value={otpCheck}
                            onChange={(e: any) => {
                                setOtpCheck(e.target.value);
                            }}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter OTP"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold bg-green-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={closeModalPhoneVerify}
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
            {/* MODEL PHONE CLOSED */}
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Login Password</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Login password is used to log in to your account.
                    </h2>
                </div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Passkeys</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Protect your account with Passkeys and/or security keys, such as Yubikey.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Login Password</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Login password is used to log in to your account.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Authenticator App</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Use Pixpel/Google Authenticator to protect your account and transactions.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex gap-4 items-center">
                <div
                    className={`${developer?.verified ? "bg-app-green" : "bg-app-red"} rounded-full w-3 h-3 flex-none`}
                ></div>
                <div className="text-[18px] leading-normal font-semibold">Advanced Security</div>
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Anti-Phishing Code</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Protect your account from phishing attempts and ensure that your notification emails are from
                        Pixpel only.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Account Connections</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Use a third-party account, such as your Apple ID or Google account to log in to your Binance
                        account.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">Off</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600 flex-col gap-10">
                <h1 className="text-2xl font-semibold">Crypto Withdrawal</h1>
                <div className="flex justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold">One-step Withdrawal</h1>
                        <h2 className="text-base font-normal text-[#717A8B]">
                            When this function is turned on, you can withdraw small amount crypto to whitelisted
                            addresses without passing 2FA verification
                        </h2>
                    </div>
                    <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                    <EnableButton
                        className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                        title="Manage"
                        onClick={closeModalPhoneVerify}
                        disabled={true}
                    />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold">One-step Withdrawal</h1>
                        <h2 className="text-base font-normal text-[#717A8B]">
                            When this function is turned on, you can withdraw small amount crypto to whitelisted
                            addresses without passing 2FA verification
                        </h2>
                    </div>
                    <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">On</div>
                    <EnableButton
                        className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                        title="Manage"
                        onClick={closeModalPhoneVerify}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex justify-between px-2 mt-4 py-8 border-t-2 border-gray-600">
                <div>
                    <h1 className="text-2xl font-semibold">Account Connections</h1>
                    <h2 className="text-base font-normal text-[#717A8B]">
                        Use a third-party account, such as your Apple ID or Google account to log in to your Binance
                        account.
                    </h2>
                </div>
                <div className="bg-[#37404C] p-2 rounded-md flex justify-center items-center">Off</div>
                <EnableButton
                    className="bg-[#0095C8] hover:bg-[#50D0FB] text-sm font-medium"
                    title="Manage"
                    onClick={closeModalPhoneVerify}
                    disabled={true}
                />
            </div>
        </div>
    );
};

export default TwoMethodSecurity;
