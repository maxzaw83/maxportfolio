import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { GithubIcon, LinkIcon } from "./Icons";

const ProjectCard = ({ project, delay }) => {
  const cardRef = useRef();
  const animation = useFadeIn(cardRef, delay);

  return (
    <div
      ref={animation.ref}
      style={animation.style}
      className="flex flex-col mt-4 p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 ease-in-out transition-transform hover:scale-101"
    >
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        {project.title}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mb-6 flex-grow">
        {project.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-fuchsia-400 transition-colors"
        >
          <GithubIcon className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            View on GitHub
          </span>
          <LinkIcon className="transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
