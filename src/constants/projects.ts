import { CarecoreLogo, CloudyLogo, NekopadLogo } from "@/assets/projects";

type ProjectsType = {
  id: number;
  logo: React.ElementType;
  title: string;
  description: string;
  live: string;
  github: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    logo: NekopadLogo,
    title: "Nekopad",
    description: "Write. Organize. Focus",
    live: "https://nekopad.netlify.app",
    github: "https://github.com/NurAlam123/nekopad",
  },
  {
    id: 2,
    logo: CloudyLogo,
    title: "Cloudy AI",
    description: "AI-powered assistant using Gemini API",
    live: "https://cloudyai.netlify.app",
    github: "https://github.com/NurAlam123/cloudy",
  },
  {
    id: 3,
    logo: CarecoreLogo,
    title: "CareCore",
    description: "A modern healthcare management system",
    live: "https://carecore-mocha.vercel.app/",
    github: "https://github.com/NurAlam123/carecore/",
  },
];
