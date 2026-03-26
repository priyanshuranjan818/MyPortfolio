"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const certificates = [
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "INFOSYS",
    date: "Aug' 25",
    image: null,
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

const issuerGradients: Record<string, string> = {
  INFOSYS: "from-blue-500 to-indigo-500",
  LPU: "from-purple-500 to-pink-500",
  IBM: "from-blue-600 to-cyan-500",
  "CSE PATHSHALA": "from-green-500 to-teal-500",
};

const issuerInitials: Record<string, string> = {
  INFOSYS: "IN",
  LPU: "LPU",
  IBM: "IBM",
  "CSE PATHSHALA": "CS",
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

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => {
          const gradient = issuerGradients[cert.issuer] ?? "from-purple-500 to-cyan-500";
          const initials = issuerInitials[cert.issuer] ?? cert.issuer.slice(0, 2);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[#0d0d2b] overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(112,66,248,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${gradient} z-10`} />

              {/* Image / Visual area */}
              <div className="w-full h-52 bg-[#080820] flex items-center justify-center overflow-hidden relative">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Grid background */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(112,66,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(112,66,248,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      {/* Shield / badge icon */}
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-extrabold text-lg tracking-wide">{initials}</span>
                      </div>
                      <svg
                        className="w-6 h-6 text-gray-500"
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
                  </>
                )}
                {cert.date && (
                  <span className="absolute bottom-3 right-3 text-xs text-gray-300 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {cert.date}
                  </span>
                )}
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <h2 className="text-base font-bold text-white leading-snug">{cert.title}</h2>
                <span className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${gradient} w-fit`}>
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
