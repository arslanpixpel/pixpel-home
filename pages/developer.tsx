import React, { useEffect, useState } from "react";
// import { Developer } from "@nft/pages-components";
import DeveloperHome from "@nft/components/DeveloperHome";
import NotFound from "pages/404";
//import { useAppContext } from "@nft/contexts/AppContext";

function Developer() {
    //const { isUserLog } = useAppContext();
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

    // console.log(userLoginValue, "userLoginValue");

    return <>{userLoginValue ? <DeveloperHome /> : <NotFound />}</>;
}

export default Developer;
