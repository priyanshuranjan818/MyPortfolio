"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const certificates = [
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "INFOSYS",
    date: "Aug' 25",
    image: null, // Add image path here later e.g. "/certificates/cert-1.png"
  },
  {
    title: "Data Structures and Algorithm",
    issuer: "LPU",
    date: "Dec' 24",
    image: null,
  },
  {
    title: "Object Oriented Programming",
    issuer: "LPU",
    date: "Dec' 24",
    image: null,
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Sep' 24",
    image: null,
  },
  {
    title: "Mastering in C: Basic To Beyond",
    issuer: "CSE PATHSHALA",
    date: null,
    image: null,
  },
];

// Issuer badge color map
const issuerColors: Record<string, string> = {
  INFOSYS: "from-blue-500 to-indigo-500",
  LPU: "from-purple-500 to-pink-500",
  IBM: "from-blue-600 to-cyan-500",
  "CSE PATHSHALA": "from-green-500 to-teal-500",
};

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Certificates
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => {
          const gradientClass =
            issuerColors[cert.issuer] ?? "from-purple-500 to-cyan-500";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-[#7042f88b] bg-[#0f0728]/60 backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(112,66,248,0.1)] hover:shadow-[0_0_25px_rgba(112,66,248,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Certificate image area */}
              <div className="relative w-full h-44 bg-[#0a0520] flex items-center justify-center overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder until image is added
                  <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}
                    >
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
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500 italic">
                      Certificate image coming soon
                    </span>
                  </div>
                )}
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${gradientClass}`}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                  <span
                    className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}
                  >
                    {cert.issuer}
                  </span>
                  {cert.date && (
                    <span className="text-xs text-gray-400 border border-[#7042f88b] px-2 py-0.5 rounded-full">
                      {cert.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
