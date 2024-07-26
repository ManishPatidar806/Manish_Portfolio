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
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/h0pjip6cq0y5zcclm3o8.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/fjt3c4w44t1yk6ap5dcw.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439537/Portfolio/Skills/rozctvsffno6muhmbsas.png",
  },
  
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/h3ntq3jymo0mjsxn82in.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/pgpwtm7ccdobftwrfqjz.png",
  },
  
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/c0hii1rnwpc8rht0e19p.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/arzvmbrdvwhojz32pf6q.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/refxsjalcznio3tt6hvo.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/zuojdht816ozhh3gy6u8.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/baollwmq0qckdrylc9o3.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/wdddquypgdyi4koidsdg.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/jddgfwmxgzoeexyhyvcr.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439534/Portfolio/Skills/xkcyi0gujo8exfa7nndy.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/jdyre68r97bqmysjcs50.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439536/Portfolio/Skills/fbmp8midzatzdudfkz7h.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/c6lryt6npgiviu97fgwe.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/cvepgbh8z9iw2nkllcmv.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439535/Portfolio/Skills/apqmgctipjdp6zlcj0gj.png",
  },
  {
    link: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720439533/Portfolio/Skills/bzb6ddvengdlf1dr1n8q.png",
  },
];
