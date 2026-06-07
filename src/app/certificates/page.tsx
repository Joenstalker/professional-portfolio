"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { certificates } from "@/data/certificates";
import { motion, AnimatePresence } from "framer-motion";
import { AIChatbot } from "@/components/chatbot/chatbot";
import { ExternalLink, Award, X, Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Certificates & <span className="text-sky-400">Achievements</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and academic achievements that validate my technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-sky-500/50 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sky-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mb-4">{cert.date}</p>
                
                <div className="mb-6">
                  <span className="inline-block px-2 py-1 rounded bg-accent/30 text-muted-foreground text-[10px] font-mono">
                    {cert.category}
                  </span>
                </div>

                <div 
                  className="relative w-full aspect-video bg-slate-800 rounded-lg mb-6 overflow-hidden border border-white/5 cursor-zoom-in group/img"
                  onClick={() => setSelectedImage(cert.imageUrl)}
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/0f172a/38bdf8?text=Certificate';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-sky-500 p-2 rounded-full text-white scale-90 group-hover/img:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      View Original <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="!fixed !inset-0 !top-0 !left-0 !translate-x-0 !translate-y-0 !z-[200] !max-w-none !w-screen !h-screen bg-black/95 !border-none p-0 overflow-hidden flex items-center justify-center !rounded-none"
          showCloseButton={false}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all group shadow-2xl backdrop-blur-md"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {selectedImage && (
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage} 
                alt="Certificate Preview" 
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl select-none"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            
            {/* Click outside to close area */}
            <div 
              className="absolute inset-0 z-[-1] cursor-zoom-out" 
              onClick={() => setSelectedImage(null)} 
            />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <AIChatbot />
    </main>
  );
}
