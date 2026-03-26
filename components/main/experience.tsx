"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

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

      <div className="w-full max-w-4xl flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.3 + index * 0.2)}
            className="relative flex flex-col gap-4 p-6 rounded-2xl border border-[#7042f88b] bg-[#0f0728]/60 backdrop-blur-sm shadow-[0_0_20px_rgba(112,66,248,0.15)] hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] transition-all duration-300"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-2xl bg-gradient-to-r from-purple-500 to-cyan-500" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {exp.type}
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="text-gray-300 font-semibold">{exp.company}</span>
                <span className="text-xs text-gray-400 border border-[#7042f88b] px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mt-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
