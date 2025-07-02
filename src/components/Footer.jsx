import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-20 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
      © {new Date().getFullYear()} Max Zaw. Built with React & Tailwind CSS.
    </footer>
  );
}
