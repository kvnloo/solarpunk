import React from 'react';
import { SplitLayout } from '../scrollytelling/SplitLayout';
import { scrollTimeline } from '../../data/scrollTimeline';

interface OfficeSectionProps {
  sectionProgress: number;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ sectionProgress }) => {
  const section = scrollTimeline.find((s) => s.id === 'office');

  if (!section) return null;

  return (
    <div className="relative min-h-screen">
      {/* Background gradient for cognitive zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          opacity: sectionProgress,
        }}
      />

      <SplitLayout
        images={section.images}
        textContent={section.textContent}
        align="left"
        sectionProgress={sectionProgress}
      />

      {/* Focus mode indicator */}
      <div
        className="absolute top-12 right-12 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-blue-500/30"
        style={{
          opacity: sectionProgress > 0.4 ? 1 : 0,
          transform: sectionProgress > 0.4 ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 bg-blue-400 rounded-full" />
            <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
          </div>
          <div>
            <div className="text-xs text-white/60 uppercase tracking-wide">Flow State</div>
            <div className="text-lg font-bold text-blue-400">Active</div>
          </div>
        </div>
      </div>

      {/* Productivity metrics */}
      <div
        className="absolute bottom-12 right-12 flex gap-4"
        style={{
          opacity: sectionProgress > 0.6 ? 1 : 0,
          transform: sectionProgress > 0.6 ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s',
        }}
      >
        <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-xl text-center">
          <div className="text-xl font-bold text-white">4.2h</div>
          <div className="text-xs text-white/60">Deep Work</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-xl text-center">
          <div className="text-xl font-bold text-white">98%</div>
          <div className="text-xs text-white/60">Focus Score</div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
