"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { PROJECTS } from "@/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
    },
  }),
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      {/* Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        My Projects
      </motion.h1>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="h-[2px] w-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-12"
      />

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[#0d0d2b] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(112,66,248,0.4)] transition-shadow duration-300 group"
          >
            {/* Shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(112,66,248,0.08) 50%, transparent 60%)",
              }}
            />

            {/* Animated top gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.35 }}
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 z-10 origin-left"
            />

            {/* Image / Placeholder */}
            <div className="w-full h-52 bg-[#080820] flex items-center justify-center overflow-hidden relative">
              {project.image ? (
                <img
                  src={`${basePath}${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-br from-[#10083a] to-[#0a0520]">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(rgba(112,66,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(112,66,248,0.3) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4, type: "spring" as const, stiffness: 150 }}
                    className="relative z-10 flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(112,66,248,0.5)]">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-widest">
                      {project.platform}
                    </span>
                  </motion.div>
                </div>
              )}

              {/* Date badge — always shown */}
              {project.date && (
                <span className="absolute bottom-3 right-3 text-xs text-gray-300 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.date}
                </span>
              )}

              {/* Platform badge on top of image */}
              {project.image && (
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.platform}
                </span>
              )}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
              className="flex flex-col gap-3 p-5 flex-1"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-bold text-white leading-snug">{project.title}</h2>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-shrink-0 text-gray-400 hover:text-white transition hover:scale-110"
                  title="View on GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>

              <ul className="flex flex-col gap-2">
                {project.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.15 + 0.55 + i * 0.08 }}
                    className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed"
                  >
                    <span className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
