export interface IProject {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string; 
  liveUrl?: string;
  role?: string; 
  date: string;
}


export const projectsData: IProject[] = [
  {
    title: 'Smart Vending Machine',
    description: 'A Smart Vending machine for MBG',
    tags: ['Node.js','React.js','Prisma', 'C++', 'ESP32'],
    image: '/images/projects/Vendingmachine.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/despro-hardware',
    role: 'Hardware Developer',
    date: 'December 2025'
  },

  {
    title: 'SoundLedger',
    description: 'A Blockchain-Based Solution for Music Copyright Protection',
    tags: ['Ethereum','Solidity','React.js','Tailwind CSS', 'IPFS'],
    image: '/images/projects/BC.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/Soundledger/tree/main',
    role: 'Blockchain Developer',
    date: 'June 2025'
  },

  {
    title: 'Environment Monitoring System',
    description: 'Environmental monitoring system using ESP32 to measure and monitor air quality index and temperature in real time,',
    tags: ['C++', 'ESP32'],
    image: '/images/projects/EMS.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/Enviromental-Monitoring-System',
    role: 'Coder and Hardware Designer', 
    date: 'December 2024'
  },
  {
    title: 'BikeGuard',
    description: 'Website Based Bicycle Security System with lock and qr code',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'C++', 'ESP32'],
    image: '/images/projects/BikeGuard.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/BikeGuardAsli',
    role: 'IoT Developer, Frontend Developer, Project Management', 
    date: 'December 2024'
  },
  {
    title: 'LibCatalog',
    description: 'Create a full-stack library management system website using SERN stack.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    image: '/images/projects/LibCatalog.webp',
    githubUrl: 'https://github.com/SistemBasisData2024/LibCatalog',
    role: 'Backend Developer',
    date: 'June 2024'
  },
  {
    title: 'Smart Chiller',
    description: 'A smart temperature control system for food storage',
    tags: ['Assembly', 'Proteus'],
    image: '/images/projects/SmartChiller.webp',
    githubUrl: 'https://github.com/irfanyusuf13/Smart-Chiller-Kel19-',
    role: 'Coder and Hardware Designer',
    date: 'May 2024'
  },
  {
    title: 'JBus',
    description: 'Create an Android application for bus ticket booking and management using Java',
    tags: ['Java', 'Android Studio'],
    image: '/images/projects/JBus.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/JBus-android',
    role: 'Full-Stack Developer', 
    date: 'December 2023'
  },
  {
    title: 'Automated Plant Watering System',
    description: 'Automated Plant Watering System using VHDL based on moisutre and schedule',
    tags: ['VHDL', 'ModelSim'],
    image: '/images/projects/PSD.webp', 
    githubUrl: 'https://github.com/irfanyusuf13/Finpro-PSD---AP02/tree/master', 
    date: 'December 2023'
  },
  {
    title: 'Network Design and Simulation',
    description: 'Design and simulate large scale networks using Cisco Packet Tracer',
    tags: ['Cisco Packet Tracer'],
    image: '/images/projects/Jarkom.webp', 
    date: 'December 2023'
  },
  {
    title: 'Smart Traffic Light',
    description: 'Creating a Smart Traffic Light System using the Proteus application',
    tags: ['Proteus'],
    image: '/images/projects/DSD.webp', 
    date: 'December 2022'
  }
];