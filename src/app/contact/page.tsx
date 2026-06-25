"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { AIChatbot } from "@/components/chatbot/chatbot";
import { Mail, Github, Linkedin, Facebook, MapPin, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const handleEmailClick = () => {
    // Open Gmail in a new tab with pre-filled recipient
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=joenilpanal@gmail.com";
    window.open(gmailUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-background selection:bg-sky-500/30">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <span>Contact</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            >
              Let's <span className="text-sky-400">Connect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              I'm always open to new opportunities and collaborations. Let's build something amazing together!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Assistant Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
               <div className="bg-card border border-border rounded-3xl overflow-hidden h-full min-h-[500px] flex flex-col">
                  <div className="p-6 border-b border-border bg-sky-500/5">
                     <h3 className="text-xl font-bold text-foreground flex items-center">
                        <Award className="w-5 h-5 mr-2 text-sky-400" />
                        AI Assistant
                     </h3>
                     <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold">Joenil's Portfolio Bot</p>
                  </div>
                  <div className="flex-1 p-0">
                     <AIChatbot inline />
                  </div>
               </div>
            </motion.div>

            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1 space-y-6"
            >
               <div className="bg-card border border-border rounded-3xl p-8 space-y-8 h-full">
                  <div className="space-y-6">
                     <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joenilpanal@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                           <p className="text-foreground font-medium">joenilpanal@gmail.com</p>
                        </div>
                     </a>
                     <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Phone</p>
                           <p className="text-foreground font-medium">+63 975 686 4187</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                           <p className="text-foreground font-medium">Malaybalay City, Bukidnon, Philippines</p>
                        </div>
                     </div>
                     <a href="https://www.facebook.com/JoENIlacErO23OIIO7SSZ19O6O5" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">
                           <Facebook className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Facebook</p>
                           <p className="text-foreground font-medium">Joenil Acero</p>
                        </div>
                     </a>

                     <div className="grid grid-cols-2 gap-4">
                        <a href="https://github.com/Joenstalker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-2xl bg-accent/30 border border-border hover:border-sky-500/30 transition-all group">
                           <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-all">
                              <Github className="w-5 h-5" />
                           </div>
                           <span className="text-foreground font-medium">GitHub</span>
                        </a>
                        <a href="https://github.com/Joenstalker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-2xl bg-accent/30 border border-border hover:border-sky-500/30 transition-all group">
                           <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center text-muted-foreground group-hover:text-sky-400 transition-all">
                              <Linkedin className="w-5 h-5" />
                           </div>
                           <span className="text-foreground font-medium">LinkedIn</span>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Email Button Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-1"
            >
               <div className="bg-card border border-border rounded-3xl p-8 h-full flex flex-col justify-center">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-sky-500/10 rounded-3xl flex items-center justify-center mx-auto">
                      <Mail className="w-12 h-12 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Send me an Email</h3>
                      <p className="text-muted-foreground">Click the button below to compose an email in Gmail</p>
                    </div>
                    <Button 
                      onClick={handleEmailClick}
                      className="w-full bg-sky-500 hover:bg-sky-600 h-16 text-xl font-bold rounded-xl shadow-lg shadow-sky-500/20 transition-all"
                    >
                      Email Me
                      <Mail className="ml-3 w-6 h-6" />
                    </Button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

