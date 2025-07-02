import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn"; // adjust the import path if needed
import { prizeColors } from "../data/data";
import {
  AwardIcon,
  Building2Icon,
  MapPinIcon,
  CalendarIcon,
  GlobeIcon,
} from "./Icons";

const AwardCard = ({ award, delay }) => {
  const cardRef = useRef();
  const animation = useFadeIn(cardRef, delay);
  const { title, organizer, institution, date, prize, scope, description } =
    award;

  return (
    <div
      ref={animation.ref}
      style={animation.style}
      className="group flex flex-col mt-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-fuchsia-500/20 hover:border-indigo-400 dark:hover:border-fuchsia-500"
    >
      <div className="flex-grow">
        {/* Top section for icon and title */}
        <div className="flex items-start gap-4 mb-3">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/40 rounded-full transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <AwardIcon className="text-yellow-600 dark:text-yellow-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 pt-1 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-fuchsia-400">
            {title}
          </h3>
        </div>

        {/* Organizer and Institution section */}
        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-4">
          <div className="flex items-start">
            <Building2Icon className="mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
            <span>{organizer}</span>
          </div>
          {institution && (
            <div className="flex items-start">
              <MapPinIcon className="mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span>{institution}</span>
            </div>
          )}
        </div>

        {/* NEW: Description Section */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
            "{description}"
          </p>
        )}
      </div>

      {/* Bottom section for date, prize, and scope */}
      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 transition-transform duration-300 group-hover:scale-125" />
            <span>{date}</span>
          </div>
          {prize && (
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 ${
                prizeColors[prize] || "bg-gray-100 text-gray-600"
              }`}
            >
              {prize}
            </span>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <GlobeIcon className="mr-2 transition-transform duration-300 group-hover:text-indigo-500 dark:group-hover:text-fuchsia-400" />
          <span className="transition-all duration-300 group-hover:text-indigo-500 dark:group-hover:text-fuchsia-400 group-hover:tracking-wide">
            {scope}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
