import { projectData } from "../data/data";
import ProjectCard from "./ProjectCard";
import { Section, SectionTitle } from "./SectionComponents";
import { RocketIcon } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        icon={<RocketIcon className="text-indigo-500 dark:text-fuchsia-400" />}
        title="Projects"
      />
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 150}
          />
        ))}
      </div>
    </Section>
  );
}
