"use client";
import React, { useEffect, useState } from "react";
import guitar from "@/public/images/guitar.svg";
import darkGuitar from "@/public/images/darkGuitar.svg";
import Image from "next/image";
import { useTheme } from "next-themes";


function NavBar() {
  const [image, setImage] = useState('')
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => (
    currentTheme === 'dark' ? setImage(guitar) : setImage(darkGuitar)
  ),[currentTheme])
  return (
    <div className="h-1/6 text-white md:fixed w-full z-50">
      <div className="h-full mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
            <Image src={image} width={150} height={150} alt="Logo website" />
          <span className="ml-3 text-xl dark dark:text-white text-gray-900">
            Natural Sounds
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-orange-500 hover:cursor-pointer"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="mr-5 hover:text-orange-500 hover:cursor-pointer"
            href="/author"
          >
            Author
          </a>
          <a
            className="mr-5 hover:text-orange-500 hover:cursor-pointer"
            href="/about"
          >
            About
          </a>
            <button className="text-base md:mt-0 text-white hover:text-orange-500">
              Login
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill mr-5"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          <button
          className=""
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  className="fill-sky-400/20 stroke-white"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  className="stroke-white"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="stroke-white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="stroke-white"
                ></path>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
