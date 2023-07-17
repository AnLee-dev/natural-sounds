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
    <div className="text-gray-600 body-font">
      <AudioPlayer
        playing={playing}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-rain w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-thunder w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-wave w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-wind w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-fire w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-birds w-24 h-24 mx-auto my-0"></div>
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
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
