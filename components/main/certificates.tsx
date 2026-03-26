"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const certificates = [
  {
    title: "Communication in the 21st Century Workplace",
    issuer: "COURSERA",
    subtitle: "University of California, Irvine",
    date: null,
    image: "/certificates/cert-6.jpeg",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "INFOSYS",
    date: "Aug' 25",
    image: "/certificates/cert-1.jpg",
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
    image: "/certificates/cert-3.jpg",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Sep' 24",
    image: "/certificates/cert-4.jpg",
  },
  {
    title: "Mastering in C: Basic To Beyond",
    issuer: "CSE PATHSHALA",
    date: null,
    image: "/certificates/cert-5.jpg",
  },
];

const issuerGradients: Record<string, string> = {
  INFOSYS: "from-blue-500 to-indigo-500",
  LPU: "from-purple-500 to-pink-500",
  IBM: "from-blue-600 to-cyan-500",
  "CSE PATHSHALA": "from-green-500 to-teal-500",
  COURSERA: "from-sky-400 to-blue-600",
};

const issuerInitials: Record<string, string> = {
  INFOSYS: "IN",
  LPU: "LPU",
  IBM: "IBM",
  "CSE PATHSHALA": "CS",
  COURSERA: "Co",
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.93 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 110,
      damping: 14,
    },
  }),
};

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20 px-5 relative z-[20]"
    >
      {/* Animated heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Certificates
      </motion.div>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="h-[2px] w-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-12"
      />

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => {
          const gradient = issuerGradients[cert.issuer] ?? "from-purple-500 to-cyan-500";
          const initials = issuerInitials[cert.issuer] ?? cert.issuer.slice(0, 2);

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[#0d0d2b] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(112,66,248,0.35)] transition-shadow duration-300 group"
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(112,66,248,0.08) 50%, transparent 60%)",
                }}
              />

              {/* Animated top gradient line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${gradient} z-10 origin-left`}
              />

              {/* Image / Visual area */}
              <div className="w-full h-52 bg-[#080820] flex items-center justify-center overflow-hidden relative">
                {cert.image ? (
                  <Image src={`${basePath}${cert.image}`} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "linear-gradient(rgba(112,66,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(112,66,248,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <motion.div
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4, type: "spring" as const, stiffness: 150 }}
                      className="relative z-10 flex flex-col items-center gap-3"
                    >
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-[0_0_20px_rgba(112,66,248,0.4)]`}>
                        <span className="text-white font-extrabold text-lg tracking-wide">{initials}</span>
                      </div>
                      <motion.svg
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </motion.svg>
                    </motion.div>
                  </>
                )}
                {cert.date && (
                  <span className="absolute bottom-3 right-3 text-xs text-gray-300 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {cert.date}
                  </span>
                )}
              </div>

              {/* Card content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                className="flex flex-col gap-2 p-5 flex-1"
              >
                <h2 className="text-base font-bold text-white leading-snug">{cert.title}</h2>
                <span className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${gradient} w-fit`}>
                  {cert.issuer}
                </span>
                {"subtitle" in cert && cert.subtitle && (
                  <span className="text-xs text-gray-500 mt-0.5">{cert.subtitle}</span>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
