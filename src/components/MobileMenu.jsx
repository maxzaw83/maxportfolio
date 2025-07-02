import React from "react";

export default function MobileMenu({ navLinks, onLinkClick, onClose }) {
  return (
    <div className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-md z-40 animate-slide-down">
      <nav className="flex flex-col gap-4 px-6 py-4">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              onLinkClick(link.id);
              onClose();
            }}
            className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-fuchsia-400 transition"
          >
            <img src={link.icon} alt={link.name} className="w-5 h-5" />
            {link.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
