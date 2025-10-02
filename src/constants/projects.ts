type ProjectsType = {
  id: number;
  image: string;
  title: string;
  live: string;
  github: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    image: "https://github.com/NurAlam123/nekopad/raw/main/public/og-image.png",
    title: "Nekopad",
    live: "https://nekopad.netlify.app",
    github: "https://github.com/NurAlam123/nekopad",
  },
  {
    id: 2,
    image: "/projects/cloudy.png",
    title: "Cloudy AI",
    live: "https://cloudyai.netlify.app",
    github: "https://github.com/NurAlam123/cloudy",
  },
  {
    id: 3,
    image:
      "https://github.com/NurAlam123/carecore/raw/main/public/carecore.png",
    title: "CareCore",
    live: "https://carecore-mocha.vercel.app/",
    github: "https://github.com/NurAlam123/carecore/",
  },
];
