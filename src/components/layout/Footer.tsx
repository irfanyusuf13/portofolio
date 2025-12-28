import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Footer = () => {
  return (
    <footer className="bg-gray-950 text-center py-6">
      <div className="flex justify-center items-center gap-4 mb-4">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=irfanyusufk13@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="text-gray-400 hover:text-[#EA4335] transition-colors"
      >
        <SiGmail size={22} />
      </a>
        
        <a href="https://www.linkedin.com/in/irfan-yusuf-khaerullah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/irfanyusuf13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/irfanyusufkk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Irfan Yusuf Khaerullah. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;