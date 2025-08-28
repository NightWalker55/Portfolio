"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left Side - Text */}
          <div className="col-span-1 md:col-span-7 text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I am
              </span>
              <br />
              <span className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                Ayman Iktidar
              </span>
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto md:mx-0 leading-relaxed">
              A research enthusiast and software developer with a thirst for knowledge and emerging technologies. Passionate about building impactful applications while exploring the frontiers of AI and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white shadow-lg transition duration-300">
                Hire Me
              </button>
              <a href="/CV/CV.pdf" download>
                <button className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium border border-purple-500 hover:bg-purple-600 hover:text-white text-purple-400 transition duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-56 h-60 sm:w-64 sm:h-68 md:w-72 md:h-80 lg:w-80 lg:h-88 max-w-full">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

              {/* Profile image */}
              <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden shadow-2xl ring-2 ring-purple-500/30">
                <Image
                  src="/images/port_image.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 70vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
