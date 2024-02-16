import React from "react";
import AccountActivity from "./ProfileSecurity/AccountActivity";
import IDVerification from "./ProfileSecurity/IDVerification";
import TwoMethodSecurity from "./ProfileSecurity/TwoMethodSecurity";

const ProfileSecurity = () => {
    return (
        <div className="2xl:px-8 2xl:pr-20">
            <div className="mt-20 mb-8 font-semibold text-3xl">Security</div>
            <div className="flex flex-wrap  w-full">
                <TwoMethodSecurity />
                {/* <IDVerification />
                <AccountActivity /> */}
            </div>
        </div>
    );
};

export default ProfileSecurity;
