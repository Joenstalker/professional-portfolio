"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ProjectCard } from "@/components/cards/project-card";
import { ProjectGallery } from "@/components/cards/project-gallery";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { AIChatbot } from "@/components/chatbot/chatbot";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-background selection:bg-sky-500/30">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Featured <span className="text-sky-400">Projects</span></h2>
              <p className="text-muted-foreground max-w-xl">A selection of my recent work, ranging from full-stack web systems to hardware automation.</p>
            </div>
            <Button asChild variant="outline" className="border-border hover:bg-accent text-foreground">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => project.gallery && setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <SkillsGrid />

      {/* Project Gallery Modal */}
      {selectedProject && selectedProject.gallery && (
        <ProjectGallery 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          images={selectedProject.gallery}
          projectTitle={selectedProject.title}
        />
      )}
      
      <section className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to build something <span className="text-sky-400">extraordinary?</span></h2>
          <p className="text-muted-foreground mb-10 text-lg">Whether you have a project in mind or just want to say hi, my inbox is always open.</p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-10">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <AIChatbot />
    </main>
  );
}
