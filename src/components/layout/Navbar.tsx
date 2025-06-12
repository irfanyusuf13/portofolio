import { useState, useEffect } from 'react';
import { useScrollProgress } from '../../hooks/Scroll'; 
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useScrollProgress(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          Irfan<span className="text-cyan-400"></span>
        </a>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div 
        className="h-1 bg-cyan-400 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />
    </header>
  );
};

export default Navbar;