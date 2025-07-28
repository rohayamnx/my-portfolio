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
    branches?: number;
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
    image: "/projects/tmg-fusion.webp",
    link: "https://sb-fusion-tmg.alliedprotocol.com",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "User Management & Security",
      "Master Data & Pricing Control",
      "Procurement & Inventory Management",
      "Warehouse & Logistics",
      "Reporting & Analytics",
      "Finance, Payment & Bank Integration",
      "Ready for upload into bank portals for bulk payments",
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
      branches: 100,
      transactions: 100000,
      performance: "99.9% uptime",
    }
  },
  {
    title: "HR Payroll System",
    description: "A comprehensive HR Management System designed to streamline employee management, attendance tracking, payroll processing, leave approvals, and claims handling. It supports fingerprint device integration for accurate timekeeping and ensures compliance with Malaysian statutory deductions such as EPF, SOCSO, EIS, and PCB. The system also includes robust reporting tools for better visibility and decision-making.",
    image: "/projects/tmg-epaygen.webp",
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
      branches: 100,
      transactions: 3000,
      performance: "45ms average response time"
    }
  },
  {
    title: "POS System",
    description: "A reliable and user-friendly Point of Sale (POS) System built for retail businesses to manage sales transactions, inventory, and customer data. It supports barcode scanning, multiple payment methods, and integrates seamlessly with ERP systems for real-time data sync. The system also offers clear, real-time reporting to help businesses make informed decisions.",
    image: "/projects/tmg-pos.webp",
    link: "#",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "Login with user role (cashier, supervisor, manager)",
      "Fast item scanning via barcode",
      "Apply discounts (item-level / overall)",
      "Multiple payment methods (cash, card, eWallet)",
      "Offline mode with auto-resync when online",
      "Daily cash in/out tracking",
      "Cash drawer control",
      "Thermal receipt printers",
      "Barcode scanners",
      "Customer display screens",
      "Loyalty program integration (points collection)",
      "Send sales data back to ERP in real-time or scheduled sync",
    ],
    demoUrl: "#",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 1000,
      branches: 100,
      transactions: 500000,
      performance: "99.9% uptime",
    }
  },
  {
    title: "Biometric Attendance Device",
    description: "A system that connects to biometric attendance devices to automatically retrieve and store employee clock-in/out data. It processes attendance records in real-time or on schedule, integrates with HR/payroll systems.",
    image: "/projects/tmg-fp.webp",
    link: "#",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "On-premise Ubuntu Server"],
    features: [
      "Connect to biometric device over LAN/WAN (IP & Port-based)",
      "Support for ZKTeco, Vigilance, or other common biometric devices",
      "Scheduled data pulling",
      "Fetch IN/OUT timestamps with user ID",
      "Auto-clear logs from device (optional) after successful sync - daily",
      "Multi-device support (for branches/outlets)",
      "Filter and validate duplicates or incomplete entries",
    ],
    demoUrl: "#",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP"],
      database: ["#"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 3000,
      branches: 100,
      transactions: 50000,
      performance: "99.9% uptime",
    }
  },
  {
    title: "On-Premise Ubuntu Server Setup & Management",
    description: "Responsible for setting up and maintaining 10+ on-premise Ubuntu servers, focusing on application deployment and troubleshooting for PHP-based systems. Tasks include configuring Apache, PHP, and MySQL, handling SSL certificates, and resolving server-related issues to ensure system stability and uptime.",
    image: "/projects/tmg-server.webp",
    link: "#",
    tags: ["PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "Web Server Configuration. Setup and optimize Apache with PHP",
      "Install and manage MySQL databases",
      "Perform data backup and recovery",
      "Configure and renew Let’s Encrypt SSL certificates",
      "Investigate server issues (e.g., Apache down, PHP errors)",
      "Configure required extensions for apps",
    ],
    demoUrl: "#",
    codeUrl: "#",
    architecture: {
      frontend: ["#"],
      backend: ["PHP"],
      database: ["MYSQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 0,
      branches: 1,
      transactions: 0,
      performance: "99.9% uptime",
    }
  },
  {
    title: "Integration with Autocount System via Panda API",
    description: "Integrated ERP modules such as Sales and Purchase with the Autocount accounting system using the third-party Panda API. Utilized Postman for testing and validating API endpoints to ensure smooth and accurate transaction synchronization between systems",
    image: "/projects/tmg-p2a.webp",
    link: "#",
    tags: ["PHP", "MySQL", "On-premise Ubuntu Server"],
    features: [
      "Connected ERP to Autocount through Panda API",
      "Enabled scheduled sync for Sales and Purchases transactions",
      "Used Postman to test and validate Panda API endpoints",
      "Translated ERP data fields to match Panda API requirements",
      "Handled formatting for dates, tax codes, customer/supplier IDs, and item codes",
      "Captured and logged failed syncs for review",
      "Scheduled sync jobs via cron jobs",
    ],
    demoUrl: "#",
    codeUrl: "#",
    architecture: {
      frontend: ["#"],
      backend: ["PHP"],
      database: ["MYSQL"],
      deployment: ["On-premise Ubuntu Server"]
    },
    metrics: {
      users: 0,
      branches: 10,
      transactions: 50000,
      performance: "99.9% uptime",
    }
  },
  {
    title: "ERP System for Shared Clients",
    description: "Developed a modular and multi-tenant ERP system designed for shared clients, covering core business functions such as sales, purchases, inventory, HR, and consignment transactions. The system is scalable, configurable per client, and supports third-party integrations like SQL Accounting.",
    image: "/projects/shared-fusion.webp",
    link: "https://sb-fusion.alliedprotocol.com",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "Cloud Server"],
    features: [
      "User Management & Security",
      "Master Data & Pricing Control",
      "Multi-Tenant Support",
      "Create and manage quotations, sales orders, and Sales invoices, Customer payments",
      "Track customer payments and aging balances",
      "Manage purchase requests, purchase orders, and goods receipts",
      "Track supplier bills and payments",
      "Real-time tracking of stock across multiple warehouses and branches",
      "Handle stock-in/out, transfers, and inventory adjustments", 
      "Allow clients to distribute stock to consignee stores/locations",
      "Record sales made by consignees and generate invoices only for sold items",
      "Generate consignment reports showing stock movement, sales, and balances",
      "Full audit trail of system activities",
      "Detailed reports (sales, purchases, stock, consignment) with export options (Excel, PDF)",
      "Export transaction data to Excel format for integration with SQL Accounting system",
      "e-Invoice (LHDN Integration)",
      "Automatic data synchronization to POS terminals",
    ],
    demoUrl: "https://sb-fusion.alliedprotocol.com/",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["Cloud Server"]
    },
    metrics: {
      users: 30,
      branches: 50,
      transactions: 50000,
      performance: "99.9% uptime",
    }
  }, {
    title: "Integration with e-Invoice LHDN (Malaysia)",
    description: "Integrated ERP system with LHDN’s e-Invoice platform using a third-party API provider to ensure compliance with Malaysia’s digital tax reporting regulations.",
    image: "/projects/e-invoice.webp",
    link: "https://sb-myinvoice.alliedprotocol.com/tmg/selfentry?cc=TE",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL", "On-premise Ubuntu Server", "Cloud Server"],
    features: [
      "Connected to LHDN via third-party e-Invoice API provider",
      "Automated submission of sales invoices and credit notes",
      "Integration modules covered: Sales, Purchase, Credit Note",
      "Handles response parsing and error logging",
      "Used Postman for API testing and validation"
    ],
    demoUrl: "https://sb-myinvoice.alliedprotocol.com/tmg/selfentry?cc=TE",
    codeUrl: "#",
    architecture: {
      frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      backend: ["PHP (custom framework)"],
      database: ["MySQL"],
      deployment: ["On-premise Ubuntu Server", "Cloud Server"]
    },
    metrics: {
      users: 30,
      branches: 50,
      transactions: 50000,
      performance: "99.9% uptime",
    }
  },
]; 