import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative group transition-transform transform hover:scale-105 duration-300 shadow-lg rounded-lg overflow-hidden cursor-pointer">
      {/* Image Section */}
      <div
        className="h-48 md:h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {/* Overlay with icons */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Link
            href={gitUrl}
            className="h-10 w-10 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center hover:bg-[#ADB7BE] transition-all duration-300 mr-2"
          >
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center hover:bg-[#ADB7BE] transition-all duration-300"
          >
            <EyeIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#2a2a2a] p-4 rounded-b-lg">
        <h5 className="text-lg font-bold mb-2 text-white text-center hover:text-[#ADB7BE] transition-colors duration-300">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-center text-sm">{description}</p>
      </div>
      
      {/* Additional Aesthetic Features */}
      <div className="absolute inset-0 border-2 border-[#ADB7BE] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProjectCard;
