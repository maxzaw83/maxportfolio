import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/data";
import { LocationIcon, MailIcon, GithubIcon, LinkedinIcon } from "./Icons";
import useFadeIn from "../hooks/useFadeIn";

export default function Hero() {
  const heroRef = useRef();
  const animation = useFadeIn(heroRef);

  const contactInfo = [
    {
      icon: <LocationIcon />,
      text: personalInfo.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        personalInfo.location
      )}`,
    },
    {
      icon: <MailIcon />,
      text: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    { icon: <GithubIcon />, text: "GitHub", href: personalInfo.github },
    { icon: <LinkedinIcon />, text: "LinkedIn", href: personalInfo.linkedin },
  ];

  return (
    <section
      id="home"
      ref={animation.ref}
      style={animation.style}
      className="min-h-[90vh] flex items-center pt-10 pb-20 dark:bg-slate-900"
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* --- Left Column: Text Info --- */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
              {personalInfo.name}{" "}
              <span className="animate-sparkle ease-in-out">🌠</span>
            </h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              {personalInfo.title} 👨‍💼
            </p>
            <div className="mt-6 flex flex-col items-center md:items-start space-y-2">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-500 dark:text-slate-400 ease-in-out transition-transform hover:scale-105"
                >
                  <span className="text-indigo-600 dark:text-fuchsia-400 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-indigo-600 dark:group-hover:text-fuchsia-400 transition-colors">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* --- Right Column: Profile Image --- */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-200 to-fuchsia-200 dark:from-indigo-800 dark:to-fuchsia-800 p-1 shadow-lg ease-in-out transition-transform hover:scale-105">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
                onError={(e) =>
                  (e.target.src = personalInfo.profileImageFallback)
                }
              />
            </div>
          </div>
        </div>

        {/* --- Summary Section --- */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-lg">
          <p className="text-slate-600 dark:text-slate-300 pl-4 relative">
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
