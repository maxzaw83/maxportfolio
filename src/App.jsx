import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationSection";
import AwardsSection from "./components/AwardsSection";
import Experiences from "./components/Experiences";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import Footer from "./components/Footer";

import { GraduationCapIcon } from "./components/Icons";

import "./App.css";
export default function App() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <div className="main-wrapper">
        <Header onLinkClick={handleScrollTo} />
        <main className="container mx-auto max-w-5xl px-6">
          <Hero />

          <Experiences />

          <Skills />

          <Projects />

          <AwardsSection />

          <EducationSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
