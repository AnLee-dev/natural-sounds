"use client";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";
import { AudioDetails } from "./audioDetail";
import { PlayerControls } from "./playerControls";

type TProps = {
  url: string;
};

export const AudioPlayer = ({ url }: TProps) => {
  //define state to controls audio play
  const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // event handlers for custom controls

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };
  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={false}
        volume={volume}
        muted={muted}
        loop={true}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className="">
        <PlayerControls
          playerRef={playerRef}
          playing={playing}
          volume={volume}
          muted={muted}
          progress={progress}
          duration={duration}
          loop={true}
          toggleMute={toggleMute}
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
