import React from "react";
import "./body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(">>Discover: ", discover_weekly);
  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <img className="body_img" src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body_infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly && discover_weekly?.tracks?.items?.map((item) => {

          if(item?.track)
          return <SongRow track={item.track} />
          
        }
        )}
      </div>
    </div>
  );
}

export default Body;
