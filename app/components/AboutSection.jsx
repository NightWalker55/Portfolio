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
  { id: 5, name: "GO", img: "/images/go.jpg" },
  { id: 6, name: "Pytorch", img: "/images/torch.png" },
];

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (isSkillsInView) => (
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {techSkills.map((skills, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isSkillsInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <TechSkills name={skills.name} img={skills.img} />
          </motion.li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="max-w-5xl mx-auto mt-12 space-y-8">
        {[
          {
            title: "Chittagong University of Engineering and Technology",
            subtitle: "B.Sc. in CSE",
            gpa: "CGPA: 3.52 / 4.0",
            color: "border-blue-500",
           
          },
          {
            title: "Chittagong College",
            subtitle: "Higher Secondary in Science",
            gpa: "GPA: 5.0 / 5.0",
            color: "border-green-500",
           
          },
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative flex items-center bg-[#1E1E1E] p-6 rounded-2xl shadow-2xl hover:shadow-3xl border-l-8 transition-transform transform hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="absolute -left-8 text-3xl">{edu.icon}</div>
            <div>
              <h3 className="text-white font-bold text-lg">{edu.title}</h3>
              <p className="text-gray-400">{edu.subtitle}</p>
              <p className="text-gray-200 font-semibold">{edu.gpa}</p>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Research",
    id: "research",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Automatic Bangla Punctuation Prediction Model",
            description:
              "Developed a transformer-based model for automatic Bangla punctuation prediction.",
            link: "https://ieeexplore.ieee.org/abstract/document/10534556",
          },
          {
            title: "Multimodal Bangla Cyberbullying Meme Detection",
            description:
              "Cyberbullying detection model combining NLP and Computer Vision.",
            link: "https://link-to-your-research2.com",
          },
        ].map((res, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-white font-semibold text-lg">{res.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 mt-3 inline-block font-medium"
            >
              Read more
            </a>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="max-w-5xl mx-auto mt-12 space-y-10">
        {[
          {
            role: "Lecturer",
            org: "Chittagong Independent University",
            duration: "Jan 2025 - Ongoing",
            color: "from-blue-500 to-blue-700",
          },
          {
            role: "Adjunct Lecturer",
            org: "International Islamic University Chittagong",
            duration: "Sept 2024 - Ongoing",
            color: "from-green-400 to-green-600",
          },
          {
            role: "Industrial Attachment Intern",
            org: "New Technology Systems Ltd",
            duration: "Sept 2023 - Oct 2023",
            color: "from-purple-400 to-purple-600",
          },
          {
            role: "Competitive Programming Trainer",
            org: "Cuet Computer Club",
            duration: "July 2023 - Mar 2024",
            color: "from-pink-400 to-pink-600",
          },
        ].map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            
            <div
              className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} shadow-lg z-10 flex items-center justify-center text-white font-bold`}
            >
              {idx + 1}
            </div>
  
            {/* Card */}
            <div className="relative bg-[#1E1E1E] p-6 pt-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-transform transform hover:-translate-y-2">
              <h3 className="text-white font-bold text-lg">{exp.role}</h3>
              <p className="text-gray-400 text-sm">{exp.org}</p>
              <p className="text-gray-200 font-semibold">{exp.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div className="max-w-5xl mx-auto mt-12 relative">
        {/* Vertical line */}
        <div className="absolute left-10 top-0 h-full border-l-2 border-gray-700"></div>
  
        {[
          {
            title: "Judge - World Robot Olympiad (Regional Round)",
            year: "2025",
            description: "Served as a regional judge evaluating participants’ robots and innovative solutions.",
            color: "from-purple-400 to-purple-600",
          },
          {
            title: "Best Paper Award",
            year: "2024",
            description: "Received second best paper award 6th International Conference on Electrical Engineering and Information \& Communication Technology (ICEEICT)",
            color: "from-blue-400 to-blue-600",
          },
          // add more achievements here
        ].map((ach, idx) => (
          <motion.div
            key={idx}
            className="relative flex items-start mb-12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Circle badge */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${ach.color} flex items-center justify-center text-white font-bold z-10`}>
              {idx + 1}
            </div>
  
            {/* Card */}
            <div className="ml-6 bg-[#1E1E1E] p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-transform transform hover:-translate-y-2 flex-1">
              <h3 className="text-white font-bold text-lg">{ach.title}</h3>
              <p className="text-gray-400 text-sm">{ach.year}</p>
              <p className="text-gray-200 mt-2">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  }
  
  
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
    <section className="text-white py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
        I am a research enthusiast and passionate software developer with experience in building
           interactive and responsive applications. Alongside my development expertise in GO,NextJs, 
           React, Redux, Node.js, Express and Git, I have also been actively involved in various research 
           projects spanning deep learning,natural language processing, and computer vision technologies. 
           These experiences have strengthened my analytical thinking, problem-solving abilities, and curiosity 
           for exploring how research-driven innovations can be translated into real-world software solutions. 
           I am a quick learner, eager to expand my knowledge, and I thrive in collaborative environments where both research 
           and development come together to create impactful, high-quality outcomes.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              selectTab={() => handleTabChange(t.id)}
              active={tab === t.id}
            >
              {t.title}
            </TabButton>
          ))}
        </div>

        {/* Tab Content */}
        <div ref={tab === "skills" ? skillsRef : null}>
          {tab === "skills"
            ? TAB_DATA.find((t) => t.id === tab).content(isSkillsInView)
            : TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
