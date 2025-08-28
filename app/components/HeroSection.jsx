"use client"
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-24 lg:mt-8 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">

        {/* Left Side - Text */}
        <div className="col-span-7 text-center sm:text-left space-y-6">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-5xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am
            </span>
            <br />
            <span className="text-white text-4xl sm:text-4xl lg:text-4xl">
              Ayman Iktidar
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl max-w-xl mx-auto sm:mx-0 leading-relaxed">
            A research enthusiast and software developer with a thirst for knowledge and emerging technologies. Passionate about building impactful applications while exploring the frontiers of AI and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white shadow-lg transition duration-300">
              Hire Me
            </button>
            <a href="/CV/CV.pdf" download>
              <button className="px-6 py-3 rounded-full font-medium border border-purple-500 hover:bg-purple-600 hover:text-white text-purple-400 transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="col-span-5 flex justify-center sm:justify-end">
          <div className="relative w-[280px] h-[300px] lg:w-[320px] lg:h-[340px]">
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Profile image */}
            <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden shadow-2xl ring-2 ring-purple-500/30">
              <Image
                src="/images/port_image.jpeg"
                alt="Profile"
                width={320}
                height={340}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
