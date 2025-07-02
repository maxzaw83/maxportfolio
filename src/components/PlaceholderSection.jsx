import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { AwardIcon } from "./Icons";

export default function PlaceholderSection({ id, icon, title, message }) {
  return (
    <Section id={id}>
      <SectionTitle icon={icon || <AwardIcon />} title={title} />
      <p className="text-slate-600 dark:text-slate-300">{message}</p>
    </Section>
  );
}
