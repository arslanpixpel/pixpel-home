import React from "react";
// import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import Vest from "@launchpad/pages-components/Frontend/PlayerSide/Vest/Vest";
import PlayerHeader from "@nft/components/Header/PlayerHeader";

function Player() {
    return (
        <>
            {/* <PlayerHeader headerType="player" />
             */}
            <PlayerHeader />
            <main className=" pt-11">
                <Vest />
            </main>
        </>
    );
}

export default Player;
