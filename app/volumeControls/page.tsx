"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import VolumeAudio from "./volumeAudio";
import React from "react";

type TProps = {
  url: string;
  playing: boolean;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
};

function VolumeControls({ url, playing, setVolume, volume }: TProps) {
  const [volumes, setVolumes] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(true);

  useEffect(() => (
    volumes > 0 ? setMuted(false) : setMuted(true)
  ),[volumes])

  useEffect(() => setVolume(volume),[setVolume, volume]);
  
  const handleVolumeChange = (newVolume: number) => {
    setVolumes(newVolume);
  };

  return (
    <React.Fragment>
      <ReactPlayer
        className="w-0 !important h-0 !important"
        url={url}
        playing={playing}
        volume={volumes}
        muted={muted}
        loop={true}
        playsinline
      />
      <VolumeAudio volume={volumes} handleVolumeChange={handleVolumeChange} />
    </React.Fragment>
  );
}

export default VolumeControls;
