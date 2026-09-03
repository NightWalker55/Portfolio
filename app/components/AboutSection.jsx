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
    <div className="max-w-5xl mx-auto mt-10">
      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent" />

        {[
          {
            degree: "Bachelor of Science in Computer Science",
            institution:
              "Chittagong University of Engineering and Technology",
            period: "2019 — 2024",
            result: "CGPA 3.52 / 4.00",
            description:
              "Focused on computer science fundamentals, software engineering, machine learning, data structures, algorithms, and intelligent systems.",
          },
          {
            degree: "Higher Secondary Certificate — Science",
            institution: "Chittagong College",
            period: "2016 — 2018",
            result: "GPA 5.00 / 5.00",
            description:
              "Completed higher secondary education with a focus on science and mathematics.",
          },
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative mb-8 pl-14"
          >
            {/* Timeline point */}
            <div className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full border-2 border-blue-400 bg-[#111] shadow-[0_0_15px_rgba(59,130,246,0.35)]" />

            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                    {edu.period}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {edu.institution}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300">
                  {edu.result}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),
},
{
  title: "Research",
  id: "research",
  content: (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
      {[

{
  number: "01",
  category: "ENERGY SYSTEMS · DATA-DRIVEN RESEARCH",
  title: "Techno-Economic Assessment of Community Battery Participation in Energy and FCAS Markets with Customer Cost Reduction",
  description:
    "A techno-economic assessment of community battery participation in energy and frequency control ancillary services (FCAS) markets, focusing on customer cost reduction and the economic value of battery participation.",
  tags: ["Techno-Economic Analysis", "Battery Systems", "FCAS Markets"],
  venue: "Energies · 2026",
  type: "Journal Article",
  link: "https://www.mdpi.com/1996-1073/19/2/445",
},
        {
          number: "02",
          category: "NATURAL LANGUAGE PROCESSING",
          title: "Automatic Bangla Punctuation Prediction Model",
          description:
            "Developed a transformer-based approach for automatically predicting punctuation marks in Bangla text, focusing on improving punctuation restoration for the Bangla language.",
          tags: ["Bangla NLP", "Transformers", "Text Classification"],
          venue: "ICEEICT 2024",
          type: "Conference Paper",
          link: "https://ieeexplore.ieee.org/abstract/document/10534556",
        },
        {
          number: "03",
          category: "MULTIMODAL AI",
          title: "Multimodal Bangla Cyberbullying Meme Detection",
          description:
            "Developed a multimodal cyberbullying detection approach combining linguistic and visual information from Bengali memes to identify harmful social media content.",
          tags: ["BanglaBERT", "ViT", "Multimodal AI"],
          venue: "ICCIT 2024",
          type: "Conference Paper",
          link: "https://ieeexplore.ieee.org/abstract/document/11021800",
        },
      ].map((res, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: idx * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717] p-7 transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
        >
          {/* Subtle background number */}
          <div className="pointer-events-none absolute -right-4 -top-8 text-[120px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-blue-400/[0.06]">
            {res.number}
          </div>

          {/* Top accent line */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />

          {/* Header */}
          <div className="relative z-10 mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.18em] text-blue-400">
              RESEARCH / {res.number}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
              {res.type}
            </span>
          </div>

          {/* Category */}
          <p className="relative z-10 mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            {res.category}
          </p>

          {/* Title */}
          <h3 className="relative z-10 max-w-xl text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-blue-300">
            {res.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400">
            {res.description}
          </p>

          {/* Research tags */}
          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {res.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-gray-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="relative z-10 mt-7 flex items-end justify-between border-t border-white/10 pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                Published at
              </p>
              <p className="mt-1 text-sm font-medium text-gray-300">
                {res.venue}
              </p>
            </div>

            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-400/[0.06] px-4 py-2.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-400/10 hover:text-blue-200"
            >
              <span>View Paper</span>

              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  ),
},
{
  title: "Experience",
  id: "experience",
  content: (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent" />

        {[
          {
            role: "Lecturer",
            organization: "Chittagong Independent University",
            period: "Jan 2025 — Present",
            description:
              "Teaching undergraduate computer science courses while contributing to academic activities, student supervision, and research-oriented initiatives.",
            tag: "ACADEMIA",
          },
          {
            role: "Adjunct Lecturer",
            organization: "International Islamic University Chittagong",
            period: "Sept 2024 — Dec 2024",
            description:
              "Delivered undergraduate courses in computer science and supported students through laboratory work and academic projects.",
            tag: "ACADEMIA",
          },
          {
            role: "Industrial Attachment Intern",
            organization: "New Technology Systems Ltd",
            period: "Sept 2023 — Oct 2023",
            description:
              "Gained practical exposure to software development practices and professional engineering workflows.",
            tag: "INDUSTRY",
          },
          {
            role: "Competitive Programming Trainer",
            organization: "CUET Computer Club",
            period: "July 2023 — Mar 2024",
            description:
              "Mentored students in problem solving, algorithms, data structures, and competitive programming.",
            tag: "MENTORING",
          },
        ].map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            className="relative mb-8 pl-14"
          >
            <div className="absolute left-[11px] top-2 flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/50 bg-[#111]">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>

            <div className="group rounded-2xl border border-white/10 bg-[#171717] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-400">
                    {exp.tag}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {exp.organization}
                  </p>
                </div>

                <span className="text-xs text-gray-500">
                  {exp.period}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),
},
{
  title: "Achievements",
  id: "achievements",
  content: (
    <div className="max-w-5xl mx-auto mt-12">

      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
          Recognition & Milestones
        </p>

        <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Moments worth remembering.
        </h3>
      </div>

      {/* Achievement Timeline */}
      <div className="relative">

        {/* Timeline */}
        <div className="
          absolute left-[7px] top-2 bottom-2
          w-px
          bg-gradient-to-b
          from-blue-400/60
          via-white/10
          to-transparent
        " />

        {[
          {
            year: "2025",
            label: "ROBOTICS",
            title: "Judge — World Robot Olympiad",
            description:
              "Served as a regional judge evaluating robotics projects and innovative solutions.",
          },
          {
            year: "2024",
            description: "Received second best paper award 6th International Conference on Electrical Engineering and Information \& Communication Technology (ICEEICT)",
            color: "from-blue-400 to-blue-600",
            label: "RESEARCH",
            title: "Second Best Paper Award",
            description:
              "Recognized at ICEEICT 2024 for research on automatic punctuation prediction for the Bangla language.",
          },
        ].map((achievement, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            className="relative pl-10 pb-10 last:pb-0"
          >

            {/* Timeline Node */}
            <div className="
              absolute left-0 top-1
              flex h-[15px] w-[15px]
              items-center justify-center
              rounded-full
              border border-blue-400/50
              bg-[#111]
            ">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>

            {/* Content */}
            <div className="
              group relative
              rounded-xl
              border border-white/10
              bg-white/[0.015]
              px-6 py-6
              transition-all duration-300
              hover:border-blue-400/25
              hover:bg-white/[0.025]
            ">

              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <span className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                ">
                  {achievement.label}
                </span>

                <span className="
                  text-sm
                  font-light
                  tracking-wider
                  text-white/30
                  transition-colors duration-300
                  group-hover:text-blue-400/60
                ">
                  {achievement.year}
                </span>

              </div>

              {/* Title */}
              <h3 className="
                mt-5
                text-xl md:text-2xl
                font-semibold
                tracking-tight
                text-white
                transition-colors duration-300
                group-hover:text-blue-300
              ">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-gray-500
              ">
                {achievement.description}
              </p>

              {/* Arrow */}
              <span className="
                absolute right-6 bottom-6
                text-lg text-white/10
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-blue-400/60
              ">
                ↗
              </span>

            </div>

          </motion.article>
        ))}

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
   <section
  id="about"
  className="relative py-24 md:py-32 text-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-12
      lg:gap-16
      py-16
      md:py-20
    ">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-7"
      >
        <p className="
          text-xs
          uppercase
          tracking-[0.25em]
          text-blue-400
          mb-6
        ">
          Software · Research · AI
        </p>

        <h2 className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[4.8rem]
          font-medium
          leading-[1]
          tracking-[-0.055em]
          text-white
        ">
          I thrive for knowledge
          <br />

          <span className="text-gray-600">
            and explore intelligence.
          </span>
        </h2>
      </motion.div>


    </div>


    {/* INFORMATION STRIP */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        border-y
        border-white/[0.08]
      "
    >

      <div className="px-5 py-6 md:px-7 border-r border-white/[0.08]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
          Focus
        </p>

        <p className="mt-2 text-sm text-gray-300">
          AI & Research
        </p>
      </div>

      <div className="px-5 py-6 md:px-7 md:border-r border-white/[0.08]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
          Development
        </p>

        <p className="mt-2 text-sm text-gray-300">
          Full Stack
        </p>
      </div>

      <div className="px-5 py-6 md:px-7 border-r border-white/[0.08]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
          Interests
        </p>

        <p className="mt-2 text-sm text-gray-300">
          NLP · CV · DL
        </p>
      </div>

    

    </motion.div>


    {/* TABS */}
    <div className="mt-14">

      <div className="
        flex
        flex-wrap
        items-center
        gap-2
        p-1
        w-fit
        rounded-full
        bg-white/[0.035]
        border
        border-white/[0.07]
      ">

        {TAB_DATA.map((t) => {
          const active = tab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className={`
                relative
                px-6
                py-2.5
                rounded-full
                text-[11px]
                tracking-[0.12em]
                uppercase
                transition-all
                duration-300

                ${
                  active
                    ? "bg-white text-black"
                    : "text-gray-500 hover:text-white"
                }
              `}
            >
              {t.title}
            </button>
          );
        })}

      </div>

    </div>


    {/* TAB CONTENT */}
    <motion.div
      key={tab}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-14"
      ref={tab === "skills" ? skillsRef : null}
    >
      {tab === "skills"
        ? TAB_DATA.find((t) => t.id === tab).content(isSkillsInView)
        : TAB_DATA.find((t) => t.id === tab).content}
    </motion.div>

  </div>
</section>
  );
};

export default AboutSection;
