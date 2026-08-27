"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIChatbot } from "@/components/chatbot/chatbot";
import { motion } from "framer-motion";
import { Code, Briefcase, Clock, Heart, Terminal, ExternalLink, Sparkles, ChevronRight, X, ChevronLeft, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { skills } from "@/data/skills";
import Link from "next/link";

type HobbyImage = {
  src: string;
  alt: string;
};

type Hobby = {
  title: string;
  icon: string;
  description: string;
  images: HobbyImage[];
  accent: string;
};

const hobbies: Hobby[] = [
  {
    title: "Pickle Ball",
    icon: "🎾",
    description: "Staying active and competitive on the court with fast-paced rallies",
    accent: "from-yellow-500/20 to-emerald-500/20",
    images: [
      { src: "/pickle1.jpg", alt: "Pickle Ball game action" },
      { src: "/pickle2.jpg", alt: "Pickle Ball court" },
      { src: "/pickle3.jpg", alt: "Pickle Ball match" },
    ],
  },
  {
    title: "Billiards",
    icon: "🎱",
    description: "Focusing the mind with strategic shots and precise positioning",
    accent: "from-sky-500/20 to-indigo-500/20",
    images: [
      { src: "/billiard1.jpg", alt: "Billiards table shot" },
    ],
  },
  {
    title: "Coffee Sessions",
    icon: "☕",
    description: "Fueling creativity one cup at a time in cozy cafés",
    accent: "from-amber-500/20 to-orange-500/20",
    images: [
      { src: "/coffee1.jpg", alt: "Coffee cup" },
    ],
  },
  {
    title: "Hiking",
    icon: "🥾",
    description: "Exploring nature trails and reaching breathtaking mountain summits",
    accent: "from-emerald-500/20 to-teal-500/20",
    images: [
      { src: "/hiking1.jpg", alt: "Mountain trail" },
      { src: "/hiking2.jpg", alt: "Hiking summit view" },
    ],
  },
  {
    title: "Travel",
    icon: "✈️",
    description: "Discovering new places, cultures, and unforgettable experiences",
    accent: "from-sky-500/20 to-cyan-500/20",
    images: [
      { src: "/travel1.jpg", alt: "Travel destination" },
      { src: "/travel2.jpg", alt: "Scenic travel spot" },
      { src: "/travel3.jpg", alt: "Travel adventure" },
    ],
  },
];

export default function AboutPage() {
  const marqueeSkills = skills.filter(s =>
    ["Frontend", "Backend", "Database", "Tools", "IoT/Hardware", "Deployment"].includes(s.category)
  );

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, value: "10+", label: "Projects Completed" },
    { icon: <Code className="w-5 h-5" />, value: `${skills.length}+`, label: "Technologies" },
    { icon: <Clock className="w-5 h-5" />, value: "3+", label: "Years of Experience" },
    { icon: <Heart className="w-5 h-5" />, value: "100%", label: "Commitment" },
  ];

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState<HobbyImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const [activeHobbyTitle, setActiveHobbyTitle] = React.useState("");

  const openLightbox = (hobby: Hobby, startIndex: number = 0) => {
    setLightboxImages(hobby.images);
    setLightboxIndex(startIndex);
    setActiveHobbyTitle(`${hobby.icon} ${hobby.title}`);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
    setActiveHobbyTitle("");
  };

  const totalImages = lightboxImages.length;

  const nextImage = React.useCallback(() => {
    if (totalImages > 0) {
      setLightboxIndex((i) => (i + 1) % totalImages);
    }
  }, [totalImages]);

  const prevImage = React.useCallback(() => {
    if (totalImages > 0) {
      setLightboxIndex((i) => (i - 1 + totalImages) % totalImages);
    }
  }, [totalImages]);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <main className="min-h-screen bg-background selection:bg-sky-500/30">
      <Navbar />

      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
                <span>About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turning Ideas Into <br />
                <span className="text-sky-400">Real-World Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a passionate developer with experience in building web applications, desktop systems, and interactive games.
                I love combining creativity and logic to develop systems that are not only functional but also meaningful.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl px-8 h-12 transition-all duration-300">
                  <Link href="/projects">
                    View My Projects
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-accent text-foreground rounded-xl px-8 h-12 transition-all duration-300">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center space-y-3 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground uppercase tracking-wider">Technologies I Use</h3>
              </div>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent rounded-xl" asChild>
                <Link href="/skills">
                  See All Technologies <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                animate={{
                  x: [0, "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                className="flex flex-none gap-12 py-4"
              >
                {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className="flex flex-col items-center space-y-4 group min-w-[120px]"
                  >
                    <div className="w-24 h-24 rounded-3xl bg-accent/30 border border-border flex items-center justify-center group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all duration-500 shadow-sm group-hover:shadow-sky-500/10 group-hover:-translate-y-1">
                      <div className="text-sky-400 font-bold text-xs uppercase text-center p-3 leading-tight tracking-tighter">
                        {skill.name}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>Get to Know Me Better</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Beyond <span className="text-sky-400 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">the Code</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
                Certifications, core values, and the personal interests that shape who I am as a developer and individual.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-7 rounded-2xl bg-gradient-to-br from-sky-500/5 via-sky-500/[0.02] to-transparent border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 flex items-center justify-center text-sky-400 shadow-inner border border-sky-500/10">
                  <span className="text-2xl">📜</span>
                </div>
                <h4 className="text-xl font-bold text-foreground tracking-tight">Certifications &amp; Background</h4>
              </div>
              <p className="text-muted-foreground leading-[1.75]">
                Beyond my technical skills in software development, I hold a{" "}
                <a
                  href="/NC2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-400 font-semibold hover:text-sky-300 underline decoration-sky-500/30 decoration-2 underline-offset-4 hover:decoration-sky-400/50 transition-all"
                >
                  Certified Electrical Installation and Maintenance NC2 (TESDA)
                  <ExternalLink className="w-3 h-3 ml-1.5 inline -mt-0.5 opacity-70" />
                </a>
                . This unique background bridges the gap between physical infrastructure and digital systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-7 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-emerald-500/[0.02] to-transparent border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-emerald-400 shadow-inner border border-emerald-500/10">
                  <span className="text-2xl">💭</span>
                </div>
                <h4 className="text-xl font-bold text-foreground tracking-tight">My Philosophy</h4>
              </div>
              <blockquote className="relative pl-5 border-l-2 border-emerald-500/30">
                <p className="text-muted-foreground leading-[1.75] italic text-[15px]">
                  &ldquo;I have an insatiable curiosity for technology because it knows no limits. It is a field that is constantly evolving every day, and I am driven by the challenge of staying at the forefront of that evolution.&rdquo;
                </p>
              </blockquote>
            </motion.div>
          </div>

          <div className="space-y-7">
            <div className="flex items-center justify-between gap-4 pb-2 border-b border-border/40">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10 shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground tracking-tight">Personal Hobbies</h4>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-semibold mt-0.5">
                    Click any photo to enlarge &middot; Use ← → arrows to navigate
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {hobbies.map((hobby, hobbyIdx) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: hobbyIdx * 0.06, duration: 0.5, ease: "easeOut" }}
                  className={`rounded-2xl border border-border/60 bg-gradient-to-br ${hobby.accent} p-6 sm:p-7 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 group/card`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 border border-border/60 flex items-center justify-center text-3xl shrink-0 shadow-sm group-hover/card:scale-110 transition-transform duration-300">
                      {hobby.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xl font-bold text-foreground tracking-tight">{hobby.title}</h5>
                      <p className="text-muted-foreground text-sm mt-2 leading-[1.7]">{hobby.description}</p>
                      <div className="inline-flex items-center gap-2 mt-3 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/10">
                        <span className="text-[11px] text-sky-400 font-bold uppercase tracking-wider">
                          {hobby.images.length} photo{hobby.images.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`grid gap-3 ${
                    hobby.images.length === 1 ? "grid-cols-1" :
                    hobby.images.length === 2 ? "grid-cols-2" :
                    "grid-cols-3"
                  }`}>
                    {hobby.images.map((img, imgIdx) => (
                      <button
                        key={`${hobby.title}-${imgIdx}`}
                        onClick={() => openLightbox(hobby, imgIdx)}
                        className="group relative overflow-hidden rounded-xl border border-border/40 bg-accent/20 aspect-[4/3] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:ring-offset-2 focus:ring-offset-background transition-all hover:border-sky-500/30"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 ring-1 ring-white/20 shadow-xl">
                            <ZoomIn className="w-5 h-5 text-white drop-shadow-md" />
                          </div>
                        </div>
                        {hobby.images.length > 1 && imgIdx === 0 && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-lg ring-1 ring-white/10">
                            +{hobby.images.length - 1} more
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mt-4 flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-br from-accent/20 via-background to-background/50 p-10 sm:p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative space-y-4">
                <div className="text-6xl">🌟</div>
                <h5 className="text-foreground font-bold text-2xl tracking-tight">Life is about Balance</h5>
                <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                  Code, create, and take time to enjoy every moment. The best ideas come when you step away from the keyboard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={(o) => !o && closeLightbox()}>
        <DialogContent
          showCloseButton={false}
          className="!max-w-7xl !w-[98vw] p-0 bg-black/97 border-white/10 sm:!rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5"
        >
          <DialogTitle className="sr-only">Lightbox: {activeHobbyTitle}</DialogTitle>
          <DialogDescription className="sr-only">Viewing hobby photos for {activeHobbyTitle}. Use arrow keys to navigate.</DialogDescription>

          <div className="relative">
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white/90 border border-white/10">
                  {hobbies.find(h => `${h.icon} ${h.title}` === activeHobbyTitle)?.icon || "✨"}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{activeHobbyTitle}</p>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-wider">
                    {lightboxImages.length > 0 ? `${lightboxIndex + 1} / ${lightboxImages.length}` : ""}
                  </p>
                </div>
              </div>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center aspect-video sm:aspect-[16/10] max-h-[85vh]">
              {lightboxImages[lightboxIndex] && (
                <img
                  src={lightboxImages[lightboxIndex].src}
                  alt={lightboxImages[lightboxIndex].alt}
                  className="w-full h-full object-contain"
                />
              )}

              {lightboxImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 group"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </>
              )}
            </div>

            {lightboxImages.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-2 p-4 bg-gradient-to-t from-black/80 to-transparent">
                {lightboxImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                      idx === lightboxIndex
                        ? "w-8 bg-sky-400"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <AIChatbot />
    </main>
  );
}
