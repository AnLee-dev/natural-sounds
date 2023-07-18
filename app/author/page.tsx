'use client'
import Image from "next/image";
import React from "react";
import mountain from "@/public/images/mountain.jpg";

function Author() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-my-custom-bg-class p-10">
      <div className="w-full h-5/6 md:w-4/6 py-4 flex justify-center max-w-7xl ">
        <div className="px-8">
          <h1 className="text-indigo-600  text-2xl md:text-4xl font-semibold my-4 text-center">
            Demo author
          </h1>
          <div className="flex items-center justify-center space-x-10">
            <div className="md:ml-[6px] flex flex-col items-center lg:flex-row">
              <Image src={mountain} className="w-[45%]" alt="" />
              <div className="px-5 py-10 text-black flex flex-col w-full lg:w-[55%] ">
                <b className="text-sm -mt-5 -ml-5 md:-ml-0  text-left">
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully
                  changes and renews a weary spirit.
                </b>
                <div className="mt-5 text-left -ml-5 md:text-right ">
                  <h1 className="font-bold text-lg">An Lee</h1>
                  <p className="text-sm">Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
