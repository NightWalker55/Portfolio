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
      <ul className="grid justify-center grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
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
      <ul className="list-disc pl-2">
        <li>Chittagong University of Engineering and Technology</li>
        <li>CGPA- 3.52/4</li>
      </ul>
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
          <div className="flex flex-row justify-start mt-8">
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

