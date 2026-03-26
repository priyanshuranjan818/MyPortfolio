"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import {
  CLOUD_PLATFORMS,
  DEVOPS_TOOLS,
  MONITORING_SCRIPTING,
  SOFT_SKILLS,
} from "@/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Animated skill icon with hover lift + glow
const SkillIcon = ({
  src,
  name,
  width,
  height,
  index,
}: {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 120 }}
      whileHover={{ y: -8, scale: 1.15 }}
      className="flex flex-col items-center gap-2 cursor-pointer group"
    >
      <div className="relative p-3 rounded-xl border border-[#7042f830] bg-[#0f0728]/40 group-hover:border-[#7042f8aa] group-hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] transition-all duration-300">
        <Image
          src={`${basePath}/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="drop-shadow-lg"
        />
      </div>
      <span className="text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-medium">
        {name}
      </span>
    </motion.div>
  );
};

// Category label
const CategoryLabel = ({ label, delay }: { label: string; delay: number }) => (
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-widest mb-4 mt-8 w-full text-center"
  >
    {label}
  </motion.h3>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      {/* Header with animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-auto flex flex-col items-center justify-center"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Cloud &amp; DevOps Engineering</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          Building &amp; automating cloud infrastructure.
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Continuous integration, continuous delivery, infinite scale.
        </motion.div>
      </motion.div>

      {/* Skills grid */}
      <div className="w-full max-w-5xl px-6 flex flex-col items-center">
        <CategoryLabel label="☁️ Cloud Platforms" delay={0.1} />
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {CLOUD_PLATFORMS.map((skill, i) => (
            <SkillIcon
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <CategoryLabel label="🛠️ DevOps Tools" delay={0.2} />
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {DEVOPS_TOOLS.map((skill, i) => (
            <SkillIcon
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <CategoryLabel label="📊 Monitoring & Scripting" delay={0.3} />
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {MONITORING_SCRIPTING.map((skill, i) => (
            <SkillIcon
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        {/* Soft Skills */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mt-16 mb-8"
        >
          Soft Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {SOFT_SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-b from-[#7042f8] via-[#7042f83b] to-transparent hover:from-[#7042f8] hover:via-[#7042f8aa] hover:to-[#00d4ff55] transition-all duration-500"
            >
              <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#030014] py-8 px-4 h-full group-hover:bg-[#0a0025] transition-colors duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-5xl z-10 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(112,66,248,0.5)]">
                  {skill.icon}
                </span>
                <span className="text-gray-300 text-base font-semibold text-center z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay>
            <source src={`${basePath}/videos/skills-bg.webm`} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
