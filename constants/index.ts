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
    title: "DevSecOps CI/CD Pipeline",
    platform: "GitHub",
    date: "Jan' 26",
    image: null, // Add image path later e.g. "/projects/devsecops.png"
    link: "https://github.com/priyanshuranjan818",
    bullets: [
      "Implemented a secure CI/CD pipeline using Jenkins integrated with GitHub, automating build, test, and deployment workflows for an application on AWS EC2 and Kubernetes.",
      "Integrated static code analysis and dependency vulnerability scanning using SonarQube and OWASP Dependency Check, enabling early detection of code quality issues and security vulnerabilities.",
      "Performed container image vulnerability scanning using Trivy and enforced security gates within the pipeline, reducing high and critical vulnerabilities by ~40% before deployment.",
    ],
  },
  {
    title: "Notes Application CI/CD Deployment on AWS",
    platform: "GitHub",
    date: "Dec' 25",
    image: null, // Add image path later e.g. "/projects/notes-app.png"
    link: "https://github.com/priyanshuranjan818",
    bullets: [
      "Built and automated a CI/CD pipeline using Jenkins integrated with GitHub, Docker, and Kubernetes to deploy a 3-tier Notes application (Frontend, Backend, Database) on AWS EC2.",
      "Provisioned and managed cloud infrastructure using Terraform, enabling repeatable and version-controlled EC2 and Kubernetes environment setup.",
      "Containerized application services using Docker and orchestrated deployments with Kubernetes, reducing manual deployment effort by ~50% while improving scalability and reliability.",
    ],
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
