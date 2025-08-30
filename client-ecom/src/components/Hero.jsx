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
    
    {/* Overlay for readability
      <div className="absolute inset-0 bg-black/40"></div> */}
     

      {/* Content
      <div className="relative z-10 max-w-2xl px-8 md:px-16 text-left text-white">
        <h1 className="text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-indigo-400">MyStore</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Discover the best products at unbeatable prices. Clean, simple, and
          elegant shopping experience tailored just for you.
        </p>
        <a
          href="#products"
          className="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Shop Now
        </a>
      </div>  */}
    </section>
  );
};

export default Hero;
