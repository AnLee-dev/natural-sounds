"use client";
import React, { useState } from "react";
import VolumeControls from "../volumeControls/page";
import AudioPlayer from "../volumeControls/audioPlayer";

function Content() {
  const [playing, setPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div className="h-5/6 z-10">
      <AudioPlayer
        playing={playing}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <div className="px-5 py-18 mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-rain w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Rain
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-thunder w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Thunder
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-wave w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Waves
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st3.asoftmurmur.com/assets/p/content/waves/main-waves.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-wind w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Wind
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st2.asoftmurmur.com/assets/p/content/wind/main-wind.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-fire w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Fire
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st2.asoftmurmur.com/assets/p/content/fire/main-fire.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
          <div className="w-1/2 xl:w-1/6 lg:w-1/4 px-8 py-6">
            <div className="cursor-default bg-icon bg-birds w-24 h-24 mx-auto my-0"></div>
            <h2 className="cursor-default text-lg sm:text-xl dark:text-white text-gray-900 font-medium title-font mb-2 text-center">
              Birds
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <VolumeControls
                  url="https://st3.asoftmurmur.com/assets/p/content/birds/main-birds.mp4"
                  playing={playing}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
