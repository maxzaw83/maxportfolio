// ExperienceItem.jsx
import React, { useRef } from "react";
import { BriefcaseIcon } from "lucide-react"; // or wherever you're importing from
import useFadeIn from "../hooks/useFadeIn"; // adjust the import path if needed

const ExperienceItem = ({ experience, delay }) => {
  const itemRef = useRef();
  const animation = useFadeIn(itemRef, delay);

  return (
    <div
      ref={animation.ref}
      style={animation.style}
      className="group relative pl-12 mb-10"
    >
      {/* Timeline Dot */}
      <div className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 rounded-full -left-[9px] mt-1.5 transition-colors duration-300 group-hover:border-indigo-500 dark:group-hover:border-fuchsia-400"></div>

      {/* Experience Content */}
      <div className="transition-transform duration-300 group-hover:translate-x-2">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          👨‍💼 {experience.role} | {experience.company}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          🌎 {experience.location} | 📅 {experience.date}
        </p>
        <div className="mt-4 p-6 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 group-hover:border-indigo-300 dark:group-hover:border-fuchsia-800/60 group-hover:shadow-md group-hover:shadow-indigo-500/10">
          <h4 className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200 mb-2">
            <BriefcaseIcon className="text-indigo-500 dark:text-fuchsia-400 transition-transform duration-300 group-hover:scale-110" />
            Key Achievements
          </h4>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
            {experience.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
