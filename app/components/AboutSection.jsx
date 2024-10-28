"use client";
import React, { useTransition, useState, useRef } from "react";
import TabButton from "./TabButton";
import TechSkills from "./TechSkills";
import { motion, useInView } from "framer-motion";

const techSkills = [
  { id: 1, name: "ReactJS", img: "/images/react.png" },
  { id: 2, name: "NextJS", img: "/images/next.jpg" },
  { id: 3, name: "NodeJS", img: "/images/node.png" },
  { id: 4, name: "NestJS", img: "/images/nest.png" },
  { id: 5, name: "MongoDB", img: "/images/mongo.jpg" },
  { id: 6, name: "Pytorch", img: "/images/torch.png" },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (isSkillsInView) => (
      <ul className="w-full grid justify-center grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {techSkills.map((skills, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isSkillsInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <TechSkills key={skills.id} name={skills.name} img={skills.img} />
          </motion.li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="w-full relative max-w-3xl mx-auto mt-16">
  
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-300 to-gray-500"></div>

  
  <div className="mb-16 flex items-center justify-center cursor-pointer">
    <div className="relative w-10/12 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-xl">1</span>
      </div>
      <h3 className="text-xl font-bold text-blue-600 mt-6">Chittagong University of Engineering and Technology</h3>
      <p className="text-sm text-gray-500 mb-1">Bachelor of Science in CSE</p>
      <p className="text-lg text-gray-800 font-semibold">CGPA: 3.52 / 4.0</p>
    </div>
  </div>

 
  <div className="mb-16 flex items-center justify-center cursor-pointer">
    <div className="relative w-10/12 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-xl">2</span>
      </div>
      <h3 className="text-xl font-bold text-green-600 mt-6">Chittagong College</h3>
      <p className="text-sm text-gray-500 mb-1">Higher Secondary Education in Science</p>
      <p className="text-lg text-gray-800 font-semibold">GPA: 5.0 / 5.0</p>
    </div>
  </div>
</div>



    ),
  },
  {
    title: "Research",
    id: "research",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <div className="bg-[#181818] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-white">Towards Developing an Automatic Punctuation Prediction Model for Bangla Language: A Pre-trained Mono-lingual Transformer-based Approach</h3>
        <p className="text-sm text-gray-400">An automatic Bangla punctuation prediction model that has been developed with the help of transformer models.</p>
        <a href="https://ieeexplore.ieee.org/abstract/document/10534556" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 mt-2 inline-block">
          Read more
        </a>
      </div>

      <div className="bg-[#181818] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-white">A Multimodal Approach to Bangla Cyberbullying
        Meme Detection in Social Media</h3>
        <p className="text-sm text-gray-400">A Cyberbullying multimodal detection model that combines the power of Computer Vision and NLP. </p>
        <a href="https://link-to-your-research2.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 mt-2 inline-block">
          Read more
        </a>
      </div>

      
    </div>
    ),
    
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="w-full relative max-w-3xl mx-auto mt-5">
     
    
     
      <div className="mb-8 flex items-start relative cursor-pointer">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 8h-6V3H9v5H3v11h18V8zm-3 11H6V10h12v9z"></path>
          </svg>
        </div>
        <div className="ml-4 w-full bg-white p-4 rounded-xl shadow-md transition-transform transform hover:shadow-lg">
          <h3 className="text-lg font-bold text-blue-600">Adjunct Lecturer</h3>
          <p className="text-xs text-gray-600">International Islamic University Chittagong</p>
          <p className="text-md text-gray-800 font-semibold">Sept 2024 - Ongoing</p>
        </div>
      </div>
    
      
      <div className="mb-8 flex items-start relative cursor-pointer">
        <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H5V5h14v14zM9 16h6v2H9zm0-3h6v2H9zm0-3h6v2H9zm-4-6h14v2H5z"></path>
          </svg>
        </div>
        <div className="ml-4 w-full bg-white p-4 rounded-xl shadow-md transition-transform transform hover:shadow-lg">
          <h3 className="text-lg font-bold text-green-600">Industrial Attachment Intern</h3>
          <p className="text-xs text-gray-600">New Technology Systems Ltd</p>
          <p className="text-md text-gray-800 font-semibold">Sept 2023 - Oct 2023</p>
        </div>
      </div>
    
     
      <div className="mb-8 flex items-start relative cursor-pointer">
        <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3l8 6h-3v9h-10v-9H4l8-6zm0 2.67L7.75 8h2.25v7h4V8h2.25L12 5.67z"></path>
          </svg>
        </div>
        <div className="ml-4 w-full bg-white p-4 rounded-xl shadow-md transition-transform transform hover:shadow-lg">
          <h3 className="text-lg font-bold text-purple-600">Competitive Programming Trainer</h3>
          <p className="text-xs text-gray-600">Cuet Computer Club</p>
          <p className="text-md text-gray-800 font-semibold">July 2023 - Mar 2024</p>
        </div>
      </div>
    
      
      
    </div>
    


    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/about-image.png" className="lg:mb-[130px]" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git. 
            I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("research")}
              active={tab === "research"}
            >
              {" "}
              Research{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8" ref={tab === "skills" ? skillsRef : null}>
            {tab === "skills"
              ? TAB_DATA.find((t) => t.id === tab).content(isSkillsInView)
              : TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;

