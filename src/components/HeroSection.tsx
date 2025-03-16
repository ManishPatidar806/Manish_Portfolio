"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
// import { Button } from "./ui/moving-border";
import { Tabs } from "./ui/tabs";
import { Lampsm } from "./ui/Lampsm";

export function HeroSection() {
  const tabs = [
    {
      title: "Description",
      value: " description",
      content: (
      

<div className="w-full overflow-hidden relative h-full rounded-2xl p-4  sm:p-10 text-xl md:text-4xl font-bold text-white bg-black">
<Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="white"
/>
<div className=" p-1 max-w-7xl  pl-3 relative z-10  w-full pt-1 md:pt-0">
  <h1 className="text-3xl md:text-7xl md:max-[250]:text-5xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
    Hi,<br></br>I&apos;m Manish Patidar,
  </h1>
  <p className="my-2 font-normal md:text-lg text-base text-neutral-100  min-w-9">
  A passionate full-stack developer with expertise in ReactJS for front-end development and Spring Boot for back-end. I specialize in creating scalable, efficient, and user-friendly applications. My journey in programming has been focused on continuous learning and growth. I have successfully worked on various projects, honing my skills in both front-end and back-end technologies, with a strong focus on microservice architecture. I am adept at building distributed systems that ensure flexibility and scalability, and I am always eager to explore new challenges and enhance my expertise.
  </p>
  <a
    href="https://drive.google.com/file/d/1fuqpXEMP6iXlLrgeX1x_pKgxt4vJh1-L/view?usp=sharing"
    target="_blank"
  >
    <button
      className=" relative inline-flex items-center 
    justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-black rounded-full group bg-gradient-to-br from-cyan-600 to-cyan-400 group-hover:from-cyan-600
     group-hover:to-cyan-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-500 dark:focus:ring-cyan-800"
    >
      <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
       dark:bg-slate-950 rounded-full group-hover:bg-opacity-0"
      >
        Download Now
      </span>
    </button>
  </a>
</div>
</div>
      ),
    },
    {
      title: "Profile",
      value: "profile",
      content: (
        <div className="w-full overflow-hidden border-red-600 relative h-full rounded-2xl p-0 sm:p-10 text-xl md:text-4xl font-bold text-white bg-black">
        <div className="w-full bg-black m-0 p-0">
          <Lampsm className="m-0 p-0">
            <img
              src="https://res.cloudinary.com/dps3eybtx/image/upload/v1721406425/Portfolio/photo/kxh82tlkxlthcn4wnrez.png"
              className="mt-16 bg-transparent h-52 w-52 rounded-full " alt="Profile_Image"
            ></img>
          </Lampsm>
        </div>
      </div>

      ),
    },
  ];

  return (
    <div>
      {/*//! For Left Side */}

      <div className="h-[40rem] w-full rounded-md lg:flex md:items-center md:justify-center bg-black/[0.96] antialiased  relative overflow-hidden invisible hidden  lg:visible">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  pl:3 xl:pl-20 2xl:pl-40 relative z-10  w-6/12 pt-20 md:pt-0">
          <h1 className="text-5xl xl:text-6xl  2xl:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi,<br></br>I&apos;m Manish Patidar,
          </h1>
          <p className="my-4 font-normal text-lg text-neutral-100  min-w-9">
          A passionate full-stack developer with expertise in ReactJS for front-end development and Spring Boot for back-end. I specialize in creating scalable, efficient, and user-friendly applications. My journey in programming has been focused on continuous learning and growth. I have successfully worked on various projects, honing my skills in both front-end and back-end technologies, with a strong focus on microservice architecture. I am adept at building distributed systems that ensure flexibility and scalability, and I am always eager to explore new challenges and enhance my expertise.
          </p>
          <a
            href="https://drive.google.com/file/d/1fuqpXEMP6iXlLrgeX1x_pKgxt4vJh1-L/view?usp=sharing"
            target="_blank"
          >
            <button
              className=" relative inline-flex items-center 
              justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-black rounded-full group bg-gradient-to-br from-cyan-600 to-cyan-400 group-hover:from-cyan-600
               group-hover:to-cyan-400 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-500 dark:focus:ring-cyan-800"
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                 dark:bg-slate-950 rounded-full group-hover:bg-opacity-0"
              >
                Download Now
              </span>
            </button>
          </a>
        </div>

        {/* //!For Right side */}
        <div className="w-6/12 bg-black ">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://res.cloudinary.com/dps3eybtx/image/upload/v1721406425/Portfolio/photo/kxh82tlkxlthcn4wnrez.png"
                className="bg-transparent h-52 w-52 rounded-full " alt="Profile_Image"
              ></img>
            </motion.h1>
          </LampContainer>
        </div>
      </div>

      <div className="sm:h-[40rem] h-[35rem] relative flex flex-col max-w-6xl mx-auto w-full  items-start justify-start my-10 mb-20 visible lg:hidden lg:invisible  ">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

//
