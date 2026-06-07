export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "IoT/Hardware" | "Deployment" | "Mobile" | "Desktop";
  icon?: string;
}

export const skills: Skill[] = [
  // Primary Technologies (from About section)
  { name: "Java", category: "Desktop" },
  { name: "JavaFX", category: "Desktop" },
  { name: "Spring Boot", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  
  // Additional Technologies
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Inertia.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vite", category: "Tools" },
   { name: "Composer", category: "Tools" },
   { name: "NPM", category: "Tools" },
   { name: "XAMPP", category: "Tools" },
   { name: "Arduino", category: "IoT/Hardware" },
  { name: "C++", category: "IoT/Hardware" },
  { name: "Node.js", category: "Backend" },
  { name: "Electron", category: "Desktop" },
  { name: "SQLite", category: "Database" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Vercel", category: "Deployment" },
  { name: "Render", category: "Deployment" }
];
