// Easing functions for Apple-style smooth animations

export const easing = {
  // Apple-style smooth easing - cubic-bezier(0.25, 0.1, 0.25, 1)
  appleEase: (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },

  // Slow start, smooth finish (for reveals)
  easeOutQuart: (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  },

  // Even smoother deceleration
  easeOutQuint: (t: number): number => {
    return 1 - Math.pow(1 - t, 5);
  },

  // Acceleration from zero velocity
  easeInQuad: (t: number): number => {
    return t * t;
  },

  // Bounce effect for emphasis
  easeOutBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },

  // Elastic bounce
  easeOutElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },

  // Linear (no easing)
  linear: (t: number): number => t,

  // Smooth step (ease in-out)
  smoothStep: (t: number): number => {
    return t * t * (3 - 2 * t);
  },

  // Smoother step (Ken Perlin's improvement)
  smootherStep: (t: number): number => {
    return t * t * t * (t * (t * 6 - 15) + 10);
  },
};

// Clamp value between min and max
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

// Linear interpolation
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

// Map a value from one range to another
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Get progress within a section (0-1)
export const getSectionProgress = (
  scrollOffset: number,
  startPage: number,
  endPage: number,
  totalPages: number
): number => {
  const scrollPage = scrollOffset * totalPages;
  const progress = (scrollPage - startPage) / (endPage - startPage);
  return clamp(progress, 0, 1);
};
