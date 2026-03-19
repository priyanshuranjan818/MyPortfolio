import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const CLOUD_PLATFORMS = [
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Azure",
    image: "azure.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GCP",
    image: "gcp.svg",
    width: 70,
    height: 70,
  },
] as const;

export const DEVOPS_TOOLS = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Jenkins",
    image: "jenkins.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Terraform",
    image: "terraform.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Ansible",
    image: "ansible.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub Actions",
    image: "githubactions.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "ArgoCD",
    image: "argocd.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Helm",
    image: "helm.svg",
    width: 70,
    height: 70,
  },
] as const;

export const MONITORING_SCRIPTING = [
  {
    skill_name: "Prometheus",
    image: "prometheus.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Grafana",
    image: "grafana.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Bash",
    image: "bash.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nginx",
    image: "nginx.svg",
    width: 70,
    height: 70,
  },
] as const;

export const SOFT_SKILLS = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Agile & Scrum", icon: "🔄" },
  { name: "Leadership", icon: "👑" },
] as const;


export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/haxx_616/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Haxx__616",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/priyanshu-ranjan-x/",
  },
] as const;


export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/haxx_616/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/Haxx__616",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/priyanshu-ranjan-x/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
