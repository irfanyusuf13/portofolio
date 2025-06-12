import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  index: number;
}

const Card = ({ children, index }: CardProps) => {
  return (
    <motion.div
      className="bg-gray-800/50 rounded-lg p-6 flex flex-col h-full hover:bg-gray-800 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;