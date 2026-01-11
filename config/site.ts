// Site Configuration for The Algorithmic Home

export const siteConfig = {
  name: "The Algorithmic Home",
  tagline: "Your Home, Optimized for You",
  description: "A solarpunk mansion designed for human performance optimization. Sleep deeper. Focus better. Live fully.",
  url: "https://algorithmichome.com", // Update when domain is secured

  // Social/SEO
  ogImage: "/og-image.jpg",
  twitterHandle: "@algorithmichome",

  // Email capture
  waitlistProvider: "convertkit", // or "resend", "mailchimp"
  waitlistFormId: "", // Add when set up

  // Analytics
  plausibleDomain: "", // Add when set up

  // Feature flags
  features: {
    roomWalkthrough: true,
    timeOfDaySlider: false, // Phase 2
    threeDExterior: false,  // Phase 2
    vrSupport: false,       // Phase 3
  },

  // Colors (Solarpunk palette)
  colors: {
    // Zone colors
    biological: "#22c55e",     // Green - sleep, nutrition
    cognitive: "#3b82f6",      // Blue - focus, work
    social: "#f97316",         // Orange - connection
    spiritual: "#a855f7",      // Purple - meditation

    // UI colors
    background: "#0a0a0a",
    foreground: "#fafafa",
    muted: "#27272a",
    accent: "#22c55e",
  },

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Explore", href: "/explore" },
    ],
    rooms: [
      { label: "Bedroom", href: "/explore#bedroom", zone: "Biological Core" },
      { label: "Office", href: "/explore#office", zone: "Cognitive Engine" },
      { label: "Kitchen", href: "/explore#kitchen", zone: "Biological Core" },
      { label: "Living Room", href: "/explore#living-room", zone: "Social & Spiritual" },
    ],
  },

  // Copy snippets
  copy: {
    hero: {
      headline: "Your Home, Optimized for You",
      subheadline: "The Algorithmic Home adapts to your biology, your rhythms, your goals. Sleep deeper. Focus better. Live fully.",
      cta: "Join the Vision",
    },
    pillars: [
      {
        title: "Sleep",
        headline: "Wake Up Transformed",
        body: "Your bedroom becomes a sleep laboratory. Thermal regulation, circadian lighting, and biometric tracking work in harmony to deliver the deepest rest of your life.",
        icon: "moon",
      },
      {
        title: "Focus",
        headline: "Think Without Effort",
        body: "Your office anticipates your cognitive needs. Environmental distractions vanish. Deep work becomes your default state.",
        icon: "brain",
      },
      {
        title: "Connection",
        headline: "Be Present, Together",
        body: "Your living spaces are designed for human connection. Golden hour lighting, conversation pits, and digital detox zones bring you closer to the people who matter.",
        icon: "heart",
      },
    ],
    manifesto: `We believe your home should work for you—not the other way around.

For too long, we've adapted ourselves to our environments. We force ourselves awake against our circadian rhythms. We fight distractions that our spaces amplify. We sit in rooms designed for efficiency, not humanity.

What if your home could sense what you need and respond?

What if the lights shifted to match your biology? What if your bedroom cooled precisely when deep sleep begins? What if your office eliminated friction before you even noticed it?

The Algorithmic Home is not a smart home. It's a wise home.

Built on the science of sleep optimization, flow states, and social connection—and integrated through a single intelligent system that learns, adapts, and anticipates.

This is not about controlling your home with an app.
This is about designing an environment that designs your best life.

Welcome to the future of living.`,
    finalCta: {
      headline: "Be First to Experience the Algorithmic Home",
      body: "We're building a limited number of concept homes. Join the waitlist to receive early access, behind-the-scenes updates, and exclusive invitations.",
      cta: "Join the Visionaries",
      socialProof: "2,500+ early visionaries",
    },
  },
};

export type SiteConfig = typeof siteConfig;
