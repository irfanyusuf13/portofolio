import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`w-full py-20 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;