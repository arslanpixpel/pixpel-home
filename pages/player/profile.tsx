import React from "react";
import { Profile } from "@nft/pages-components";
import NotFound from "pages/404";
import { useAppContext } from "@nft/contexts/AppContext";

function UserProfile() {
    const { isUserLog } = useAppContext();
    return <>
        {isUserLog ? <Profile /> : <NotFound />}
    </>
}

export default UserProfile;
