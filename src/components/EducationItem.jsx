import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn"; // adjust the import path if needed
import {
  AwardIcon,
  Building2Icon,
  MapPinIcon,
  CalendarIcon,
  GraduationCapIcon,
} from "./Icons";

const EducationItem = ({ edu, delay }) => {
  const itemRef = useRef();
  const animation = useFadeIn(itemRef, delay);

  return (
    <div
      ref={animation.ref}
      style={animation.style}
      className="group relative pl-12 mb-10"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-2px] top-1.5 w-6 h-6 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-300 dark:border-slate-600 transition-colors duration-300 group-hover:border-purple-400 dark:group-hover:border-purple-500"></div>

      {/* --- Education Entry Content --- */}
      <div className="transition-transform duration-300 group-hover:translate-x-2">
        <div className="flex items-center mb-2">
          <GraduationCapIcon
            size={20}
            className="text-gray-600 dark:text-gray-400 mr-3 transition-colors duration-300 group-hover:text-purple-500"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {edu.degree}
          </h3>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <Building2Icon className="mr-3" />
          <span>{edu.institution}</span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <CalendarIcon className="mr-3" />
          <span>{edu.dates}</span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
          <MapPinIcon className="mr-3" />
          <span>{edu.location}</span>
        </div>

        {/* --- Achievements Box (only if achievements exist) --- */}
        {edu.achievements && edu.achievements.length > 0 && (
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-6 rounded-lg transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-800/60 group-hover:shadow-md group-hover:shadow-purple-500/10">
            <div className="flex items-center mb-4">
              <AwardIcon className="text-purple-600 dark:text-purple-400 mr-3 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Achievements & Activities
              </h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              {edu.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
