import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2 
      className="text-4xl text-center mb-12"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;