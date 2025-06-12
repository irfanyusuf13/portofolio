import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 px-6">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl">
          Irfan Yusuf Khaerullah
        </h1>
        <TypeAnimation
          sequence={[
            'AI/ML', 2000,
            'Data Analytic', 2000,
            'Software Engineer', 2000,
            'Computer Networks', 2000,
            'IoT System', 2000,

          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl text-cyan-400 mt-3 block"
          repeat={Infinity}
        />
        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
          Computer Engineering student with a strong interest in AI/ML, data-driven systems, software development, computer networks, and IoT
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 flex flex-wrap justify-center items-center gap-4"
      >
      </motion.div>
    </section>
  );
};

export default Hero;