import { FaGithub, FaUserTie } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import type { IProject } from '../../data/projectsData';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden h-full flex flex-col
                    transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
        {project.role && (
          <div className="flex items-center gap-2 mb-3 text-cyan-400">
            <FaUserTie size={16} /> 
            <p className="text-sm font-semibold">{project.role}</p>
          </div>
        )}
        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaGithub size={24} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FiExternalLink size={24} />
              </a>
            )}
          </div>
          <span className="text-xs text-gray-500">{project.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;