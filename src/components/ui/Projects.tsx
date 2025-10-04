"use client";
import { ChevronDownIcon } from "@/assets/icons";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "mb-4" : ""}>
      <div
        id="projects"
        className={cn(
          "w-full border-y py-4 border-dashed border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 cursor-pointer",
          !open ? "border-b-0" : "mb-4",
        )}
        role="butotn"
        onClick={() => setOpen(!open)}
      >
        <div className="max-w-md mx-auto px-4 uppercase text-xs md:text-sm font-bold text-neutral-600/80 select-none">
          <div className="flex justify-between items-center">
            Projects
            <ChevronDownIcon className={cn("size-6", open && "rotate-180")} />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "px-2 max-w-md mx-auto justify-center items-center flex-col gap-2",
          open ? "flex" : "hidden",
        )}
      >
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
              <p className="text-white font-bold mb-2 md:mb-4 text-lg md:text-2xl">
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
                    className="size-6 md:size-7 invert"
                  />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:scale-95"
                >
                  <span className="sr-only">live link of {project.title}</span>
                  <Image
                    src="/icons/link.svg"
                    alt="link"
                    width={24}
                    height={24}
                    className="size-6 md:size-7 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
