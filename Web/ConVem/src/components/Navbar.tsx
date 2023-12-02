import React from "react";
import { useState } from "react";

export const Navbar = () => {
  return (
    <nav className="bg-transparent border-b-4 border-[#edd05f]">
      <img src="../../src/assets/Hero.svg" />
      <div className="absolute top-2 left-4 ">
        <img src="../../src/assets/LogoNav.svg" height={100} width={80} />
      </div>
    </nav>
  );
};
