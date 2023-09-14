"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import VolumeAudio from "./volumeAudio";
import React from "react";

type TProps = {
  url: string;
  playing: boolean;
};

function VolumeControls({ url, playing }: TProps) {
  const [muted, setMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState(0);

  useEffect(() => (
    volume > 0 ? setMuted(false) : setMuted(true)
  ),[volume])

  useEffect(() => setVolume(volume),[setVolume, volume]);
  
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
        muted={muted}
        loop={true}
        playsinline
      />
      <VolumeAudio volume={volume} handleVolumeChange={handleVolumeChange} />
    </React.Fragment>
  );
}

export default VolumeControls;
