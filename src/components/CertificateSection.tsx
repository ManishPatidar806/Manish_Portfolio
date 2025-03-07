"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function CertificateSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.06] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Certificates
      </h1>
      <br></br>

      <InfiniteMovingCards
        items={Certificates}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const Certificates = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "ApnaCollege",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720443325/Portfolio/Certificate/cd29ix309isra5tgbo80.png",
  },

  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Spark2.0",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735220442/Portfolio/Certificate/lmdeae3obtzawm0r3cpm.png",
  },

  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "HackerRank",
    title: "Moby-Dick",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1725105660/Portfolio/Certificate/r1wcwbrthcqnjegrmddd.png",
  },

  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Unstop Compitition",
    title: "Moby-Dick",
    image: " https://res.cloudinary.com/dps3eybtx/image/upload/v1735219375/Portfolio/Certificate/c1b0nizxswancgnmtvqz.jpg",
  },

  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Bharat_Intern",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720443301/Portfolio/Certificate/owwlt8yhiqk7ho62rgfv.png",
  },


  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Internal",
    title: "Pride and Prejudice",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720443311/Portfolio/Certificate/ywgsxezsbxjcztb6ghar.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Internal-SIH",
    title: "Pride and Prejudice",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735220740/Portfolio/Certificate/eb77kkk2fuq7zryxtkx8.png",
  },


  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "simplelearn",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1725105668/Portfolio/Certificate/rtzsxtwshdzzmtjfojck.png",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "SQL Database",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735220437/Portfolio/Certificate/qpowppazpl23elqteu4b.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Amazon",
    title: "Pride and Prejudice",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1725105640/Portfolio/Certificate/rivl1ueziascimd53bch.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Fortinet",
    title: "Moby-Dick",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720443306/Portfolio/Certificate/fias5kv72tbnmqawvtla.png",
  },

  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Udemy",
    title: "Hamlet",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1720443319/Portfolio/Certificate/juzkrwasfpxgqocyfc3s.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "SqlINjectionAttack",
    title: "A Dream Within a Dream",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735219353/Portfolio/Certificate/novvozrdjrrmqco1zhai.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "MakeINHouse",
    title: "A Dream Within a Dream",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735219371/Portfolio/Certificate/agwm4onjfoopswe2wosl.png",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Cisco-Networking",
    title: "A Tale of Two Cities",
    image: "https://res.cloudinary.com/dps3eybtx/image/upload/v1735220427/Portfolio/Certificate/cv1k03nsvciu7kxax3dt.png",
  },


];
