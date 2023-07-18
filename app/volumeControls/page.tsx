"use client";
import { useState } from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import VolumeAudio from "./volumeAudio";
import React from "react";

type TProps = {
  url: string;
  playing: boolean;
};

function VolumeControls({ url, playing }: TProps) {
  const [volume, setVolume] = useState<number>(0);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <React.Fragment>
      <ReactPlayer
        className="w-0 !important h-0 !important"
        url={url}
        playing={playing}
        volume={volume}
        loop={true}
        playsinline
      />
      <VolumeAudio volume={volume} handleVolumeChange={handleVolumeChange} />
    </React.Fragment>
  );
}

export default VolumeControls;
