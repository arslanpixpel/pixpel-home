import React from "react";
import { NotVerified } from "@nft/pages-components";
import NotFound from "pages/404";
import { useAppContext } from "@nft/contexts/AppContext";

function UseNotverified() {
    const {isUserLog } = useAppContext();
   
    return <>
        {isUserLog ? <NotVerified /> : <NotFound />}
</>
}
export default UseNotverified;
