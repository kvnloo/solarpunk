import React, { useRef, useEffect, useState } from 'react';
import { ParallaxImage } from './ParallaxImage';
import { ImageAsset } from '../../data/scrollTimeline';

interface SplitLayoutProps {
  images: ImageAsset[];
  textContent: {
    subtitle: string;
    title: string;
    description: string;
  };
  align: 'left' | 'right';
  sectionProgress: number;
  className?: string;
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  images,
  textContent,
  align,
  sectionProgress,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe visibility for text animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Text animation delay based on visibility
  const textDelay = isVisible ? '0.3s' : '0s';
  const textOpacity = isVisible ? 1 : 0;
  const textTransform = isVisible ? 'translateY(0)' : 'translateY(30px)';

  // Determine image reveal direction based on align
  const imageRevealDirection = align === 'left' ? 'right' : 'left';

  // For multiple images, calculate which to show or stack them
  const primaryImage = images[0];
  const secondaryImage = images[1];

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full flex items-center ${className}`}
    >
      <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
        align === 'right' ? 'md:grid-flow-dense' : ''
      }`}>
        {/* Text Content */}
        <div
          className={`space-y-6 ${align === 'right' ? 'md:col-start-2' : ''}`}
          style={{
            opacity: textOpacity,
            transform: textTransform,
            transition: `opacity 0.8s ease-out ${textDelay}, transform 0.8s ease-out ${textDelay}`,
          }}
        >
          {/* Glassmorphism Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
            <span className="text-sm font-bold tracking-widest text-white/60 uppercase mb-3 block">
              {textContent.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {textContent.title}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {textContent.description}
            </p>
          </div>
        </div>

        {/* Image Stack */}
        <div
          className={`relative ${align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}
        >
          {/* Primary Image */}
          {primaryImage && (
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src={primaryImage.path}
                alt={primaryImage.alt}
                parallaxSpeed={primaryImage.parallaxSpeed}
                revealDirection={imageRevealDirection}
                className="aspect-[4/3]"
              />
            </div>
          )}

          {/* Secondary Image (offset and behind) */}
          {secondaryImage && (
            <div
              className={`absolute top-8 ${
                align === 'left' ? '-right-4 md:-right-8' : '-left-4 md:-left-8'
              } w-3/4 z-0 rounded-2xl overflow-hidden shadow-xl`}
              style={{
                opacity: sectionProgress > 0.3 ? 1 : 0,
                transform: `translateY(${sectionProgress > 0.3 ? 0 : 20}px)`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
            >
              <ParallaxImage
                src={secondaryImage.path}
                alt={secondaryImage.alt}
                parallaxSpeed={secondaryImage.parallaxSpeed * 0.7}
                revealDirection={imageRevealDirection}
                className="aspect-[4/3]"
              />
            </div>
          )}

          {/* Decorative gradient orb */}
          <div
            className={`absolute ${
              align === 'left' ? '-left-20' : '-right-20'
            } top-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none`}
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
              opacity: sectionProgress * 0.6,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
