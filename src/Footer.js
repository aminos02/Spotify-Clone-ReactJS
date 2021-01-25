import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumlogo"
          src="https://mosaic.scdn.co/640/419dba2aa91ea8312e310f4fa2f1724c00aa832fab67616d0000b2733c414ba7bebbdfb97e05d0fdab67616d0000b2735062370f4c28f0b6efd1c29eab67616d0000b27361006e4fdc8c9fd954fde402"
          alt=""
        />
        <div className="footer_songinfo">
          <h4>Quran</h4>
          <p>Mix</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
