import { motion } from 'framer-motion';
import type { IExperience } from '../../data/experienceData';

interface TimelineItemProps {
  experience: IExperience;
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const CardContent = () => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full hover:border-cyan-400 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-3">
        <img 
          src={experience.logo} 
          alt={`${experience.institution} logo`} 
          className="w-10 h-10 rounded-full object-contain bg-white p-1" 
        />
        <div>
          <h3 className="text-lg font-bold text-gray-100">{experience.role}</h3>
          <p className="text-sm text-gray-400">{experience.institution}</p>
        </div>
      </div>
      <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
        {experience.description.map((desc, i) => <li key={i}>{desc}</li>)}
      </ul>
    </div>
  );

  return (
    <>
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-x-8">
        {isOdd ? (
          <>
            <p className="text-sm text-gray-500 text-right">{experience.date}</p>
            <div className="w-4 h-4 bg-cyan-400 rounded-full z-10 mx-auto"></div>
            <motion.div variants={cardVariants}>
              <CardContent />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div variants={cardVariants}>
              <CardContent />
            </motion.div>
            <div className="w-4 h-4 bg-cyan-400 rounded-full z-10 mx-auto"></div>
            <p className="text-sm text-gray-500 text-left">{experience.date}</p>
          </>
        )}
      </div>
      <div className="md:hidden">
          <CardContent />
      </div>
    </> 
  );
};

export default TimelineItem;