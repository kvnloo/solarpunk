import React from 'react';
import { scrollTimeline } from '../../data/scrollTimeline';

interface ProgressIndicatorProps {
  currentSectionIndex: number;
  sectionProgress: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentSectionIndex,
  sectionProgress,
}) => {
  const sections = scrollTimeline;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => {
        const isActive = index === currentSectionIndex;
        const isPast = index < currentSectionIndex;
        const progress = isActive ? sectionProgress : isPast ? 1 : 0;

        return (
          <div
            key={section.id}
            className="group relative flex items-center justify-end"
          >
            {/* Label (visible on hover) */}
            <span
              className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-white/80 whitespace-nowrap bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              {section.name}
            </span>

            {/* Dot Container */}
            <div className="relative w-3 h-3 flex items-center justify-center">
              {/* Background dot */}
              <div
                className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive || isPast ? 'bg-white/40' : 'bg-white/20'
                }`}
              />

              {/* Progress fill */}
              <div
                className="absolute w-2 h-2 rounded-full bg-white origin-center transition-transform duration-150"
                style={{
                  transform: `scale(${progress})`,
                }}
              />

              {/* Active ring */}
              {isActive && (
                <div className="absolute w-3 h-3 rounded-full border border-white/60 animate-pulse" />
              )}
            </div>
          </div>
        );
      })}

      {/* Progress line connecting dots */}
      <div className="absolute right-[5px] top-0 bottom-0 w-px bg-white/10" />
    </div>
  );
};

export default ProgressIndicator;
