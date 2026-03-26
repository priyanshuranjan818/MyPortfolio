"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const experiences = [
  {
    role: "Java GUI Development",
    company: "LPU",
    period: "Jun' 25 – Jul' 25",
    type: "Java Swing & AWT Development",
    bullets: [
      "Developed basic desktop GUI applications using Java Swing and AWT, focusing on forms, buttons, labels, and event handling.",
      "Implemented simple projects such as login forms, calculator UI, and data entry screens using layout managers like Flow Layout and Grid Layout.",
      "Applied core OOP concepts (classes, objects, inheritance) and basic exception handling to structure Java GUI programs.",
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Experience
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[#0d0d2b] overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(112,66,248,0.35)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 z-10" />

            {/* Visual header area */}
            <div className="w-full h-52 bg-[#080820] flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(112,66,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(112,66,248,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-white">{exp.company}</span>
              </div>
              <span className="absolute bottom-3 right-3 text-xs text-gray-300 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                {exp.period}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              <div>
                <h2 className="text-lg font-bold text-white leading-snug">{exp.role}</h2>
                <p className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-0.5">
                  {exp.type}
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                    <span className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
