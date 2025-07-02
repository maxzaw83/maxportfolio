import React from "react";

export default function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      {icon}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
    </div>
  );
}
