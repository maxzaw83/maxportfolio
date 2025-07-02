import React, { useRef } from "react";
import { awardsData } from "../data/data";
import AwardCard from "./AwardCard";
import { Section, SectionTitle } from "./SectionComponents";
import useFadeIn from "../hooks/useFadeIn";
import { AwardIcon } from "./Icons";

export default function AwardsSection() {
  const sectionRef = useRef();
  const animation = useFadeIn(sectionRef);

  return (
    <Section id="awards" ref={animation.ref} style={animation.style}>
      <SectionTitle
        icon={<AwardIcon className="text-indigo-500 dark:text-fuchsia-400" />}
        title="Awards & Recognition"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <AwardCard key={index} award={award} delay={index * 100} />
        ))}
      </div>
    </Section>
  );
}
