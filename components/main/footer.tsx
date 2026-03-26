"use client";

import Link from "next/link";
import { RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/priyanshuranjan818",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/priyanshu-ranjan-x/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Haxx__616",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/haxx_616/",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#2A0E61]/50 py-8 px-5 relative z-[20]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={name}
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#2A0E61] bg-[#0d0d2b] text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(112,66,248,0.5)] transition-all duration-300"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Priyanshu Ranjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
