import React, { useEffect, useState } from 'react';

interface ScrollHintProps {
  visible?: boolean;
  text?: string;
}

export const ScrollHint: React.FC<ScrollHintProps> = ({
  visible = true,
  text = 'Scroll to explore',
}) => {
  const [shouldShow, setShouldShow] = useState(visible);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShouldShow(visible && !hasScrolled);
  }, [visible, hasScrolled]);

  return (
    <div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3"
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        pointerEvents: shouldShow ? 'auto' : 'none',
      }}
    >
      <span className="text-sm text-white/50 tracking-wide">{text}</span>

      {/* Mouse icon */}
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-scroll-hint" />
      </div>

      {/* Chevron */}
      <svg
        className="w-6 h-6 text-white/40 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>

      {/* Custom animation keyframes (added via style tag) */}
      <style>{`
        @keyframes scroll-hint {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.3;
          }
        }
        .animate-scroll-hint {
          animation: scroll-hint 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollHint;
