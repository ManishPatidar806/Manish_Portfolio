import React, { useState } from "react";

function Navbar() {
  return (
    <div className="relative  inset-x-0 max-w-2xl mx-auto z-50 ">
      <nav
        className="relative top-5 left-1/2 -translate-x-1/2 w-full max-w-md 
      py-4 bg-slate-950 rounded-full flex justify-center invisible  lg:visible"
      >
        <ul className="flex items-center ">
          <li className="px-3">
            <a href="#" className="text-gray-200 hover:text-white">
              Home
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="text-gray-200 hover:text-white">
              About
            </a>
          </li>
          <li className="px-3">
            <a href="#" className="text-gray-200 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
