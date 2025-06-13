import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experiences' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold text-white cursor-pointer"
        >
          Irfan
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                activeClass="active" 
                to={link.to}         
                spy={true}           
                smooth={true}       
                duration={500}       
                offset={-70}         
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;