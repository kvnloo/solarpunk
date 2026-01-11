import React, { useRef, useEffect, useState } from 'react';
import { TextReveal, FadeUp } from '../scrollytelling/TextReveal';

interface HeroSectionProps {
  sectionProgress: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ sectionProgress }) => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Hide scroll hint after user starts scrolling
  useEffect(() => {
    if (sectionProgress > 0.1) {
      setShowScrollHint(false);
    }
  }, [sectionProgress]);

  // Calculate opacity for fade out effect as user scrolls
  const contentOpacity = Math.max(0, 1 - sectionProgress * 2);
  const contentScale = 1 + sectionProgress * 0.1;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div
        className="text-center px-6 max-w-4xl mx-auto z-10"
        style={{
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
          transition: 'transform 0.1s linear',
        }}
      >
        {/* Subtitle */}
        <FadeUp delay={0.2}>
          <span className="inline-block text-sm md:text-base font-bold tracking-[0.3em] text-white/60 uppercase mb-6">
            Welcome to
          </span>
        </FadeUp>

        {/* Main Title */}
        <FadeUp delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            The Algorithmic
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Home
            </span>
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.6}>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your home, optimized for you. Sleep deeper. Focus better. Live fully.
          </p>
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.8}>
          <button className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
            <span>Explore the Vision</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </FadeUp>
      </div>

      {/* Scroll Hint */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        style={{
          opacity: showScrollHint ? 1 : 0,
          transform: showScrollHint ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <span className="text-sm text-white/50 tracking-wide">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
    </div>
  );
};

export default HeroSection;
