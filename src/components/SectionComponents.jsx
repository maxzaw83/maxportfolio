import React, { forwardRef } from "react";

// Wrap with forwardRef to support ref forwarding
export const Section = forwardRef(({ id, children }, ref) => (
  <section id={id} ref={ref} className="py-16 px-4">
    {children}
  </section>
));

export const SectionTitle = ({ icon, title }) => (
  <h2 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
    {icon}
    {title}
  </h2>
);
