'use client'
import React from "react";
import Image from "next/image";
import hill from "../../public/images/hill.jpg";
import beach from "../../public/images/beach.jpg";
import forest from "../../public/images/forest.jpg";
import lake from "../../public/images/lake.jpg";
import lake2 from "../../public/images/lake2.jpg";
import mountain from "../../public/images/mountain.jpg";

function Footer() {
  return (
    <div className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font dark:text-white text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Picture Natural
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto text-white text-base">
            If you truly love nature, you will find beauty everywhere. - Laura
            Ingalls Wilder
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="hill"
                className="w-full object-cover h-full object-center block"
                src={hill}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="Beach"
                className="w-full object-cover h-full object-center block"
                src={beach}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="forest"
                className="w-full h-full object-cover object-center block"
                src={forest}
              />
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="lake"
                className="w-full h-full object-cover object-center block"
                src={lake}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="lake"
                className="w-full object-cover h-full object-center block"
                src={lake2}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="mountain"
                className="w-full object-cover h-full object-center block"
                src={mountain}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
