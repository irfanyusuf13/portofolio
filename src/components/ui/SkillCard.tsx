import StarRating from './Rating';
import type { ISkill } from '../../data/skillsData'; 

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const IconComponent = skill.icon;
  
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 w-32 h-32
                    transition-transform duration-300 transform hover:-translate-y-2">
      <IconComponent size={36} className="text-gray-300" />
      <p className="text-gray-200 font-medium text-sm">{skill.name}</p>
      <StarRating level={skill.level} />
    </div>
  );
};

export default SkillCard;