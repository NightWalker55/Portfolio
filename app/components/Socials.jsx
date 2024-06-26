"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Socials = () => {
  
  return (
    <section id="contact"  className="my-10 lg:ml-[20px]">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/NightWalker55?tab=repositories">
            <Image src="/images/github-icon.svg" width={70} height={70} alt="Github Icon" />
          </Link>
          <Link href="www.linkedin.com/in/ayman-iktidar-11b30b175
">
            <Image src="/images/linkedin-icon.svg" width={70} height={70} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Socials;