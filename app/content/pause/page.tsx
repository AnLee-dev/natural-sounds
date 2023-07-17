"use client";
import React, { useState } from "react";

function page() {
  const [isPlay, setIsPlay] = useState(false);

  function pause() {
    return setIsPlay(!isPlay);
  }
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The Real Natural Sounds
          </h1>
          <p className="mb-8 text-white">&ldquo;Nature is not a place to visit, it is home.&rdquo; – Gary Snyder.</p>
          <div className="h-[8rem] w-[100%]">
          {isPlay ? (
            <div className="h-[4.5rem] w-[4.5rem] border-x-[1.6rem] mx-auto my-0 border-x-white border-y-0 border-y-transparent border-solid duration-[0.15s,0.1s] ease-[linear,ease] delay-[0s,0s] transition-[border,opacity]" onClick={pause}></div>
          ) : (
            <div className="h-[4.5rem] w-[4.5rem] border-l-[4.5rem] border-r-0 mx-auto my-0 border-x-white border-y-[2.5rem] border-y-transparent border-solid duration-[0.15s,0.1s] ease-[linear,ease] delay-[0s,0s] transition-[border,opacity]" onClick={pause}></div>
          )}
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-white border-2 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
              Timers
            </button>
            <button className="ml-4 inline-flex text-white border-white border-2 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
              Share
            </button>
            <button className="ml-4 inline-flex text-white border-white border-2 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
              Mixes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
