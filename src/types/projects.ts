export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  codeUrl?: string;
  metrics?: {
    users?: number;
    transactions?: number;
    performance?: string;
  };
  architecture?: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
}

export const projects: Project[] = [
  {
    title: "ERP System",
    description: "A custom-built ERP backend system developed exclusively for Tunas Manja Retailing, designed to serve as the core engine behind their nationwide POS operations. The system manages master data such as products, pricing, and promotions — all centrally controlled and synchronized to every POS terminal. It also includes full modules for purchasing, inventory, returns, finance, and document validation.",
    image: "/projects/fusion-tmg.webp",
    link: "https://project1.com",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "User Management & Security",
      "Master Data & Pricing Control",
      "Procurement & Inventory Management",
      "Warehouse & Logistics",
      "Reporting & Analytics",
      "Finance, Payment & Bank Integration",
      " Ready for upload into bank portals for bulk payments",
      "Integration with Autocount Accounting Software", 
      "e-Invoice (LHDN Integration)",
      "Automatic data synchronization to POS terminals",
      "Document Workflow & Validation"
    ],
    demoUrl: "https://demo.project1.com",
    codeUrl: "https://github.com/username/project1",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 10000,
      transactions: 50000,
      performance: "99.9% uptime"
    }
  },
  {
    title: "Team Management App",
    description: "A mobile-first team management application with offline support and real-time collaboration features.",
    image: "/projects/project-2.webp",
    link: "https://project2.com",
    tags: ["React Native", "Firebase", "Redux"],
    features: [
      "Real-time collaboration",
      "Offline support",
      "Team chat and messaging",
      "Task management",
      "File sharing"
    ],
    demoUrl: "https://demo.project2.com",
    codeUrl: "https://github.com/username/project2",
    architecture: {
      frontend: ["React Native", "Redux", "Styled Components"],
      backend: ["Firebase Functions", "Node.js"],
      database: ["Firestore", "Redis"],
      deployment: ["Google Cloud", "Firebase Hosting"]
    },
    metrics: {
      users: 5000,
      transactions: 25000,
      performance: "45ms average response time"
    }
  }
]; 