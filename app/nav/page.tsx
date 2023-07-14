/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "@/public/images/logo3.svg";
import Image from "next/image";
function page() {
  return (
    <div className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={logo} width={100} height={200} alt="Logo website" />
          <span className="ml-3 text-xl">Natural Sounds</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-800 hover:cursor-pointer">Blog</a>
          <a className="mr-5 hover:text-gray-800 hover:cursor-pointer">Author</a>
          <a className="mr-5 hover:text-gray-800 hover:cursor-pointer">About</a>
        </nav>
          <button className="text-base mt-4 mr-1 md:mt-0 text-white hover:text-gray-900">Login</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
    </div>
  );
}

export default page;
