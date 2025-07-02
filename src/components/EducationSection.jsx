import React, { useRef } from "react";
import { educationData } from "../data/data";
import EducationItem from "./EducationItem";
import { Section, SectionTitle } from "./SectionComponents";
import useFadeIn from "../hooks/useFadeIn";
import { GraduationCapIcon } from "./Icons";

export default function EducationSection() {
  const sectionRef = useRef();
  const animation = useFadeIn(sectionRef);

  return (
    <Section id="education" ref={animation.ref} style={animation.style}>
      <SectionTitle
        icon={
          <GraduationCapIcon className="text-indigo-500 dark:text-fuchsia-400" />
        }
        title="Education"
      />

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 mt-8">
        {educationData.map((edu, index) => (
          <EducationItem key={edu.id} edu={edu} delay={index * 200} />
        ))}
      </div>
    </Section>
  );
}
