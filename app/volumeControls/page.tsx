"use client";
import { useState } from "react";
import ReactPlayer from 'react-player/lazy'
// import { ReactPlayerProps } from "react-player/types/lib";
import VolumeAudio from "./volumeAudio";
import React from "react";

type TProps = {
  url: string;
  playing: boolean;
};

function VolumeControls({ url, playing }: TProps) {
  // const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
  const [volume, setVolume] = useState<number>(0);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const check = (e: any) =>{
    console.log(e);
    
  }

  return (
    <React.Fragment>
      <ReactPlayer
        className="w-0 !important h-0 !important"
        url={url}
        playing={playing}
        volume={volume}
        loop={true}
      />
      <VolumeAudio volume={volume} handleVolumeChange={handleVolumeChange} />
    </React.Fragment>
  );
}

export default VolumeControls;
