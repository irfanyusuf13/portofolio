import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 125, duration: 0.5 }}
          >
            <img
              src="/images/me/irfan.jpg" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-500 shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Irfan Yusuf Khaerullah
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 mt-6 text-lg text-gray-300">
              Computer Engineering student with a strong interest in AI/ML, data-driven systems, software development, computer networks, and IoT.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;