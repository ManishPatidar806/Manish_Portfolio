"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export default function SkillSection() {
  return (
    <div className="max-w-full  mx-auto px:0 sm:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Skills
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    name: "Java",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/h0pjip6cq0y5zcclm3o8.png",
  },
  {
    name: "Python",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/jdyre68r97bqmysjcs50.png",
  },
  {
    name: "C++",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/fjt3c4w44t1yk6ap5dcw.png",
  },
  {
    name: "Html",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439537/Portfolio/Skills/rozctvsffno6muhmbsas.png",
  },
  {
    name: "Css",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/h3ntq3jymo0mjsxn82in.png",
  },
  {
    name: "JavaScript",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/pgpwtm7ccdobftwrfqjz.png",
  },
  {
    name: "Bootstrap",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/c0hii1rnwpc8rht0e19p.png",
  },
  {
    name: "Tailwind",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/arzvmbrdvwhojz32pf6q.png",
  },
  {
    name: "React",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/refxsjalcznio3tt6hvo.png",
  },
  {
    name: "NextJS",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745644860/Portfolio/Skills/NextJS_ktzjto.png"

  },
  {
    name: "Spring",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745644495/Portfolio/Skills/Spring-boot_siqway.png"

  },
  {
    name: "Spring-boot",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745665480/Portfolio/Skills/Spring-boot1_feugqg.png"

  },

  {
    name: "NodeJS",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/zuojdht816ozhh3gy6u8.png",
  },
  {
    name: "Express",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/wdddquypgdyi4koidsdg.png",
  },

  {
    name: "Hibernate",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745644585/Portfolio/Skills/Hibernate_lwyl7f.png"

  },
  {
    name: "MySQL",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/jddgfwmxgzoeexyhyvcr.png",
  },


  {
    name: "PostgreSQL",
    link: " https://res.cloudinary.com/dps3eybtx/image/upload/v1745664787/Portfolio/Skills/PostGrace_sdahdx.png",
  },
  {
    name: "MongoDB",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/xkcyi0gujo8exfa7nndy.png",
  },
  {
    name: "MicroServices",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745665510/Portfolio/Skills/Microservice_pp1mdg.png",
  },
  {
    name: "Maven",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1745665963/Portfolio/Skills/Maven_1_gt3xnd.png",
  },
  {
    name: "NPM",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/baollwmq0qckdrylc9o3.png",
  },
  {
    name: "Git",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/apqmgctipjdp6zlcj0gj.png",
  },
  {
    name: "vscode",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/fbmp8midzatzdudfkz7h.png",
  },
  // {name:"Apache",
  //   link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/c6lryt6npgiviu97fgwe.png",
  // },
  {
    name: "IntelliJ",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/cvepgbh8z9iw2nkllcmv.png",
  },

  {
    name: "Linux",
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/bzb6ddvengdlf1dr1n8q.png",
  },
];
