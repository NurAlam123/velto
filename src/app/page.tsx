import Box from "@/components/ui/box";
import { interactions } from "@/constants";
import Image from "next/image";
import { RightArrow } from "@/assets/icons";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="h-screen mt-8 md:mt-32 ">
      <div className="w-full border-y py-2 my-8 border-dashed border-neutral-300">
        <div className="max-w-md mx-auto flex justify-between items-center px-4 z-[999] bg-white">
          <h1 className="text-2xl md:text-4xl font-bold">Velto</h1>
          <div>
            <a href="https://github.com/NurAlam123/velto" target="_blank">
              <Image
                src="/logo/github.svg"
                alt="github"
                width={24}
                height={24}
                className="size-6"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-8">
        <p className="text-base md:text-xl pb-1 md:pb-2">
          Hi, I&apos;m{" "}
          <a
            href="https://github.com/nuralam123"
            target="_blank"
            className="inline-block relative group focus:outline-none"
          >
            <strong className="group-focus:outline-2 group-focus:outline-blue-500 group-focus:rounded-sm">
              Nur Alam.
            </strong>
            <span className="w-12 h-12 inline-block overflow-hidden object-cover rounded-md shadow-sm absolute top-1/2 left-1/2 translate-x-2 -translate-y-16 opacity-0 scale-110 blur-xs group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-6 group-hover:blur-none transition-all ease-in-out duration-200">
              <Image
                src="/me.webp"
                width={64}
                height={64}
                alt="me"
                draggable="false"
              />
            </span>
            <RightArrow className="absolute top-1/2 right-0 size-6 -translate-y-1/2 -translate-x-4 opacity-0 blur-sm group-hover:translate-x-8 group-hover:opacity-100 scale-80 group-hover:scale-100 group-hover:blur-none transition-all ease-in-out duration-200" />
          </a>
        </p>
        <p className="text-sm md:text-lg text-neutral-600 pb-3">
          I love building clean, responsive, and interactive websites using
          modern frontend technologies.
        </p>

        <p className="text-sm md:text-lg text-neutral-600">
          This is a collection of interactive UI components and
          micro-interactions that I&apos;ve recreated for fun and practice. Most
          of them are inspired by designs I come across online.
        </p>
      </div>

      <div>
        <div
          id="projects"
          className="w-full border-y py-4 border-dashed border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 mb-4"
        >
          <div className="max-w-md mx-auto px-4 uppercase text-xs md:text-sm font-bold text-neutral-600/80 select-none">
            Projects
          </div>
        </div>

        <div className="px-2 max-w-md mx-auto flex justify-center items-center flex-col gap-2">
          {projects.map((project) => (
            <div
              key={`project-${project.id}`}
              className="relative w-full h-full aspect-video min-w-32 min-h-32 border border-neutral-300 rounded-xl overflow-hidden shadow-sm group hover:cursor-pointer"
            >
              <div className="w-full h-full">
                <Image
                  src={project.image}
                  alt={`Project-${project.id}`}
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable="false"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center group-hover:transition-opacity duration-75 ease-in-out">
                <p className="text-white font-bold mb-4 text-2xl">
                  {project.title}
                </p>

                <div className="flex gap-2 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:scale-95"
                  >
                    <span className="sr-only">
                      github link of {project.title}
                    </span>
                    <Image
                      src="/logo/github.svg"
                      alt="github"
                      width={24}
                      height={24}
                      className="size-7 invert"
                    />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:scale-95"
                  >
                    <span className="sr-only">
                      live link of {project.title}
                    </span>
                    <Image
                      src="/icons/link.svg"
                      alt="link"
                      width={24}
                      height={24}
                      className="size-7 invert"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div
          id="interactions"
          className="w-full border-y py-4 border-dashed border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50"
        >
          <div className="max-w-md mx-auto px-4 uppercase text-xs md:text-sm font-bold text-neutral-600/80 select-none">
            INTERACTIONS
          </div>
        </div>

        <div className="px-2 max-w-md mx-auto flex justify-center items-center flex-col gap-8 pt-4 md:pt-8 md:gap-16 pb-8 md:pb-32">
          {interactions.map((interaction) => (
            <Box
              key={interaction.id}
              title={interaction.title}
              badges={interaction.badges}
              date={interaction.date}
              {...(interaction.versions && { versions: interaction.versions })}
            >
              <interaction.component />
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
}
