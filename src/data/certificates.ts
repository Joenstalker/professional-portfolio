export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link?: string;
  showOnCertificatesPage?: boolean;
  category: "Programming" | "Web Development" | "Database" | "IoT" | "Blockchain" | "Networking" | "Electrical";
}

export const certificates: Certificate[] = [
  {
    id: "topcit-level-4",
    title: "Level 4 (Proficient) Certification - 14th TOPCIT Philippines",
    issuer: "TOPCIT Philippines / Bukidnon State University",
    date: "July 23, 2026",
    imageUrl: "/topcit-level-4-achievement.png",
    showOnCertificatesPage: false,
    link: "/Download%20CV/TOPCIT%20Certificate.pdf",
    category: "Programming"
  },
  {
    id: "topcit",
    title: "TOPCIT - Test of Practical Competency in IT",
    issuer: "TOPCIT / Korea Ministry of Science and ICT",
    date: "2026",
    imageUrl: "/joenils-certss/TOPCIT.jpg",
    link: "/Download%20CV/TOPCIT%20Certificate.pdf",
    category: "Programming"
  },
  {
    id: "python-essentials-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy / OpenEDG",
    date: "2026",
    imageUrl: "/joenils-certss/Python Essentials 2.png",
    link: "https://www.credly.com/badges/13145059-521b-47c2-ace6-7daaebd7d606",
    category: "Programming"
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy / OpenEDG",
    date: "2026",
    imageUrl: "/joenils-certss/Python Essentials 1.png",
    link: "https://www.credly.com/badges/72adc099-433d-46ff-9ddb-7856bab4309c",
    category: "Programming"
  },
  {
    id: "ccna-2",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    imageUrl: "/joenils-certss/Networking2.png",
    category: "Networking"
  },
  {
    id: "ccna-1",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    imageUrl: "/joenils-certss/Networking1.png",
    category: "Networking"
  },
  {
    id: "sui-devcon",
    title: "Sui Code Camps DEVCON",
    issuer: "Sui Foundation",
    date: "2026",
    imageUrl: "/joenils-certss/devcon-cert.png",
    category: "Blockchain"
  },
  {
    id: "tesda-nc2-eim",
    title: "Certified Electrical Installation and Maintenance NC2",
    issuer: "TESDA (Technical Education and Skills Development Authority)",
    date: "",
    imageUrl: "/certificates/nc2.jpg",
    link: "/NC2.pdf",
    showOnCertificatesPage: true,
    category: "Electrical"
  },
  {
    id: "java-cert",
    title: "Java Programming Certificate",
    issuer: "Oracle / Coursera",
    date: "2023",
    imageUrl: "/certificates/java.png",
    category: "Programming"
  },
  {
    id: "web-cert",
    title: "Web Development Certificate",
    issuer: "Udemy / Meta",
    date: "2024",
    imageUrl: "/certificates/web.png",
    category: "Web Development"
  },
  {
    id: "db-cert",
    title: "Database Management Certificate",
    issuer: "IBM / Google",
    date: "2023",
    imageUrl: "/certificates/db.png",
    category: "Database"
  },
  {
    id: "iot-cert",
    title: "Arduino & IoT Certificate",
    issuer: "Arduino / Coursera",
    date: "2024",
    imageUrl: "/certificates/iot.png",
    category: "IoT"
  }
];
