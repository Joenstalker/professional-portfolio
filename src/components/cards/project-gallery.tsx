"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectTitle: string;
}

export function ProjectGallery({ isOpen, onClose, images, projectTitle }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isZoomed, setIsZoomed] = React.useState(false);

  // Reset zoom when image changes
  React.useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        showCloseButton={false}
        className="fixed inset-0 !max-w-none !w-screen !h-screen !p-0 !bg-black/98 !border-none overflow-hidden flex flex-col z-[200] !rounded-none !translate-x-0 !translate-y-0 !top-0 !left-0 duration-300"
      >
        <VisuallyHidden>
            <DialogTitle>{projectTitle} Full Screen View</DialogTitle>
            <DialogDescription>Full screen gallery for {projectTitle}</DialogDescription>
        </VisuallyHidden>
        
        {/* Top Controls */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[210] flex items-center space-x-4">
          {!isVideo(images[currentIndex]) && (
            <button 
              onClick={toggleZoom} 
              className="p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-xl transition-all border border-white/20 shadow-2xl"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? (
                <ZoomOut className="w-6 h-6 sm:w-8 sm:h-8" />
              ) : (
                <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8" />
              )}
            </button>
          )}
          
          <button 
            onClick={onClose} 
            className="p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-xl transition-all border border-white/20 group shadow-2xl"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Main View */}
        <div 
          className={cn(
            "relative flex-1 transition-all duration-300 flex justify-center",
            isZoomed ? "overflow-y-auto overflow-x-hidden items-start" : "overflow-hidden items-center p-4 sm:p-8 lg:p-12 mt-16 mb-32"
          )}
          onClick={() => isZoomed && setIsZoomed(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className={cn(
                "relative flex justify-center transition-all duration-300",
                isZoomed ? "w-full py-24 min-h-screen" : "w-full h-full items-center"
              )}
            >
              {isVideo(images[currentIndex]) ? (
                <video
                  src={images[currentIndex]}
                  controls
                  autoPlay
                  className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl"
                />
              ) : (
                <img
                  src={images[currentIndex]}
                  alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                  onClick={!isZoomed ? toggleZoom : undefined}
                  className={cn(
                    "drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300",
                    isZoomed 
                      ? "max-w-[95%] sm:max-w-[80%] h-auto cursor-zoom-out" 
                      : "max-w-full max-h-full w-auto h-auto object-contain cursor-zoom-in"
                  )}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Large Navigation Controls - Only show when not zoomed */}
          {!isZoomed && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 transition-all backdrop-blur-sm group z-[220]"
              >
                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 group-active:-translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 transition-all backdrop-blur-sm group z-[220]"
              >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 group-active:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Info & Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
               <h3 className="text-white/60 text-sm font-bold uppercase tracking-[0.2em]">{projectTitle}</h3>
               <div className="h-1 w-1 rounded-full bg-white/20" />
               <span className="text-sky-400 font-mono text-sm">{currentIndex + 1} / {images.length}</span>
            </div>
            
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide max-w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    idx === currentIndex 
                      ? "border-sky-500 scale-110 shadow-[0_0_20px_rgba(14,165,233,0.3)]" 
                      : "border-white/10 opacity-40 hover:opacity-100 hover:border-white/30"
                  }`}
                >
                  {isVideo(img) ? (
                    <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-sky-400 fill-sky-400" />
                    </div>
                  ) : (
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
