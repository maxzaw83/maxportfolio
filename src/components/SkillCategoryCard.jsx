import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn"; // adjust the import path if needed

const SkillCategoryCard = ({ category, delay }) => {
  const cardRef = useRef();
  const animation = useFadeIn(cardRef, delay);

  return (
    <div
      ref={animation.ref}
      style={animation.style}
      className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 ease-in-out transition-transform hover:scale-101"
    >
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">
        <img
          src={category.icon}
          alt={`${category.name} icon`}
          className="w-6 h-6"
        />
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm font-medium text-indigo-700 dark:text-fuchsia-300 bg-indigo-100 dark:bg-fuchsia-900/40 rounded-full transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
