import React from "react";
import { DeveloperProfile } from "@nft/pages-components";
import NotFound from "pages/404";
import { useAppContext } from "@nft/contexts/AppContext";
function UseProfile() {
    const { isUserLog } = useAppContext();
    return <>{isUserLog ? <DeveloperProfile /> : <NotFound />}</>;
}

export default UseProfile;
