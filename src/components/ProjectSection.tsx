"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projectData = [
  {
    name: "ThinkAndSelect",
    description:
      "ThinkandSelect is a quiz app offering practice and exam modes, certificates, notes, tutorials, and a multi-language online compiler",
    tools: "Spring Boot, React.js, Tailwind CSS, and MySQL.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1733925661/Portfolio/Projects/imfrwlhjtl6nkqbxx17q.png",
    link: "https://thinkandselect.vercel.app/"
  },
  {
    name: "GameingZone",
    description:
      "Gameingzone is a gaming e-commerce site using scalable microservices, offering payments, login, signup, cart, order history, and more.",
    tools: "ReactJS, Tailwind, Spring, Stripe, JWT, Mail, Flowbite, scalable architecture.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1741368261/Portfolio/Projects/Screenshot_from_2025-03-07_22-47-59_fg1iat.png",
    link: "https://thinkandselect.vercel.app/"
  },
  {
    name: "Visiting-Place",
    description:
      "A modern website showcasing temples worldwide, offering rich details, history, and insights into each sacred place for global exploration.",
    tools: "Html,Bootstrap-5,Express-js,node-js,Mongodb.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800779/Portfolio/Projects/q838hahcn7xjb8cixwpf.png",
    link: "https://visiting-place.onrender.com/"
  },
  {
    name: "Task-Fusion",
    description:
      "Task-Fusion is a task management app with a user-friendly interface, enabling users to create, update, and delete tasks efficiently.",
    tools: "S    Php,Css,JavaScript,Sql.",
    image:
      "https://res.cloudinary.com/dps3eybtx/image/upload/v1720800782/Portfolio/Projects/sc1uvfm8lvycad5rcsuc.png",
    link: "https://github.com/ManishPatidar806/Task-Fusion"
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
              >
                {project.tools}
              </CardItem>


              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white border border-neutral-300 dark:border-neutral-600"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
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