"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { AIChatbot } from "@/components/chatbot/chatbot";
import { Mail, Github, Linkedin, Facebook, Send, MapPin, Phone, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomCaptcha, getVerificationStatus, captchaQuestion } from "@opentech-lab/custom-captcha";

export default function ContactPage() {
  const Captcha = CustomCaptcha as any;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    // Check initial verification status on mount
    setIsVerified(getVerificationStatus());
  }, []);

  // Poll for verification status when captcha is active
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showCaptcha && !isVerified) {
      interval = setInterval(() => {
        const verified = getVerificationStatus();
        if (verified) {
          setIsVerified(true);
          setShowCaptcha(false);
          // If we were trying to submit, we could trigger it here
        }
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showCaptcha, isVerified]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      setShowCaptcha(true);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-background selection:bg-sky-500/30">
      <Navbar />
      
      {/* Captcha Component */}
      {showCaptcha && (
        <div className="dark">
          <Captcha 
            config={{
              questions: captchaQuestion as any,
              title: "Security Verification",
              questionsToSolve: 1,
              zIndex: 99999
            }}
          />
        </div>
      )}

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

            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-1"
            >
               <div className="bg-card border border-border rounded-3xl p-8 h-full">
                  <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Email"
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Your Message"
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-sky-500/50 transition-all resize-none placeholder:text-muted-foreground h-full min-h-[150px]"
                      />
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {submitStatus === "success" ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center justify-center space-x-2"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-bold">Message sent successfully!</span>
                        </motion.div>
                      ) : (
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-sky-500 hover:bg-sky-600 h-14 text-lg font-bold rounded-xl shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              {isVerified ? "Send Message" : "Verify & Send"} 
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      )}
                    </AnimatePresence>
                    
                    {!isVerified && !showCaptcha && (
                      <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold">
                        Verification required on first message
                      </p>
                    )}
                  </form>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

