import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "dental-clinic-management",
    title: "Dental Clinic Management System",
    description: "A SaaS Multitenancy Web Application and all-in-one digital platform designed to help dentists and clinic owners run their practices more efficiently. Instead of relying on paper files or multiple disconnected tools, our system brings everything into one secure place.",
    technologies: [
      "Laravel 12", 
      "PHP", 
      "Stancl Tenancy", 
      "Laravel Reverb", 
      "Laravel Cashier (Stripe)", 
      "Vue.js 3", 
      "Inertia.js", 
      "Tailwind CSS", 
      "Vite", 
      "MySQL"
    ],
    features: [
      "Effortless Organization: Manage patient records, medical histories, and treatment plans with just a few clicks.",
      "Smart Scheduling: A built-in calendar helps you organize appointments, while a dedicated website for your clinic allows patients to book their own visits online.",
      "Simple Billing: Track payments, manage subscriptions, and handle clinic finances without the headache of manual bookkeeping.",
      "Professional Branding: Each clinic gets its own private, branded space, giving your practice a modern and professional digital presence."
    ],
    imageUrl: "/dcms-projects/frontpage.png",
    githubUrl: "https://github.com/Joenstalker/new_dcms.git",
    category: "Fullstack",
    gallery: [
      "/dcms-projects/frontpage.png",
      "/dcms-projects/admin-images/dcms-admin-landing-page.png",
      "/dcms-projects/admin-images/dcms-admin-dashboard.png",
      "/dcms-projects/admin-images/dcms-admin-clinics.png",
      "/dcms-projects/admin-images/dcms-admin-plans.png",
      "/dcms-projects/admin-images/dcms-admin-billings.png",
      "/dcms-projects/admin-images/dcms-admin-platform-analytics.png",
      "/dcms-projects/admin-images/dcms-admin-features.png",
      "/dcms-projects/admin-images/dcms-admin-auditlogs.png",
      "/dcms-projects/admin-images/dcms-admin-support&ticket.png",
      "/dcms-projects/admin-images/dcms-admin-settings.png",
      "/dcms-projects/admin-images/dcms-admin-versioning.png",
      "/dcms-projects/tenant-images/dcms-tenant-landing-page.jpeg",
      "/dcms-projects/tenant-images/dcms-tenant-dashboard.png",
      "/dcms-projects/tenant-images/dcms-tenant-patients.png",
      "/dcms-projects/tenant-images/dcms-tenant-appointments.png",
      "/dcms-projects/tenant-images/dcms-tenant-medical.png",
      "/dcms-projects/tenant-images/dcms-tenant-billing&pos.png",
      "/dcms-projects/tenant-images/dcms-tenant-services.png",
      "/dcms-projects/tenant-images/dcms-tenant-staff.png"
    ]
  },
  {
    id: "mini-library",
    title: "MINI Library Management System",
    description: "The MINI Library Management System is a user-friendly digital platform designed to help schools and libraries easily organize their book collections and manage student records. It features an attractive online catalog for students to browse while providing administrators with simple tools to track book loans and automatically calculate late fees.",
    technologies: [
      "Laravel 11",
      "Laravel Breeze",
      "Tailwind CSS",
      "DaisyUI",
      "Alpine.js",
      "SweetAlert2",
      "Eloquent ORM",
      "MySQL"
    ],
    features: [
      "Attractive Online Catalog: Students can browse and search for books easily.",
      "Loan Tracking: Tools for administrators to track book loans and returns.",
      "Late Fee Calculation: Automatically calculate fees for overdue books.",
      "Student Records: Manage student data and borrowing history."
    ],
    imageUrl: "/mini-lms-projects/frontpage.png",
    githubUrl: "https://github.com/joenil-acero",
    category: "Fullstack",
    gallery: [
      "/mini-lms-projects/frontpage.png",
      "/mini-lms-projects/lms-dashboard.png",
      "/mini-lms-projects/lms-books.png",
      "/mini-lms-projects/lms-authors.png",
      "/mini-lms-projects/lms-students.png",
      "/mini-lms-projects/lms-transactions.png",
      "/mini-lms-projects/lms-users.png"
    ]
  },
  {
    id: "robotic-arm",
    title: "Building a Robotic Arm Using Potentiometers, Servos, and Arduino",
    description: "A collaborative group project focused on designing and constructing a robotic arm that mimics human movements. This hands-on experience involved programming Arduino to control servos using potentiometers, integrating sensors and actuators to create a functional robotic prototype.",
    technologies: ["Arduino", "Potentiometers", "Servos", "C++", "Robotics"],
    features: [
      "Human-like Movement Mimicry: Precisely controls the arm using potentiometer inputs.",
      "Sensor Integration: Real-time feedback and control for servo actuators.",
      "Educational Prototype: Designed as a learning tool for robotics and electronics.",
      "Collaborative Design: Built through group teamwork and technical problem-solving."
    ],
    imageUrl: "/robotic-arm-projects/frontpage.png",
    githubUrl: "https://github.com/joenil-acero",
    documentationUrl: "/robotic-arm-projects/robotic-arm.pdf",
    category: "IoT",
    gallery: [
      "/robotic-arm-projects/frontpage.png",
      "/robotic-arm-projects/arm1.png",
      "/robotic-arm-projects/arm2.png",
      "/robotic-arm-projects/roboticarm.mp4"
    ]
  },
  {
    id: "junkshop-pos",
    title: "Junkshop POS System",
    description: "Desktop POS and inventory management system for junkshop businesses.",
    technologies: [
      "Electron",
      "React",
      "Laravel",
      "PHP",
      "Node.js",
      "SQLite",
      "Tailwind CSS",
      "Vite"
    ],
    features: ["Inventory management", "POS", "Sales reports"],
    imageUrl: "/pos-projects/POS Web Landing Page.png",
    githubUrl: "https://github.com/joenil-acero",
    category: "Desktop",
    gallery: [
      "/pos-projects/POS Web Landing Page.png",
      "/pos-projects/POS Confirm Payout.png",
      "/pos-projects/POS Credit Tracker.png",
      "/pos-projects/POS Enter Weight.png",
      "/pos-projects/POS Inventory.png",
      "/pos-projects/POS Reports.png",
      "/pos-projects/POS Settings.png",
      "/pos-projects/POS Success Message.png",
      "/pos-projects/POS Terminal.png",
      "/pos-projects/POS Transactions.png",
      "/pos-projects/POS current order.png"
    ]
  }
];
