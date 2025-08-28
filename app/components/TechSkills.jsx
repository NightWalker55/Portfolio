import React from "react";
import Image from "next/image";

const TechSkills = ({ id, name, img }) => {
  return (
    <div className="flex flex-col items-center opacity-90">
      <div
        className="relative w-[100px] h-[100px] overflow-hidden rounded-full bg-black transition-transform duration-300 ease-in-out transform hover:scale-110"
        key={id}
      >
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>
      <h3 className="text-center mt-3 text-white font-medium">{name}</h3>
    </div>
  );
};

export default TechSkills;
