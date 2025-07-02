import React, { useState, useEffect, useRef } from "react";
import { experienceData } from "../data/data";
import { BriefcaseIcon } from "./Icons";
import ExperienceItem from "./ExperienceItem";
import { Section, SectionTitle } from "./SectionComponents";
import useFadeIn from "../hooks/useFadeIn";
// --- Main Experience Component ---
export default function Experience() {
  const sectionRef = useRef();
  const animation = useFadeIn(sectionRef);

  return (
    <Section id="experience" ref={animation.ref} style={animation.style}>
      <SectionTitle
        icon={
          <BriefcaseIcon className="text-indigo-500 dark:text-fuchsia-400" />
        }
        title="Work Experience"
      />
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 mt-8">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} delay={index * 200} />
        ))}
      </div>
    </Section>
  );
}
