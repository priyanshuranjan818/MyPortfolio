"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        My Projects
      </motion.h1>

      <div className="w-full max-w-5xl flex flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex flex-col rounded-2xl border border-[#7042f88b] bg-[#0f0728]/60 backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(112,66,248,0.1)] hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] transition-all duration-300"
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="flex flex-col lg:flex-row">
              {/* Image / Placeholder */}
              <div className="lg:w-64 lg:min-h-full min-h-[180px] bg-[#0a0520] flex items-center justify-center flex-shrink-0">
                {"image" in project && project.image ? (
                  <img
                    src={project.image as string}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500 italic">
                      Image coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    {"platform" in project && (
                      <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                        {project.platform}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    {"date" in project && project.date && (
                      <span className="text-xs text-gray-400 border border-[#7042f88b] px-3 py-1 rounded-full">
                        {project.date}
                      </span>
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-1.5 rounded-full hover:opacity-80 transition"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </Link>
                  </div>
                </div>

                {/* Bullets */}
                {"bullets" in project && (
                  <ul className="flex flex-col gap-3 mt-1">
                    {(project.bullets as readonly string[]).map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {"description" in project && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description as string}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
