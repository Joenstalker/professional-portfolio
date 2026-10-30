export interface HomepageStat {
  value: string;
  label: string;
}

export interface HomepageContent {
  hero: {
    greeting: string;
    firstName: string;
    lastName: string;
    role: string;
    summary: string;
    imageUrl: string;
  };
  about: {
    heading: string;
    accentHeading: string;
    description: string;
    stats: HomepageStat[];
  };
  achievement: {
    enabled: boolean;
    title: string;
    highlight: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    eventName: string;
    date: string;
    certificateUrl: string;
  };
}

export const defaultHomepageContent: HomepageContent = {
  hero: {
    greeting: "Hi, I'm",
    firstName: "Joenil",
    lastName: "Acero",
    role: "Full-Stack Developer Building Secure, Practical Information Systems",
    summary: "I design and develop web-based systems for organizations — from role-based management platforms and SaaS applications to document-focused public-service solutions with robust databases and access control.",
    imageUrl: "/profile.png",
  },
  about: {
    heading: "Turning Ideas Into",
    accentHeading: "Real-World Solutions",
    description: "I'm a passionate developer with experience in building web applications, desktop systems, and interactive games. I love combining creativity and logic to develop systems that are not only functional but also meaningful.",
    stats: [
      { value: "10+", label: "Projects Completed" },
      { value: "30+", label: "Technologies" },
      { value: "3+", label: "Years of Experience" },
      { value: "100%", label: "Commitment" },
    ],
  },
  achievement: {
    enabled: true,
    title: "TOPCIT Level 4",
    highlight: "(Proficient)",
    imageUrl: "/topcit-level-4-achievement.png",
    imageAlt: "BukSU announcement recognizing five BSIT students, including Joenil Acero, for earning Level 4 certification in the 14th TOPCIT Philippines",
    description: "I was one of five Bukidnon State University BSIT students to earn Level 4 certification in the 14th TOPCIT Philippines. Among 164 BukSU examinees, this recognition reflects strong practical skills in software development, data management, system architecture, and IT business.",
    eventName: "14th TOPCIT Philippines",
    date: "July 23, 2026",
    certificateUrl: "/Download%20CV/TOPCIT%20Certificate.pdf",
  },
};
