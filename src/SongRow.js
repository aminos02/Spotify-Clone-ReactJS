import React from "react";
import "./songrow.css";

function SongRow({ track }) {
  if(track?.name && track?.album?.images[0]?.url)
  return (
    <div className="songRow">
      <img className="songRow_album" src={track?.album?.images[0]?.url} alt="" />
      <div className="songRow_info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artists?.map((artist) => artist.name)}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
  return null;
}

export default SongRow;
