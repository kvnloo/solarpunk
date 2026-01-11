// Scroll Timeline Configuration
// Narrative Flow: Morning routine (wake → eat → work → relax)

export interface ImageAsset {
  id: string;
  path: string;
  alt: string;
  parallaxSpeed: number;
}

export interface ScrollSection {
  id: string;
  name: string;
  startPage: number;
  endPage: number;
  camera: {
    position: [number, number, number];
    target: [number, number, number];
  };
  images: ImageAsset[];
  layout: 'fullscreen' | 'split-left' | 'split-right' | 'sequence' | 'overlay';
  textContent: {
    subtitle: string;
    title: string;
    description: string;
    align: 'left' | 'right' | 'center';
  };
}

// All available images organized by room
export const imageAssets = {
  exterior: [
    {
      id: 'architecture-diagram',
      path: '/assets/images/exterior/architecture-diagram.png',
      alt: 'Solarpunk house architecture blueprint',
      parallaxSpeed: 0.3,
    },
    {
      id: 'modern-mansion',
      path: '/assets/images/exterior/modern-mansion-solarpunk-smarthome.png',
      alt: 'Modern solarpunk smart home exterior',
      parallaxSpeed: 0.5,
    },
  ],
  bedroom: [
    {
      id: 'bedroom-v1',
      path: '/assets/images/bedroom/bedroom.png',
      alt: 'AEON Sanctuary sleep optimization suite',
      parallaxSpeed: 0.4,
    },
    {
      id: 'bedroom-v2',
      path: '/assets/images/bedroom/bedroom-v2.png',
      alt: 'Bedroom thermal regulation view',
      parallaxSpeed: 0.5,
    },
  ],
  kitchen: [
    {
      id: 'blueprint-charcuterie',
      path: '/assets/images/kitchen/blueprint-charcuterie.png',
      alt: 'Kitchen charcuterie blueprint',
      parallaxSpeed: 0.3,
    },
    {
      id: 'blueprint-pyramid',
      path: '/assets/images/kitchen/blueprint-pyramid.png',
      alt: 'Nutrition pyramid display v1',
      parallaxSpeed: 0.4,
    },
    {
      id: 'blueprint-pyramid-v2',
      path: '/assets/images/kitchen/blueprint-pyramid-v2.png',
      alt: 'Nutrition pyramid display v2',
      parallaxSpeed: 0.5,
    },
    {
      id: 'blueprint-pyramid-v3',
      path: '/assets/images/kitchen/blueprint-pyramid-v3.png',
      alt: 'Nutrition pyramid display v3',
      parallaxSpeed: 0.6,
    },
    {
      id: 'grow-tower',
      path: '/assets/images/kitchen/grow-tower.png',
      alt: 'Aeroponic grow tower',
      parallaxSpeed: 0.4,
    },
  ],
  office: [
    {
      id: 'flow-lab',
      path: '/assets/images/office/flow-lab.png',
      alt: 'Flow Lab deep work environment',
      parallaxSpeed: 0.4,
    },
    {
      id: 'business-management',
      path: '/assets/images/office/business-management.png',
      alt: 'Business management dashboard',
      parallaxSpeed: 0.6,
    },
  ],
  livingRoom: [
    {
      id: 'digital-detox',
      path: '/assets/images/living-room/digital-detox.png',
      alt: 'Digital detox connection hub',
      parallaxSpeed: 0.3,
    },
  ],
};

// Scroll timeline with 8 pages
export const scrollTimeline: ScrollSection[] = [
  // Page 0-1: Hero
  {
    id: 'hero',
    name: 'The Algorithmic Home',
    startPage: 0,
    endPage: 1,
    camera: {
      position: [8, 3, 15],
      target: [0, 0, 0],
    },
    images: [],
    layout: 'overlay',
    textContent: {
      subtitle: 'Welcome to',
      title: 'The Algorithmic Home',
      description: 'Your home, optimized for you. Sleep deeper. Focus better. Live fully.',
      align: 'center',
    },
  },

  // Page 1-2: Exterior
  {
    id: 'exterior',
    name: 'Blueprint Vision',
    startPage: 1,
    endPage: 2,
    camera: {
      position: [6, 4, 12],
      target: [0, 1, 0],
    },
    images: imageAssets.exterior,
    layout: 'split-right',
    textContent: {
      subtitle: 'The Vision',
      title: 'Designed for Human Performance',
      description: 'Every room serves a purpose. Every system works in harmony with your biology.',
      align: 'left',
    },
  },

  // Page 2-3.5: Bedroom (Morning - wake up)
  {
    id: 'bedroom',
    name: 'AEON Sanctuary',
    startPage: 2,
    endPage: 3.5,
    camera: {
      position: [-3.5, 0, 6],
      target: [-2.5, -0.2, 0],
    },
    images: imageAssets.bedroom,
    layout: 'split-left',
    textContent: {
      subtitle: 'Biological Core',
      title: 'Wake Up Transformed',
      description: 'The bedroom monitors your circadian rhythm, adjusting thermal regulation and oxygen levels for the deepest REM cycles.',
      align: 'right',
    },
  },

  // Page 3.5-5: Kitchen (Breakfast - nutrition)
  {
    id: 'kitchen',
    name: 'Nutrition Lab',
    startPage: 3.5,
    endPage: 5,
    camera: {
      position: [0, 1, 8],
      target: [0, 0, 0],
    },
    images: imageAssets.kitchen,
    layout: 'sequence',
    textContent: {
      subtitle: 'Blue Zones x Blueprint',
      title: 'Nutrition Optimization',
      description: 'Vertical aeroponic farms and visual food pyramids rewire default eating behavior. 95% less water. 3x faster growth.',
      align: 'center',
    },
  },

  // Page 5-6.5: Office (Work - focus)
  {
    id: 'office',
    name: 'The Flow Lab',
    startPage: 5,
    endPage: 6.5,
    camera: {
      position: [-3.5, 3, 6],
      target: [-2.5, 2.8, 0],
    },
    images: imageAssets.office,
    layout: 'split-right',
    textContent: {
      subtitle: 'Cognitive Engine',
      title: 'Think Without Effort',
      description: 'Electric blue spectrum lighting and acoustic dampening materials create an environment of pure focus. Deep work becomes your default state.',
      align: 'left',
    },
  },

  // Page 6.5-8: Living Room (Evening - relax + CTA)
  {
    id: 'living-room',
    name: 'Connection Hub',
    startPage: 6.5,
    endPage: 8,
    camera: {
      position: [3.5, 0, 7],
      target: [2, -0.2, 0],
    },
    images: imageAssets.livingRoom,
    layout: 'split-left',
    textContent: {
      subtitle: 'Social & Spiritual',
      title: 'Be Present, Together',
      description: 'Golden hour lighting and phone-free zones dissolve digital barriers. Where real conversation begins.',
      align: 'right',
    },
  },
];

// Helper to get all image paths for preloading
export const getAllImagePaths = (): string[] => {
  return Object.values(imageAssets)
    .flat()
    .map((img) => img.path);
};

// Total pages for ScrollControls
export const TOTAL_PAGES = 8;
