import React, { useRef, useEffect, useState, useCallback } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  parallaxSpeed?: number;
  revealDirection?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  priority?: boolean;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  parallaxSpeed = 0.3,
  revealDirection = 'up',
  className = '',
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Intersection Observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;

      // Parallax offset based on distance from viewport center
      const offset = distanceFromCenter * parallaxSpeed * 0.15;
      setParallaxY(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  const getInitialStyles = useCallback(() => {
    switch (revealDirection) {
      case 'up':
        return { opacity: 0, transform: 'translateY(80px)' };
      case 'down':
        return { opacity: 0, transform: 'translateY(-80px)' };
      case 'left':
        return { opacity: 0, transform: 'translateX(80px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(-80px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.9)' };
      default:
        return { opacity: 0 };
    }
  }, [revealDirection]);

  const getAnimatedStyles = useCallback(() => {
    const baseTransform = `translateY(${parallaxY}px)`;

    if (!isVisible) {
      const initial = getInitialStyles();
      return {
        ...initial,
        transition: 'none',
      };
    }

    return {
      opacity: imageLoaded ? 1 : 0,
      transform: baseTransform,
      transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.1s linear',
    };
  }, [isVisible, parallaxY, imageLoaded, getInitialStyles]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{
        ...getAnimatedStyles(),
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        className="w-full h-full object-cover"
        style={{
          transform: `scale(${1 + parallaxSpeed * 0.2})`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  );
};

export default ParallaxImage;
