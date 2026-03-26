"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stats = [
  { label: "Projects", value: "2+" },
  { label: "Certifications", value: "5+" },
  { label: "Technologies", value: "15+" },
];

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      {/* Section heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        About Me
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10 lg:gap-20">

        {/* Left: text + stats + buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="flex flex-col items-start justify-center text-gray-300 w-full lg:w-1/2 gap-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-justify leading-relaxed"
          >
            I am a passionate{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Cloud &amp; DevOps Engineer
            </span>{" "}
            dedicated to building scalable, resilient, and automated infrastructure. I specialize in
            designing and managing cloud architectures, streamlining CI/CD pipelines, and ensuring
            continuous delivery of high-quality software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-justify leading-relaxed"
          >
            With a strong foundation in modern DevOps practices, I am proficient in leveraging tools
            such as{" "}
            {["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"].map((tool, i) => (
              <span key={i} className="text-purple-400 font-medium">
                {tool}
                {i < 4 ? ", " : ""}
              </span>
            ))}
            . I thrive on solving complex operational challenges, optimizing performance, and securely
            deploying applications to production environments.
          </motion.p>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-row gap-6 mt-2"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="flex flex-col items-center justify-center px-5 py-4 rounded-xl border border-[#7042f88b] bg-[#0f0728]/60 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all duration-300"
              >
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-row items-center gap-4 mt-2"
          >
            <a
              href="mailto:priyanshuranjan818@gmail.com"
              className="py-2.5 px-6 text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(112,66,248,0.4)] hover:shadow-[0_0_25px_rgba(112,66,248,0.6)] hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-6 text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:bg-[#7042f84b] transition-all duration-300 hover:scale-105"
            >
              View CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile image with animated rings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.3)}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-purple-500/30"
            />
            {/* Middle pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-cyan-500/30"
            />

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(112,66,248,0.8)]" />
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative w-64 h-64 md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-[0_0_40px_rgba(112,66,248,0.4)]"
            >
              <Image
                src={`${basePath}/profile.png`}
                alt="Priyanshu Ranjan Profile Picture"
                width={350}
                height={350}
                className="rounded-full object-cover w-full h-full"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
