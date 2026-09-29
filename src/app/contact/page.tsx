"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { AIChatbot } from "@/components/chatbot/chatbot";
import { Mail, Github, Linkedin, Facebook, MapPin, Phone, Award, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MAP_EMBED_SRC = "https://www.google.com/maps?q=Barangay%20Sumpong%2C%20Malaybalay%20City%2C%20Bukidnon%2C%208700&output=embed";
const MAP_TITLE = "Barangay Sumpong, Malaybalay City, Bukidnon Location Map";

export default function ContactPage() {
  const [mapModalOpen, setMapModalOpen] = React.useState(false);

  const handleEmailClick = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=joenilpanal@gmail.com";
    window.open(gmailUrl, "_blank");
  };

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMapModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
              Let&apos;s <span className="text-sky-400">Connect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              I&apos;m always open to new opportunities and collaborations. Let&apos;s build something amazing together!
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
                     <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold">Joenil&apos;s Portfolio Bot</p>
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
                           <p className="text-foreground font-medium leading-relaxed">Barangay Sumpong, Malaybalay City, Bukidnon, 8700, Philippines</p>
                        </div>
                     </div>
                     <div className="rounded-2xl overflow-hidden border border-border h-56 relative group">
                        <iframe
                           src={MAP_EMBED_SRC}
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           title={MAP_TITLE}
                        />
                        <button
                           type="button"
                           onClick={() => setMapModalOpen(true)}
                           className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:ring-offset-2 focus:ring-offset-background touch-manipulation"
                           aria-label="Expand map to full view"
                        >
                           <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                 <Maximize2 className="w-6 h-6" />
                              </div>
                              <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                                 Click to Expand
                              </span>
                           </div>
                        </button>
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
                        <a href="https://www.linkedin.com/in/joenil-acero-576521205" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-2xl bg-accent/30 border border-border hover:border-sky-500/30 transition-all group">
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

      <Dialog open={mapModalOpen} onOpenChange={setMapModalOpen}>
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 !max-w-6xl !w-11/12 !p-0 !bg-transparent !border-none !rounded-none overflow-hidden !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 z-[200]"
        >
          <VisuallyHidden>
            <DialogTitle>{MAP_TITLE} Full View</DialogTitle>
            <DialogDescription>Expanded interactive map view of {MAP_TITLE}</DialogDescription>
          </VisuallyHidden>

          <AnimatePresence>
            {mapModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="w-full max-h-[90vh] flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-2xl"
              >
                <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-border bg-sky-500/5 shrink-0">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-foreground truncate">
                        Location Map
                      </h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-0.5 truncate">
                        Barangay Sumpong, Malaybalay City, Bukidnon
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMapModalOpen(false)}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-accent/50 hover:bg-destructive/10 border border-border hover:border-destructive/30 flex items-center justify-center text-muted-foreground hover:text-destructive transition-all group focus:outline-none focus:ring-2 focus:ring-destructive/30 touch-manipulation shrink-0"
                    aria-label="Close map"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                <div className="w-full h-[400px] sm:h-[550px] md:h-[70vh] bg-muted overflow-hidden flex-1 min-h-0">
                  <iframe
                    src={MAP_EMBED_SRC}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${MAP_TITLE} - Expanded View`}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 sm:px-8 py-4 sm:py-5 border-t border-border bg-muted/30 shrink-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Press <kbd className="px-2 py-0.5 rounded-md bg-accent border border-border text-[10px] sm:text-xs font-mono font-bold text-foreground">Esc</kbd> to close &middot; Click outside to dismiss
                  </p>
                  <a
                    href="https://www.google.com/maps?q=Barangay%20Sumpong%2C%20Malaybalay%20City%2C%20Bukidnon%2C%208700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-colors shadow-lg shadow-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-500/40 touch-manipulation"
                  >
                    Open in Google Maps
                    <Maximize2 className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}

