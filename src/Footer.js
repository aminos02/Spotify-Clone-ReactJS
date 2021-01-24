import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_right">
        <p>left</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </div>
      <div className="footer_left">
        <p>right</p>
      </div>
    </div>
  );
}

export default Footer;
