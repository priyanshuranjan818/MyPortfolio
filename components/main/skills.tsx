import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  CLOUD_PLATFORMS,
  DEVOPS_TOOLS,
  MONITORING_SCRIPTING,
  SOFT_SKILLS,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {CLOUD_PLATFORMS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {DEVOPS_TOOLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {MONITORING_SCRIPTING.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Soft Skills */}
      <div className="mt-16 w-full max-w-5xl px-6 z-10">
        <h2 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-10">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SOFT_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-b from-[#7042f8] via-[#7042f83b] to-transparent hover:from-[#7042f8] hover:via-[#7042f8aa] hover:to-[#00d4ff55] transition-all duration-500"
            >
              <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#030014] py-8 px-4 h-full group-hover:bg-[#0a0025] transition-colors duration-500">
                {/* Glow orb */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-5xl z-10 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(112,66,248,0.5)]">
                  {skill.icon}
                </span>
                <span className="text-gray-300 text-base font-semibold text-center z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
