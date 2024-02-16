import React from "react";
// import PlayerHeader from "@launchpad/components/header/PlayerHeader";
import GameLobby from "@launchpad/pages-components/Frontend/PlayerSide/GameLobby/GameLobby";
import PlayerHeader from "@nft/components/Header/PlayerHeader";
function Player() {
    return (
        <>
            {/* <PlayerHeader headerType="player" /> */}
            <PlayerHeader />
            <main>
                <GameLobby />
            </main>
        </>
    );
}

export default Player;
