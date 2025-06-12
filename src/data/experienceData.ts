export interface IExperience {
  role: string;
  institution: string;
  date: string;
  description: string[];
  logo: string; 
}


export const experienceData: IExperience[] = [
    
{
    role: "Network Operations Center (NOC) Internship",
    institution: "PLN Icon Plus",
    date: "Jan 2025 - Feb 2025",
    logo: '/images/Experiences/pln.jpg', 
    description: [
      "Explored the physical implementation of telecommunication networks of PLN Icon Plus.",
      "Gained experience with automated network configuration systems and their implementation in NOC environments."
    ]
  },

  {
    role: "Staff Programming",
    institution: "AUAV UI Vishwakarma",
    date: "Jan 2024 - Aug 2024",
    logo: '/images/Experiences/auav.jpg',
    description: [
      "Developing a ground control station system for Kompetisi Robot Terbang Indonesia (KRTI) Technology Development (TD) category.",
    ]
  },
  {
    role: "Member",
    institution: "GDSC UI",
    date: "Oct 2022 - Oct 2023",
    logo: '/images/Experiences/gdsc.png', 
    description: [
      "Community groups for university students from Universitas Indonesia that interested in Google developer technologies",
    ]
  }
];