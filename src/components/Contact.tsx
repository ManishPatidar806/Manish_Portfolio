"use client";
import React from "react";
import { Vortex } from "./ui/vortex";

export function Contact() {
  return (
    <div className="w-[calc(100%)] px-0 rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center  sm:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         Know more about us!
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="https://www.linkedin.com/in/manishpatidar1180/" target="_blank"> <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            LinkedIn
          </button></a>
         

          {/* //! Button 2 */}
          <a href="https://github.com/ManishPatidar806" target="_blank">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                GithubProfile
              </span>
            </button>
          </a>

          {/* //! Button 3 */}
          <a href="https://leetcode.com/u/manishpatidar806/" target="_blank">
            <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">LeetCode</span>
            </button>
          </a>
        </div>
      </Vortex>
    </div>
  );
}
