"use client";
import React, { useState } from "react";
import { AudioPlayer } from "../audioPlay/page";

function page() {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="xl:w-1/6 lg:w-1/4 md:w-full px-8 py-6">
            <div className="bg-icon bg-rain w-24 h-24 mx-auto my-0"></div>
            <AudioPlayer url="https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4" title="test" author="AnLee" thumbnail="test"/>

            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
              Rain
            </h2>
            <div className="w-24 mx-auto my-0">
              <span className="w-24">
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
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
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
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
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
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
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
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
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
                <audio
                  id=" "
                  className="block w-full max-w-md mx-auto"
                  loop
                  preload="auto"
                >
                  <source
                    src="https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"
                    type="audio/mpeg"
                  />
                  <source
                    className="ogg rain"
                    src="https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.ogg"
                    type="audio/ogg"
                  />
                </audio>
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
                <input
                  type="range"
                  defaultValue={0}
                  min="0"
                  max="10"
                  step="0.02"
                  className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
