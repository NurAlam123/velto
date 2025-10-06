"use client";
import { ChevronDownIcon, RightArrow } from "@/assets/icons";
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
          <a
            key={`project-${project.id}`}
            className="w-full bg-neutral-50 flex items-center justify-between gap-6 py-4 px-4 rounded-2xl shadow-xs hover:bg-neutral-100 group cursor-default border-neutral-100 border"
            href={project.live}
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <project.logo className="size-8 md:size-12" />
              <div>
                <p className="text-lg md:text-xl font-medium">
                  {project.title}
                </p>
                <p className="text-xs md:text-sm">{project.description}</p>
              </div>
            </div>
            <div>
              <RightArrow className="group-hover:-rotate-45 stroke-neutral-400 group-hover:stroke-neutral-600" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
