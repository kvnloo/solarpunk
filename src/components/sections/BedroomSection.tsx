import React from 'react';
import { SplitLayout } from '../scrollytelling/SplitLayout';
import { scrollTimeline } from '../../data/scrollTimeline';

interface BedroomSectionProps {
  sectionProgress: number;
}

export const BedroomSection: React.FC<BedroomSectionProps> = ({ sectionProgress }) => {
  const section = scrollTimeline.find((s) => s.id === 'bedroom');

  if (!section) return null;

  return (
    <div className="relative min-h-screen">
      {/* Background gradient for sleep/biological zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          opacity: sectionProgress,
        }}
      />

      <SplitLayout
        images={section.images}
        textContent={section.textContent}
        align="right"
        sectionProgress={sectionProgress}
      />

      {/* Sleep quality indicator */}
      <div
        className="absolute bottom-12 left-12 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
        style={{
          opacity: sectionProgress > 0.5 ? 1 : 0,
          transform: sectionProgress > 0.5 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          <div>
            <div className="text-xs text-white/60 uppercase tracking-wide">Sleep Score</div>
            <div className="text-2xl font-bold text-white">94%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedroomSection;
