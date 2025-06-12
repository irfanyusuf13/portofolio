import { skillsData } from '../../data/skillsData';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import SectionWrapper from '../layout/SectionWrapper'; 

const Skills = () => {
  return (
  
    <SectionWrapper id="skills" className="bg-gray-950">
      <SectionTitle>Skill Set</SectionTitle>
      <div className="space-y-12">
        {skillsData.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-6">
                <CategoryIcon size={28} className="text-cyan-400" />
                <h3 className="text-2xl font-semibold text-gray-200">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;