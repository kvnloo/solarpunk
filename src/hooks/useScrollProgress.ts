import { useState, useEffect, useCallback } from 'react';
import { scrollTimeline, TOTAL_PAGES, ScrollSection } from '../data/scrollTimeline';
import { clamp } from '../utils/easing';

export interface ScrollProgressState {
  offset: number;           // 0-1 normalized scroll position
  page: number;             // Current page (0 to TOTAL_PAGES)
  section: ScrollSection;   // Current active section
  sectionIndex: number;     // Index in scrollTimeline array
  sectionProgress: number;  // Progress within current section (0-1)
  direction: 'up' | 'down' | 'idle';
  velocity: number;         // Scroll speed
}

export const useScrollProgress = (): ScrollProgressState => {
  const [state, setState] = useState<ScrollProgressState>({
    offset: 0,
    page: 0,
    section: scrollTimeline[0],
    sectionIndex: 0,
    sectionProgress: 0,
    direction: 'idle',
    velocity: 0,
  });

  const lastScrollY = { current: 0 };
  const lastTime = { current: Date.now() };

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const offset = docHeight > 0 ? scrollY / docHeight : 0;
    const page = offset * TOTAL_PAGES;

    // Calculate velocity
    const now = Date.now();
    const dt = now - lastTime.current;
    const velocity = dt > 0 ? (scrollY - lastScrollY.current) / dt : 0;

    // Determine direction
    const direction: 'up' | 'down' | 'idle' =
      velocity > 0.01 ? 'down' :
      velocity < -0.01 ? 'up' :
      'idle';

    // Find current section
    let sectionIndex = 0;
    let section = scrollTimeline[0];
    let sectionProgress = 0;

    for (let i = 0; i < scrollTimeline.length; i++) {
      const s = scrollTimeline[i];
      if (page >= s.startPage && page < s.endPage) {
        sectionIndex = i;
        section = s;
        sectionProgress = clamp(
          (page - s.startPage) / (s.endPage - s.startPage),
          0,
          1
        );
        break;
      }
      // Handle last section
      if (i === scrollTimeline.length - 1 && page >= s.startPage) {
        sectionIndex = i;
        section = s;
        sectionProgress = clamp(
          (page - s.startPage) / (s.endPage - s.startPage),
          0,
          1
        );
      }
    }

    setState({
      offset,
      page,
      section,
      sectionIndex,
      sectionProgress,
      direction,
      velocity: Math.abs(velocity),
    });

    lastScrollY.current = scrollY;
    lastTime.current = now;
  }, []);

  useEffect(() => {
    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return state;
};

export default useScrollProgress;
