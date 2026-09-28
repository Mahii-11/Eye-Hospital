import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { HERO_SLIDES } from '../data/hospitalData';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto transition every 4 seconds as requested
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Framer motion variants for smooth slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.02
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <section
      id="home"
      aria-label="Hospital Photo Showcase"
      className="relative w-full bg-slate-950 overflow-hidden select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-width clean image container - strictly NO text overlays as instructed */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[700px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_SLIDES[currentIndex].imageSrc}
              alt={HERO_SLIDES[currentIndex].altText}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal Subtle Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 pointer-events-none z-20">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Minimal Clean Slider Indicators & Status Bottom Bar */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-lg text-white text-xs">
            {/* Slide Index Counter */}
            <span className="font-mono font-medium tracking-wider text-slate-300">
              0{currentIndex + 1} / 0{totalSlides}
            </span>

            <span className="w-px h-3.5 bg-white/30"></span>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === currentIndex
                      ? 'w-7 bg-white shadow-xs'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <span className="w-px h-3.5 bg-white/30"></span>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
              className="p-1 text-slate-300 hover:text-white transition-colors"
              title={isPaused ? 'Click to play' : 'Click to pause'}
            >
              {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            </button>
          </div>
        </div>

        {/* 4-Second Auto Slide Visual Progress Bar */}
        {!isPaused && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'linear' }}
              className="h-full bg-sky-400"
            />
          </div>
        )}
      </div>
    </section>
  );
};
