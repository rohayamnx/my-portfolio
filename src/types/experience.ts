export interface Experience {
  company: string;
  logo: string;
  position: string;
  period: string;
  description: string;
}

export interface ExperienceData {
  experiences: Experience[];
}

export const experienceData: ExperienceData = {
  experiences: [
    {
      company: "Allied Protocol Sdn Bhd",
      logo: "/company-logos/ap.jpg",
      position: "Unit Team Leader",
      period: "2017-Present",
      description: "Led development teams for POS and ERP systems, delivering multi-client solutions with 80% improved efficiency. Implemented e-Invoice integration with LHDN using React.js and PHP, containerized with Docker/Kubernetes. Streamlined accounting processes through API integrations with Autocount system."
    },
    {
      company: "Tobiz Network Sdn Bhd",
      logo: "/company-logos/tobiz.jpg",
      position: "Freelance Programmer",
      period: "2020-2022",
      description: "Enhanced HR system with Yii2 framework, implementing comprehensive payroll features including automated statutory calculations. Developed significant portions of client ERP system using PHP, focusing on core business functionalities."
    },
    {
      company: "Tunas Manja Sdn Bhd",
      logo: "/company-logos/tmg.jpg",
      position: "PHP Programmer",
      period: "2012-2017",
      description: "Led development of internal systems including ticketing and inventory management solutions. Improved system performance through PHP upgrades and query optimizations. Integrated eBanking and HR processes, reducing manual workload by 70%."
    }
  ]
}; 