"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";

export function ProjectSection() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects
      </h1>
      <br></br>
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">

        <div className="px-3 md:px-10 py-10">
          <BackgroundGradient className="bg-slate-950 rounded-3xl m-1 ">
            <div className="flex flex-col">
              <div className="w-full h-full  p-[4%] rounded-3xl">
                <img
                  src={
                    "https://res.cloudinary.com/dps3eybtx/image/upload/v1733925661/Portfolio/Projects/imfrwlhjtl6nkqbxx17q.png"
                  }
                  alt="ThinkandSelect"
                  className="bg-cover bg-center w-full m-1 rounded-2xl"
                />
              </div>

              <div className="w-full p-3 h-full">
                <h1 className="text-2xl mt-5 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-purple-400 bg-opacity-50">
                  ThinkAndSelect
                </h1>
                <div className=" p-1 m-1 text-white">
                  <p className="text-xl font-medium">Description : </p>
                  ThinkandSelect is an innovative quiz application designed to enhance learning with both practice and exam modes.
                  It allows users to earn certificates upon successful completion. With features like a Notes Section, Tutorial Section, and an online compiler supporting multiple programming languages,
                  it ensures a rich user experience.
                  <br></br>
                  <p className="text-xl font-medium">Technologies Used : </p>
                  Spring Boot, React.js, Tailwind CSS, and MySQL.
                </div>
                <div className="flex flex-row-reverse px-5">
                  <a
                    href="https://thinkandselect.vercel.app/"
                    target="_blank"
                  >
                    <button className="p-[3px] relative flex-row-reverse">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Know More
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Meaty part - Meteor effect */}
          </BackgroundGradient>
        </div>

        {/* //! second Project   */}

        <div className="px-3 md:px-10 py-10">
          <BackgroundGradient className="bg-slate-950 rounded-3xl m-1 ">
            <div className="flex flex-col">
              <div className="w-full h-full  p-[4%] rounded-3xl">
                <img
                  src={
                    "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800779/Portfolio/Projects/q838hahcn7xjb8cixwpf.png"
                  }
                  alt="Visiting"
                  className="bg-cover bg-center w-full m-1 rounded-2xl"
                />
              </div>

              <div className="w-full p-3 h-full">
                <h1 className="text-2xl mt-5 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-cyan-200 bg-opacity-50">
                  Visiting-Place
                </h1>
                <div className=" p-1 m-1 text-white">
                  <p className="text-xl font-medium">Description : </p>Picture a
                  modern website dedicated to showcasing temples from around the
                  world. it offers detailed
                  information about these places of worship. The site includes
                  interactive maps, user reviews, and personalized profiles,
                  making it easy and enjoyable for visitors to discover and
                  learn about different temple destinations worldwide.
                  <br></br>
                  <p className="text-xl font-medium">Technologies Used : </p>
                  Html,Bootstrap-5,Express-js,node-js,Mongodb.
                </div>
                <div className="flex flex-row-reverse px-5">
                  <a
                    href="https://visiting-place.onrender.com/"
                    target="_blank"
                  >
                    <button className="p-[3px] relative flex-row-reverse">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Know More
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Meaty part - Meteor effect */}
          </BackgroundGradient>
        </div>

        {/* //! Third Project */}

        <div className="px-3 md:px-10 py-10">
          <BackgroundGradient className="bg-slate-950 rounded-3xl m-1 ">
            <div className="flex flex-col">
              <div className="w-full h-full  p-[4%] rounded-3xl">
                <img
                  src={
                    "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800782/Portfolio/Projects/sc1uvfm8lvycad5rcsuc.png"
                  }
                  alt="Task"
                  className="bg-cover bg-center w-full m-1 rounded-3xl"
                />
              </div>

              <div className="w-full p-3 h-full">
                <h1 className="text-2xl mt-5 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-sky-300 bg-opacity-50">
                  Task-Fusion
                </h1>
                <div className=" p-1 m-1 text-white">
                  <p className="text-xl font-medium">Description : </p>
                  Task-Fusion improves workflow by organizing tasks efficiently,
                  boosting productivity. It also promotes streamlined
                  communication within the organization through collaborative
                  features.
                  <br></br>
                  <p className="text-xl font-medium">Technologies Used : </p>
                  Php,Css,JavaScript,Sql.
                </div>
                <div className="flex flex-row-reverse px-5">
                  <a
                    href="https://github.com/ManishPatidar806/Task-Fusion"
                    target="_blank"
                  >
                    <button className="p-[3px] relative flex-row-reverse">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Know More
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Meaty part - Meteor effect */}
          </BackgroundGradient>
        </div>

        {/* //! Fourth Project   */}

        <div className="px-3 md:px-10 py-10">
          <BackgroundGradient className="bg-slate-950 rounded-3xl m-1 ">
            <div className="flex flex-col">
              <div className="w-full h-full  p-[4%] rounded-3xl">
                <img
                  src={
                    "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800783/Portfolio/Projects/ybezb7hvculqhngzquyf.png"
                  }
                  alt="Chatter"
                  className="bg-cover bg-center w-full m-1 rounded-3xl"
                />
              </div>

              <div className="w-full p-3 h-full">
                <h1 className="text-2xl mt-5 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-blue-800 bg-opacity-50">
                  Chatter-Box
                </h1>
                <div className=" p-1 m-1 text-white">
                  <p className="text-xl font-medium">Description : </p>
                  Chatter-Box uses AI to understand and respond, built with
                  React.js for user-friendly interaction. Inspired by Google
                  Duplex, it offers advanced technology for seamless computer
                  conversations, designed for easy use.
                  <br></br>
                  <p className="text-xl font-medium">Technologies Used : </p>
                  Reactjs,Css,Google Api
                </div>
                <div className="flex flex-row-reverse px-5">
                  <a
                    href="https://github.com/ManishPatidar806/Chatter-Box"
                    target="_blank"
                  >
                    <button className="p-[3px] relative flex-row-reverse">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Know More
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Meaty part - Meteor effect */}
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
}
