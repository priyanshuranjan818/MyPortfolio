"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "Aug' 23 – Present",
    score: "CGPA: 6.66",
    scoreType: "cgpa",
    icon: "🎓",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    degree: "Intermediate",
    field: "PCM",
    institution: "Guru Gobind Singh Public School",
    period: "Mar' 20 – May' 22",
    score: "Percentage: 69.33%",
    scoreType: "percentage",
    icon: "📚",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    degree: "Matriculation",
    field: null,
    institution: "Jai Hind Public School",
    period: "Mar' 19 – May' 20",
    score: "Percentage: 72.8%",
    scoreType: "percentage",
    icon: "🏫",
    gradient: "from-green-500 to-teal-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

export const Education = () => {
  return (
    <section
      id="education"
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
        Education
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
        {education.map((edu, index) => (
          <motion.div
            key={index}
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
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(112,66,248,0.08) 50%, transparent 60%)",
              }}
            />

            {/* Animated top gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${edu.gradient} z-10 origin-left`}
            />

            {/* Visual header area */}
            <div className="w-full h-52 bg-[#080820] flex items-center justify-center overflow-hidden relative">
              {/* Grid bg */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(112,66,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(112,66,248,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.4,
                  type: "spring" as const,
                  stiffness: 150,
                }}
                className="relative z-10 flex flex-col items-center gap-4"
              >
                {/* Icon circle */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(112,66,248,0.4)] text-4xl`}
                >
                  {edu.icon}
                </div>

                {/* Score badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                  className={`text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${edu.gradient} border border-[#7042f88b] px-4 py-1 rounded-full bg-[#0d0d2b]/80`}
                >
                  {edu.score}
                </motion.span>
              </motion.div>

              {/* Period badge */}
              <span className="absolute bottom-3 right-3 text-xs text-gray-300 border border-[#7042f88b] bg-[#0d0d2b]/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
                {edu.period}
              </span>
            </div>

            {/* Card content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
              className="flex flex-col gap-1.5 p-5 flex-1"
            >
              <h2 className="text-lg font-bold text-white leading-snug">{edu.degree}</h2>
              {edu.field && (
                <p className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${edu.gradient}`}>
                  {edu.field}
                </p>
              )}
              <p className="text-sm text-gray-400 mt-1">{edu.institution}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
