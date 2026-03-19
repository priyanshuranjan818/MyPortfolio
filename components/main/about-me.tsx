"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        About Me
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10 lg:gap-20">
        {/* Left text column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex flex-col items-start justify-center text-gray-300 w-full lg:w-1/2"
        >
          <p className="text-base md:text-lg mb-4 text-justify leading-relaxed">
            I am a passionate <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Cloud & DevOps Engineer</span> dedicated to building scalable, resilient, and automated infrastructure. I specialize in designing and managing cloud architectures, streamlining CI/CD pipelines, and ensuring continuous delivery of high-quality software.
          </p>
          <p className="text-base md:text-lg mb-6 text-justify leading-relaxed">
            With a strong foundation in modern DevOps practices, I am proficient in leveraging tools such as <span className="text-purple-400 font-medium">AWS</span>, <span className="text-purple-400 font-medium">Docker</span>, <span className="text-purple-400 font-medium">Kubernetes</span>, <span className="text-purple-400 font-medium">Terraform</span>, and <span className="text-purple-400 font-medium">Jenkins</span>. I thrive on solving complex operational challenges, optimizing performance, and securely deploying applications to production environments.
          </p>

          <div className="flex flex-row items-center gap-5 mt-4">
            <a
              href="mailto:priyanshuranjan818@gmail.com"
              className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:bg-[#7042f84b] transition"
            >
              Get In Touch
            </a>
            <a
              href="#" /* Placeholder for Google Drive link */
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:bg-[#7042f84b] transition"
            >
              View CV
            </a>
          </div>
        </motion.div>

        {/* Right profile image column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-[0_0_30px_rgba(112,66,248,0.3)] flex items-center justify-center p-2 bg-gradient-to-br from-yellow-400 to-orange-500">
            {/* Using a placeholder or the logo as fallback if profile image doesn't exist */}
            <Image
              src="/logo.png" /* Feel free to change to "/profile.jpg" or similar */
              alt="Profile Picture"
              width={350}
              height={350}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
