import React, { useMemo } from 'react';
import { Scroll } from '@react-three/drei';
import { scrollTimeline, TOTAL_PAGES } from '../data/scrollTimeline';
import { clamp } from '../utils/easing';

// Section Components
import { HeroSection } from './sections/HeroSection';
import { ExteriorSection } from './sections/ExteriorSection';
import { BedroomSection } from './sections/BedroomSection';
import { KitchenSection } from './sections/KitchenSection';
import { OfficeSection } from './sections/OfficeSection';
import { LivingRoomSection } from './sections/LivingRoomSection';

// UI Components
import { ProgressIndicator } from './ui/ProgressIndicator';

interface InterfaceProps {
  scrollOffset: number;
}

// Helper to get section progress
const getSectionProgress = (
  scrollOffset: number,
  startPage: number,
  endPage: number
): number => {
  const scrollPage = scrollOffset * TOTAL_PAGES;
  const progress = (scrollPage - startPage) / (endPage - startPage);
  return clamp(progress, 0, 1);
};

// Helper to check if section is visible
const isSectionVisible = (
  scrollOffset: number,
  startPage: number,
  endPage: number,
  buffer: number = 0.5
): boolean => {
  const scrollPage = scrollOffset * TOTAL_PAGES;
  return scrollPage >= startPage - buffer && scrollPage <= endPage + buffer;
};

export const Interface: React.FC<InterfaceProps> = ({ scrollOffset }) => {
  // Calculate current section index and progress
  const { currentSectionIndex, sectionProgress } = useMemo(() => {
    const scrollPage = scrollOffset * TOTAL_PAGES;
    let index = 0;
    let progress = 0;

    for (let i = 0; i < scrollTimeline.length; i++) {
      const section = scrollTimeline[i];
      if (scrollPage >= section.startPage && scrollPage < section.endPage) {
        index = i;
        progress = clamp(
          (scrollPage - section.startPage) / (section.endPage - section.startPage),
          0,
          1
        );
        break;
      }
      if (i === scrollTimeline.length - 1 && scrollPage >= section.startPage) {
        index = i;
        progress = clamp(
          (scrollPage - section.startPage) / (section.endPage - section.startPage),
          0,
          1
        );
      }
    }

    return { currentSectionIndex: index, sectionProgress: progress };
  }, [scrollOffset]);

  // Get section data
  const heroSection = scrollTimeline.find((s) => s.id === 'hero')!;
  const exteriorSection = scrollTimeline.find((s) => s.id === 'exterior')!;
  const bedroomSection = scrollTimeline.find((s) => s.id === 'bedroom')!;
  const kitchenSection = scrollTimeline.find((s) => s.id === 'kitchen')!;
  const officeSection = scrollTimeline.find((s) => s.id === 'office')!;
  const livingRoomSection = scrollTimeline.find((s) => s.id === 'living-room')!;

  return (
    <Scroll html style={{ width: '100%' }}>
      {/* Progress Indicator - Fixed position */}
      <ProgressIndicator
        currentSectionIndex={currentSectionIndex}
        sectionProgress={sectionProgress}
      />

      {/* Section 1: Hero (Page 0-1) */}
      <div style={{ height: `${(heroSection.endPage - heroSection.startPage) * 100}vh` }}>
        <HeroSection
          sectionProgress={getSectionProgress(
            scrollOffset,
            heroSection.startPage,
            heroSection.endPage
          )}
        />
      </div>

      {/* Section 2: Exterior (Page 1-2) */}
      <div style={{ height: `${(exteriorSection.endPage - exteriorSection.startPage) * 100}vh` }}>
        {isSectionVisible(scrollOffset, exteriorSection.startPage, exteriorSection.endPage) && (
          <ExteriorSection
            sectionProgress={getSectionProgress(
              scrollOffset,
              exteriorSection.startPage,
              exteriorSection.endPage
            )}
          />
        )}
      </div>

      {/* Section 3: Bedroom (Page 2-3.5) */}
      <div style={{ height: `${(bedroomSection.endPage - bedroomSection.startPage) * 100}vh` }}>
        {isSectionVisible(scrollOffset, bedroomSection.startPage, bedroomSection.endPage) && (
          <BedroomSection
            sectionProgress={getSectionProgress(
              scrollOffset,
              bedroomSection.startPage,
              bedroomSection.endPage
            )}
          />
        )}
      </div>

      {/* Section 4: Kitchen (Page 3.5-5) */}
      <div style={{ height: `${(kitchenSection.endPage - kitchenSection.startPage) * 100}vh` }}>
        {isSectionVisible(scrollOffset, kitchenSection.startPage, kitchenSection.endPage) && (
          <KitchenSection
            sectionProgress={getSectionProgress(
              scrollOffset,
              kitchenSection.startPage,
              kitchenSection.endPage
            )}
          />
        )}
      </div>

      {/* Section 5: Office (Page 5-6.5) */}
      <div style={{ height: `${(officeSection.endPage - officeSection.startPage) * 100}vh` }}>
        {isSectionVisible(scrollOffset, officeSection.startPage, officeSection.endPage) && (
          <OfficeSection
            sectionProgress={getSectionProgress(
              scrollOffset,
              officeSection.startPage,
              officeSection.endPage
            )}
          />
        )}
      </div>

      {/* Section 6: Living Room + CTA (Page 6.5-8) */}
      <div style={{ height: `${(livingRoomSection.endPage - livingRoomSection.startPage) * 100}vh` }}>
        {isSectionVisible(scrollOffset, livingRoomSection.startPage, livingRoomSection.endPage) && (
          <LivingRoomSection
            sectionProgress={getSectionProgress(
              scrollOffset,
              livingRoomSection.startPage,
              livingRoomSection.endPage
            )}
          />
        )}
      </div>
    </Scroll>
  );
};

export default Interface;
