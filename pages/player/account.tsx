import React, { useEffect, useState } from "react";
import { UserHome } from "@nft/pages-components";
import NotFound from "pages/404";
import { useAppContext } from "@nft/contexts/AppContext";

function Account() {
    //   const { isUserLog } = useAppContext();
    const [userLoginValue, setUserLoginValue] = useState<any>(null);

    useEffect(() => {
        const getUserLoginValue = () => {
            const value = document.cookie
                .split("; ")
                .find((row) => row.startsWith("userlogin="))
                ?.split("=")[1];
            setUserLoginValue(value);
        };

        getUserLoginValue();
    }, []);

    console.log(userLoginValue, "userLoginValue");

    return <>{userLoginValue ? <UserHome /> : <NotFound />}</>;
}

export default Account;
