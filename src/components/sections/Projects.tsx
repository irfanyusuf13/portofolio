import SectionTitle from '../ui/SectionTitle';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../layout/SectionWrapper';
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,        
    infinite: true,     
    speed: 500,         
    slidesToShow: 3,   
    slidesToScroll: 1,  
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,  
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <SectionWrapper id="projects" className="bg-gray-950">
      <SectionTitle>Projects</SectionTitle>
      <div className="slider-container">
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div key={project.title} className="px-2 md:px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default Projects;