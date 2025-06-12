import SectionTitle from '../ui/SectionTitle';
import { experienceData } from '../../data/experienceData';
import TimelineItem from '../ui/TimelineItem';
import SectionWrapper from '../layout/SectionWrapper';

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <SectionTitle>Experiences</SectionTitle>
            <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
                <div className="space-y-8 md:space-y-0">
                    {experienceData.map((exp, index) => (
                        <div key={index}>
                            <div className="md:hidden text-sm text-center text-gray-500 mb-2">{exp.date}</div>
                            <TimelineItem experience={exp} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;