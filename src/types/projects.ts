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
    branches?: number;
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
    link: "https://sb-fusion-tmg.alliedprotocol.com",
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
    demoUrl: "https://sb-fusion-tmg.alliedprotocol.com",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 1000,
      transactions: 100000,
      performance: "99.9% uptime",
      branches: 100,
    }
  },
  {
    title: "HR Payroll System",
    description: "A comprehensive HR Management System designed to streamline employee management, attendance tracking, payroll processing, leave approvals, and claims handling. It supports fingerprint device integration for accurate timekeeping and ensures compliance with Malaysian statutory deductions such as EPF, SOCSO, EIS, and PCB. The system also includes robust reporting tools for better visibility and decision-making.",
    image: "/projects/epaygen-payroll.webp",
    link: "https://project2.com",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "Role-based access control",
      "Employee Management",
      "Daily attendance tracking (IN/OUT times)",
      "Auto-calculation of monthly salaries based on attendance, OT, and leave",
      "Support for fixed, variable, and prorated salary structures",
      "Automatically calculates EPF, SOCSO, EIS, and PCB based on Malaysian statutory requirements.",
      "HR leave approval workflow",
      "Leave balance and history tracking",
      "Claims Management",
      "Monthly payroll summary and statutory contribution reports (EPF, SOCSO, EIS, PCB)",
      "Export reports to Excel or PDF formats",
      "Fingerprint Device Control",
      "Real-time sync with fingerprint devices"
    
    ],
    demoUrl: "https://sb-epaygen.alliedprotocol.com/",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 30,
      transactions: 3000,
      performance: "45ms average response time"
    }
  }
]; 