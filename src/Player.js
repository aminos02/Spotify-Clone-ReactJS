import React from "react";
import "./player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
