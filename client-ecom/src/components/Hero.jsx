// components/Hero.jsx
import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center"
      style={{
        backgroundImage:
          `url(${assets.hero})`,
      }}
    >

    </section>
  );
};

export default Hero;
