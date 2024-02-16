import React from "react";
import VestInner from "@launchpad/pages-components/Frontend/PlayerSide/Vest/ProjectSingle/VestInner";
import PlayerHeader from "@nft/components/Header/PlayerHeader";

function Player() {
    return (
        <>
            <main>
                <PlayerHeader />
                <VestInner />
            </main>
        </>
    );
}

export default Player;
