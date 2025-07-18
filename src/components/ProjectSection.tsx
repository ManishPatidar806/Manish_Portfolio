"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { link } from "fs";

const projectData = [
  {
    name: "ThinkAndSelect",
    description:
      "ThinkandSelect is a quiz app offering practice and exam modes, certificates, notes, tutorials, and a multi-language online compiler",
    tools: "Spring Boot, React.js, Tailwind CSS, and MySQL.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1733925661/Portfolio/Projects/imfrwlhjtl6nkqbxx17q.png",
    link: "https://thinkandselect.vercel.app/",
    sourceLink:"https://github.com/ManishPatidar806/ThinkAndSelect"
  },
  {
    name: "Tijori",
    description:
      "Tijor is an expense tracker mobile application that helps manage monthly expenses and generates a report at the end of the month.",
    tools: "Flutter,Spring Boot and MySQL.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1748719655/Portfolio/Projects/Screenshot_from_2025-06-01_00-56-26_px7dck.png",
    sourceLink:"https://github.com/ManishPatidar806/Tijori",
    demo:"https://youtu.be/wlA9ZibAPj8"
  },
  {
    name: "GameingZone",
    description:
      "Gameingzone is a scalable gaming e-commerce site using microservices, offering all features of e-commerce.",
    tools: "ReactJS, Tailwind CSS, Spring, Stripe, JWT, Mail, Flowbite, scalable architecture.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1741368261/Portfolio/Projects/Screenshot_from_2025-03-07_22-47-59_fg1iat.png",
    link: "https://gameingzone.vercel.app/",
    sourceLink:"https://github.com/ManishPatidar806/GameingZone_MicroService"
  },
  {
    name: "ShareBox",
    description:
      "ShareBox is a secure file-sharing system using AES-256 encryption, combining strong backend and modern frontend for seamless transfers.",
    tools: "NextJs,Tailwind CSS,Spring-boot,Sql.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1745666308/Portfolio/Projects/Screenshot_from_2025-04-26_12-00-54_kpaq9d.png",
    sourceLink: "https://github.com/ManishPatidar806/ShareBox",
    demo:"https://youtu.be/_lgZyj-ytDU"
  },
    {
    name: "SmartResponse",
    description:
      "Smart Response is a web app that uses Google’s Gemini AI to write professional email replies in various tones. It’s built with Spring Boot and React, featuring a clean, modern design.",
    tools: "React Js, Tailwind CSS, Spring-boot, Spring Ai.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1752865924/Portfolio/Projects/Screenshot_from_2025-07-02_18-16-52_phzbbp.png",
    sourceLink: "https://github.com/ManishPatidar806/SmartResponse",
    demo:"https://youtu.be/YMxtUCDyShw?si=_3y6MhD_kCILRp9Q"
  },
  {
    name: "Visiting-Place",
    description:
      "A modern website showcasing temples worldwide, offering rich details, history, and insights into each sacred place for global exploration.",
    tools: "Html,Bootstrap-5,Express-js,node-js,Mongodb.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800779/Portfolio/Projects/q838hahcn7xjb8cixwpf.png",
    link: "https://visiting-place.onrender.com/",
    sourceLink:"https://github.com/ManishPatidar806/Visiting-Place"
  },

];

export function ProjectSection() {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projectData.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border"
            >
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.name}
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm sm:text-base max-w-full mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm sm:text-base max-w-full mt-2 dark:text-neutral-300"
              > <p className="dark:text-md dark:text-green-500">TechStack:</p> {project.tools}

              </CardItem>


              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8">
                {project.link ? <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white border border-neutral-300 dark:border-neutral-600"
                >
                  Try now →
                </CardItem> : 
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.demo}
                  target="__blank"
                  className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white border border-neutral-300 dark:border-neutral-600"
                >
                  Demo →
                </CardItem>
                }
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.sourceLink}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
                >
                  Source-Code
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}