import React, { useState, useEffect, useRef } from "react";
import { skillsData } from "../data/data";
import SkillCategoryCard from "./SkillCategoryCard";
import { Section } from "./SectionComponents";
import useFadeIn from "../hooks/useFadeIn";

export default function Skills() {
  const sectionRef = useRef();
  const animation = useFadeIn(sectionRef);

  return (
    <Section id="skills" ref={animation.ref} style={animation.style}>
      <h2 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
        <img
          src="/src/assets/icons/preferences-desktop.png"
          alt="Skills icon"
          className="w-7 h-7"
        />
        Skills
      </h2>
      <div className="space-y-8">
        {skillsData.map((category, index) => (
          <SkillCategoryCard
            key={category.name}
            category={category}
            delay={index * 150}
          />
        ))}
      </div>
    </Section>
  );
}
