import React from 'react';
import { SplitLayout } from '../scrollytelling/SplitLayout';
import { scrollTimeline } from '../../data/scrollTimeline';

interface ExteriorSectionProps {
  sectionProgress: number;
}

export const ExteriorSection: React.FC<ExteriorSectionProps> = ({ sectionProgress }) => {
  const section = scrollTimeline.find((s) => s.id === 'exterior');

  if (!section) return null;

  return (
    <div className="relative min-h-screen">
      <SplitLayout
        images={section.images}
        textContent={section.textContent}
        align="left"
        sectionProgress={sectionProgress}
      />

      {/* Decorative accent line */}
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        style={{
          width: `${sectionProgress * 100}%`,
          transition: 'width 0.3s ease-out',
        }}
      />
    </div>
  );
};

export default ExteriorSection;
