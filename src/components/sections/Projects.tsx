// src/components/sections/Projects.tsx

import SectionTitle from '../ui/SectionTitle';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../layout/SectionWrapper'; 

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-gray-950">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;