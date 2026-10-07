import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}

export interface Hobby {
  title: string;
  description: string;
  photoCount: number;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PortfolioRoute {
  key: "home" | "about" | "projects" | "skills" | "certificates" | "contact";
  path: string;
  label: string;
  keywords: string[];
}

export interface DownloadFile {
  key: string;
  label: string;
  url: string;
  description: string;
  keywords: string[];
}

export interface MapLinks {
  embed: string;
  openUrl: string;
  directionsUrl: string;
  title: string;
}

export interface KnowledgeBase {
  personal: {
    fullName: string;
    firstName: string;
    title: string;
    experience: string;
    yearsExperience: string;
    motto: string;
    whoIsHe: string;
    detailedBio: string;
    philosophyQuote: string;
    location: {
      barangay: string;
      city: string;
      province: string;
      postalCode: string;
      country: string;
      fullAddress: string;
    };
    statusRelationship: string;
    partnerName: string;
    partnerProfile: string;
  };
  contact: {
    email: string;
    emailUrl: string;
    phone: string;
    socials: SocialLink[];
  };
  portfolio: {
    routes: PortfolioRoute[];
    downloads: DownloadFile[];
    map: MapLinks;
    sourceCode: {
      portfolioRepoUrl?: string;
      authorProfileUrl: string;
      profileLabel: string;
    };
  };
  stats: Stat[];
  hobbies: Hobby[];
  certifications: {
    nc2: {
      title: string;
      issuer: string;
      pdfUrl: string;
    };
    all: typeof certificates;
  };
  services: {
    programming: string[];
    nonProgramming: string[];
  };
  skills: {
    categorized: typeof skills;
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
    iot: string[];
    deployment: string[];
    desktop: string[];
    mobile: string[];
  };
  projects: typeof projects;
  faq: Array<{
    question: string;
    answer: string;
    keywords: string[];
    category: "personal" | "skills" | "projects" | "certificates" | "contact" | "services" | "hobbies" | "experience";
  }>;
}

export const KNOWLEDGE_BASE: KnowledgeBase = {
  personal: {
    fullName: "Joenil P. Acero",
    firstName: "Joenil",
    title: "Aspiring Fullstack & Application Developer",
    experience: "Since 2022 to present",
    yearsExperience: "3+ years",
    motto: "Build with excellence. Serve with purpose. Grow in faith.",
    whoIsHe: `Joenil Acero is a Filipino IT professional in the making, a full-stack developer, system builder, problem solver, and a man of faith who believes technology can be used to create practical solutions for real-world problems.

He is a builder of systems, solutions, skills, and faith. Someone who is preparing himself today for the opportunities and responsibilities he hopes to carry tomorrow.`,
    detailedBio: `As a developer, Joenil has experience working with Java, PHP, MySQL, web development technologies, and modern software concepts. Beyond technology, he is deeply interested in Christian ministry, Bible study, and leadership development.

His interests include:
• Software & Full-Stack Development
• System Design & Business Solutions
• Christian Ministry & Bible Teaching
• Entrepreneurship & Community Service

Current Status: Learning continuously, Building constantly, Trusting God daily, and Refusing to stay average.`,
    philosophyQuote: "I have an insatiable curiosity for technology because it knows no limits. It is a field that is constantly evolving every day, and I am driven by the challenge of staying at the forefront of that evolution.",
    location: {
      barangay: "Barangay Sumpong",
      city: "Malaybalay City",
      province: "Bukidnon",
      postalCode: "8700",
      country: "Philippines",
      fullAddress: "Barangay Sumpong, Malaybalay City, Bukidnon, 8700, Philippines"
    },
    statusRelationship: "In a relationship",
    partnerName: "Thrie Jie Barcina",
    partnerProfile: "https://www.facebook.com/thriejie.barcina"
  },

  contact: {
    email: "joenilpanal@gmail.com",
    emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=joenilpanal@gmail.com",
    phone: "+63 975 686 4187",
    socials: [
      {
        platform: "facebook",
        label: "Joenil Acero",
        url: "https://www.facebook.com/JoENIlacErO23OIIO7SSZ19O6O5"
      },
      {
        platform: "github",
        label: "Joenstalker",
        url: "https://github.com/Joenstalker"
      },
      {
        platform: "linkedin",
        label: "Joenil Acero",
        url: "https://www.linkedin.com/in/joenil-acero-576521205"
      }
    ]
  },

  portfolio: {
    routes: [
      { key: "home", path: "/", label: "Home", keywords: ["home", "landing page", "main page", "front page", "go home"] },
      { key: "about", path: "/about", label: "About Me", keywords: ["about", "about me", "about yourself", "tell me about", "go to about", "open about"] },
      { key: "projects", path: "/projects", label: "Projects", keywords: ["project", "projects", "show projects", "open projects", "go to projects", "portfolio work"] },
      { key: "skills", path: "/skills", label: "Technologies / Skills", keywords: ["skill", "skills", "technology", "technologies", "tech stack", "show skills", "open skills", "go to skills"] },
      { key: "certificates", path: "/certificates", label: "Certificates", keywords: ["certificate", "certificates", "certification", "certifications", "award", "awards", "show certificates", "open certificates", "go to certificates"] },
      { key: "contact", path: "/contact", label: "Contact", keywords: ["contact", "contact me", "get in touch", "hire", "show contact", "open contact", "go to contact"] }
    ],
    downloads: [
      {
        key: "cv",
        label: "Joenil Acero CV.pdf",
        url: "/Download%20CV/Joenil%20Acero%20CV.pdf",
        description: "Full curriculum vitae / resume for Joenil P. Acero.",
        keywords: ["cv", "resume", "download cv", "download resume", "send resume", "send cv", "show cv", "biodata"]
      },
      {
        key: "topcit-pdf",
        label: "TOPCIT Certificate.pdf",
        url: "/Download%20CV/TOPCIT%20Certificate.pdf",
        description: "Official TOPCIT certificate PDF.",
        keywords: ["topcit pdf", "topcit download", "topcit certificate file"]
      }
    ],
    map: {
      embed: "https://www.google.com/maps?q=Barangay%20Sumpong%2C%20Malaybalay%20City%2C%20Bukidnon%2C%208700&output=embed",
      openUrl: "https://www.google.com/maps?q=Barangay%20Sumpong%2C%20Malaybalay%20City%2C%20Bukidnon%2C%208700",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Barangay%20Sumpong%2C%20Malaybalay%20City%2C%20Bukidnon%2C%208700",
      title: "Barangay Sumpong, Malaybalay City, Bukidnon Location Map"
    },
    sourceCode: {
      authorProfileUrl: "https://github.com/Joenstalker",
      profileLabel: "github.com/Joenstalker",
      portfolioRepoUrl: undefined
    }
  },

  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Known", value: `${skills.length}+` },
    { label: "Years of Experience", value: "3+" },
    { label: "Commitment", value: "100%" }
  ],

  hobbies: [
    {
      title: "Pickle Ball",
      description: "Staying active and competitive on the court with fast-paced rallies.",
      photoCount: 3
    },
    {
      title: "Billiards",
      description: "Focusing the mind with strategic shots and precise positioning.",
      photoCount: 1
    },
    {
      title: "Coffee Sessions",
      description: "Fueling creativity one cup at a time in cozy cafés.",
      photoCount: 1
    },
    {
      title: "Hiking",
      description: "Exploring nature trails and reaching breathtaking mountain summits.",
      photoCount: 2
    },
    {
      title: "Travel",
      description: "Discovering new places, cultures, and unforgettable experiences.",
      photoCount: 3
    }
  ],

  certifications: {
    nc2: {
      title: "Certified Electrical Installation and Maintenance NC2",
      issuer: "TESDA (Technical Education and Skills Development Authority)",
      pdfUrl: "/NC2.pdf"
    },
    all: certificates
  },

  services: {
    programming: [
      "POS (Desktop & Mobile Offline)",
      "Fullstack Web Development",
      "Game Development",
      "AI Automation (Exploring)",
      "SaaS Development"
    ],
    nonProgramming: [
      "CCTV Installation",
      "Electrical Installation",
      "Maintenance"
    ]
  },

  skills: {
    categorized: skills,
    frontend: skills.filter(s => s.category === "Frontend").map(s => s.name),
    backend: skills.filter(s => s.category === "Backend").map(s => s.name),
    database: skills.filter(s => s.category === "Database").map(s => s.name),
    tools: skills.filter(s => s.category === "Tools").map(s => s.name),
    iot: skills.filter(s => s.category === "IoT/Hardware").map(s => s.name),
    deployment: skills.filter(s => s.category === "Deployment").map(s => s.name),
    desktop: skills.filter(s => s.category === "Desktop").map(s => s.name),
    mobile: skills.filter(s => s.category === "Mobile").map(s => s.name)
  },

  projects,

  faq: [
    {
      question: "Tell me about yourself.",
      answer: "My name is Joenil Acero. I am an aspiring full-stack developer with experience in Java, PHP, MySQL, web development, and system design. Throughout my academic journey, I have developed several projects including Dental Clinic Management Systems, Inventory Management Systems, Car Rental Platforms, POS Systems, and Arduino-based automation projects. I enjoy solving real-world problems through technology and continuously improving my technical and professional skills.",
      keywords: ["about", "yourself", "introduce", "who is", "tell me"],
      category: "personal"
    },
    {
      question: "Why should we hire you?",
      answer: "You should hire me because I am eager to learn, adaptable, and committed to delivering quality work. I have experience building complete systems from planning and development to testing and deployment. I am not afraid to learn new technologies and I enjoy taking ownership of projects and finding practical solutions to challenges.",
      keywords: ["hire", "why choose", "why select"],
      category: "personal"
    },
    {
      question: "What are your strengths?",
      answer: "My strengths include problem-solving, persistence, adaptability, and continuous learning. When I encounter a challenge, I take time to research, learn, and implement solutions rather than giving up. I also work well independently and can collaborate effectively with others.",
      keywords: ["strength", "strengths", "strong", "best"],
      category: "personal"
    },
    {
      question: "What is your greatest weakness?",
      answer: "Sometimes I spend too much time refining a project because I always look for ways to improve it. However, I have been learning to balance quality with deadlines by prioritizing the most important tasks first.",
      keywords: ["weakness", "weaknesses", "improve", "flaw"],
      category: "personal"
    },
    {
      question: "Tell us about a project you're proud of.",
      answer: "One project I am particularly proud of is a Car Rental Management System that includes booking management, customer management, vehicle tracking, reporting, and administrative dashboards. It allowed me to apply both frontend and backend development skills while solving a real business need.",
      keywords: ["project proud", "favorite project", "best project"],
      category: "projects"
    },
    {
      question: "How do you handle pressure?",
      answer: "I stay organized and focus on solving one problem at a time. When facing tight deadlines, I prioritize tasks based on importance and maintain clear communication with team members to ensure objectives are achieved efficiently.",
      keywords: ["pressure", "stress", "deadline", "tight"],
      category: "personal"
    },
    {
      question: "How do you deal with difficult problems?",
      answer: "I start by analyzing the root cause, breaking the problem into smaller parts, researching possible solutions, and testing different approaches. I believe every technical problem can be solved through patience, learning, and persistence.",
      keywords: ["difficult", "problem", "challenge", "troubleshoot"],
      category: "personal"
    },
    {
      question: "What technologies are you familiar with?",
      answer: "I have experience with Laravel 12, Vue.js 3, Inertia.js, PHP, Java, MySQL, HTML, CSS, JavaScript, database design, system analysis, and web application development. I also have experience working with Arduino and sensor-based automation projects.",
      keywords: ["technology", "technologies", "tech stack", "familiar", "know"],
      category: "skills"
    },
    {
      question: "Are you willing to learn new technologies?",
      answer: "Absolutely. Technology evolves quickly, and continuous learning is essential. I enjoy exploring new tools, frameworks, and methodologies that can improve my effectiveness as a developer.",
      keywords: ["learn new", "willing to learn", "new tech", "adapt"],
      category: "skills"
    },
    {
      question: "Where do you see yourself in five years?",
      answer: "In five years, I see myself as a highly skilled software developer contributing to meaningful projects, leading technical initiatives, and continuously growing both professionally and personally.",
      keywords: ["five years", "5 years", "future", "career goal", "where see"],
      category: "personal"
    },
    {
      question: "Describe your work ethic.",
      answer: "I believe in responsibility, integrity, and excellence. Once I commit to a task, I do my best to complete it properly and continuously look for opportunities to improve the quality of my work.",
      keywords: ["work ethic", "ethic", "professionalism", "work style"],
      category: "personal"
    },
    {
      question: "How do you work in a team?",
      answer: "I communicate openly, respect different perspectives, and contribute wherever I can. I believe successful teamwork comes from collaboration, accountability, and a shared commitment to achieving goals.",
      keywords: ["team", "teamwork", "group", "collaborate"],
      category: "personal"
    },
    {
      question: "What motivates you?",
      answer: "I am motivated by learning, solving problems, building useful systems, and seeing the positive impact of my work on businesses and users.",
      keywords: ["motivate", "motivation", "drive", "inspire"],
      category: "personal"
    },
    {
      question: "What makes you different from other applicants?",
      answer: "Beyond technical skills, I bring determination, adaptability, and a genuine passion for technology. I continuously seek improvement and am willing to put in the effort necessary to grow and contribute effectively.",
      keywords: ["different", "unique", "stand out", "other applicant"],
      category: "personal"
    },
    {
      question: "Introduce yourself in one minute.",
      answer: "I am Joenil Acero, an aspiring full-stack developer with experience in Java, PHP, MySQL, and web development. I enjoy building systems that solve real-world problems, such as SaaS dental clinic management systems, inventory systems, POS systems, and car rental platforms. I am passionate about continuous learning, problem-solving, and using technology to help businesses become more efficient.",
      keywords: ["one minute", "elevator pitch", "quick intro", "short intro"],
      category: "personal"
    },
    {
      question: "What are your career goals?",
      answer: "My goal is to become a highly skilled software engineer capable of designing and developing scalable systems that provide real value to organizations and communities. I also want to continue growing in leadership and project management.",
      keywords: ["career goal", "career goals", "ambition", "professional goal"],
      category: "personal"
    },
    {
      question: "Why did you choose Information Technology?",
      answer: "I chose Information Technology because I enjoy solving problems and creating solutions through technology. I am fascinated by how software can improve business operations and make people's lives easier.",
      keywords: ["choose IT", "why IT", "information technology", "course", "degree"],
      category: "personal"
    },
    {
      question: "What is your proudest achievement?",
      answer: "One of my proudest achievements is successfully developing multiple functional systems that integrate databases, user interfaces, and business processes. These projects strengthened my technical skills and taught me how to solve practical challenges. I also earned certifications including TOPCIT, Python Essentials 1 & 2 from Cisco, CCNA 1 & 2, and a TESDA NC2 Electrical Installation and Maintenance certificate.",
      keywords: ["proudest", "achievement", "greatest", "accomplishment"],
      category: "personal"
    },
    {
      question: "What motivates you to work hard?",
      answer: "I am motivated by growth, learning, and the opportunity to create meaningful solutions. Seeing a project become functional and useful to others gives me a strong sense of accomplishment.",
      keywords: ["work hard", "hardworking", "motivation work"],
      category: "personal"
    },
    {
      question: "What do you do when you don't know the answer?",
      answer: "I research the problem, consult documentation, seek advice from experienced professionals when appropriate, and test different solutions until I understand the issue.",
      keywords: ["don't know", "no answer", "unfamiliar", "stuck"],
      category: "personal"
    },
    {
      question: "Are you comfortable working under supervision?",
      answer: "Yes. I value feedback because it helps me improve. I am also capable of working independently when given responsibilities and objectives.",
      keywords: ["supervision", "supervisor", "manager", "under"],
      category: "personal"
    },
    {
      question: "Are you comfortable working independently?",
      answer: "Yes. Many of my projects required self-learning, planning, development, testing, and implementation. I am comfortable taking ownership of tasks while maintaining communication with the team.",
      keywords: ["independently", "alone", "solo", "self starter"],
      category: "personal"
    },
    {
      question: "How do you manage your time?",
      answer: "I prioritize tasks based on deadlines and importance. I break larger projects into manageable tasks and monitor progress to stay productive.",
      keywords: ["time manage", "manage time", "schedule", "organize"],
      category: "personal"
    },
    {
      question: "How do you react to criticism?",
      answer: "I view constructive criticism as an opportunity to improve. I listen carefully, evaluate the feedback objectively, and apply changes when appropriate.",
      keywords: ["criticism", "feedback", "correction", "comment"],
      category: "personal"
    },
    {
      question: "Tell me about a time you faced a challenge.",
      answer: "During system development, I encountered database integration issues that affected application functionality. I systematically analyzed the problem, researched solutions, tested alternatives, and successfully resolved the issue while improving my understanding of database management.",
      keywords: ["faced challenge", "challenge time", "difficult time", "overcome"],
      category: "personal"
    },
    {
      question: "What programming languages do you know?",
      answer: "I have experience with PHP (Laravel), JavaScript (Vue.js, React), TypeScript, Java, C++, Python, HTML, CSS, SQL, and related web development technologies.",
      keywords: ["programming language", "language", "languages", "coding language"],
      category: "skills"
    },
    {
      question: "What database systems have you used?",
      answer: "I have experience working with MySQL, PostgreSQL, SQLite, and MongoDB for designing databases, managing records, and implementing CRUD operations in software systems.",
      keywords: ["database", "db", "sql", "nosql"],
      category: "skills"
    },
    {
      question: "What is your approach to learning new technology?",
      answer: "I start with documentation, tutorials, and practical projects. I learn best by building real applications and applying concepts directly.",
      keywords: ["approach learn", "learning approach", "study", "how learn"],
      category: "skills"
    },
    {
      question: "How would your classmates describe you?",
      answer: "They would likely describe me as hardworking, resourceful, curious, and willing to help others solve technical problems.",
      keywords: ["classmates describe", "friends describe", "others describe", "how describe"],
      category: "personal"
    },
    {
      question: "What kind of work environment do you prefer?",
      answer: "I prefer an environment that encourages learning, collaboration, innovation, and professional growth.",
      keywords: ["work environment", "environment", "culture", "preferred work"],
      category: "personal"
    },
    {
      question: "How do you ensure quality in your work?",
      answer: "I test thoroughly, review functionality carefully, seek feedback, and continuously improve areas that need refinement.",
      keywords: ["ensure quality", "quality work", "deliver quality", "testing"],
      category: "personal"
    },
    {
      question: "What would you do if assigned a task you've never done before?",
      answer: "I would learn the required skills, research best practices, ask questions when necessary, and work diligently until I complete the task successfully.",
      keywords: ["new task", "never done", "unfamiliar task", "first time"],
      category: "personal"
    },
    {
      question: "How do you prioritize multiple deadlines?",
      answer: "I assess urgency, impact, and complexity. Then I create a plan to ensure critical tasks are completed first while maintaining quality.",
      keywords: ["prioritize", "multiple deadline", "many tasks", "urgent"],
      category: "personal"
    },
    {
      question: "What is your biggest professional strength?",
      answer: "My biggest strength is persistence. I don't give up easily when faced with technical challenges and continuously seek solutions until the problem is resolved.",
      keywords: ["biggest strength", "professional strength", "greatest strength"],
      category: "personal"
    },
    {
      question: "Why are you interested in this position?",
      answer: "This position aligns with my technical interests and career goals. It provides opportunities to apply my skills, gain valuable experience, and contribute to meaningful projects.",
      keywords: ["interested position", "position", "job interest", "why apply"],
      category: "personal"
    },
    {
      question: "What can you contribute to our company?",
      answer: "I can contribute technical skills, a strong willingness to learn, a positive attitude, and dedication to delivering quality results.",
      keywords: ["contribute", "offer company", "what bring", "value add"],
      category: "personal"
    },
    {
      question: "How do you handle failure?",
      answer: "I analyze what went wrong, learn from the experience, and use those lessons to improve future performance.",
      keywords: ["handle failure", "failure", "fail", "mistake"],
      category: "personal"
    },
    {
      question: "What is your leadership style?",
      answer: "I lead by example, encourage collaboration, maintain open communication, and focus on helping the team achieve shared goals.",
      keywords: ["leadership", "leader", "lead style", "management style"],
      category: "personal"
    },
    {
      question: "How do you stay updated with technology trends?",
      answer: "I follow technology news, explore new frameworks, work on personal projects, and continuously study emerging tools and best practices.",
      keywords: ["stay updated", "tech trends", "keep up", "current with tech"],
      category: "skills"
    },
    {
      question: "What does professionalism mean to you?",
      answer: "Professionalism means integrity, accountability, respect, reliability, and consistently producing quality work.",
      keywords: ["professionalism", "professional mean", "be professional"],
      category: "personal"
    },
    {
      question: "What are your hobbies outside work?",
      answer: "I enjoy software development projects, learning new technologies, studying the Bible, participating in ministry activities, exploring business ideas, playing pickle ball, billiards, hiking, traveling, and relaxing with coffee sessions.",
      keywords: ["hobbies", "hobby", "outside work", "free time", "interests", "pastime"],
      category: "hobbies"
    },
    {
      question: "What are your long-term ambitions?",
      answer: "I aim to become a highly competent software professional, contribute to impactful projects, and continuously grow both technically and personally.",
      keywords: ["long term", "ambition", "long range", "lifetime goal"],
      category: "personal"
    },
    {
      question: "Why do you think you'll succeed here?",
      answer: "I am adaptable, eager to learn, and committed to excellence. I consistently seek improvement and work hard to achieve goals.",
      keywords: ["succeed", "successful", "why succeed"],
      category: "personal"
    },
    {
      question: "If hired, what will be your first priority?",
      answer: "My first priority will be understanding the company's processes, learning the team's workflow, and becoming productive as quickly as possible.",
      keywords: ["first priority", "if hired", "first thing", "first week"],
      category: "personal"
    },
    {
      question: "What makes you passionate about technology?",
      answer: "Technology allows me to create solutions, solve problems, improve efficiency, and positively impact people's lives through innovation.",
      keywords: ["passionate", "passion tech", "love tech", "why tech"],
      category: "personal"
    },
    {
      question: "Why should we choose you over other candidates?",
      answer: "While others may have more experience, I bring strong determination, adaptability, a growth mindset, practical project experience, and a genuine commitment to continuous learning and improvement.",
      keywords: ["choose over", "over other", "better than", "why you"],
      category: "personal"
    },
    {
      question: "What are three words that describe Joenil?",
      answer: "Persistent, Adaptable, Growth-Oriented.",
      keywords: ["three words", "describe you", "3 words", "words describe"],
      category: "personal"
    },
    {
      question: "Describe Joenil's personality.",
      answer: "Joenil is a curious and motivated individual who enjoys learning, solving problems, and building useful solutions. He is goal-oriented, responsible, and committed to personal and professional development.",
      keywords: ["personality", "character", "describe personality", "what kind"],
      category: "personal"
    },
    {
      question: "What is Joenil known for?",
      answer: "Joenil is known for his passion for software development, his willingness to take on challenging projects, and his commitment to continuous learning and improvement.",
      keywords: ["known for", "famous for", "recognized for"],
      category: "personal"
    }
  ]
};
