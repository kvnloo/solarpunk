import React, { useRef, useEffect, useState, useMemo } from 'react';
import { ImageAsset } from '../../data/scrollTimeline';

interface ImageSequenceProps {
  images: ImageAsset[];
  sectionProgress: number;
  className?: string;
  showDots?: boolean;
}

export const ImageSequence: React.FC<ImageSequenceProps> = ({
  images,
  sectionProgress,
  className = '',
  showDots = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Calculate which image to show based on section progress
  const currentIndex = useMemo(() => {
    if (images.length === 0) return 0;
    const index = Math.floor(sectionProgress * images.length);
    return Math.min(index, images.length - 1);
  }, [sectionProgress, images.length]);

  // Preload all images in the sequence
  useEffect(() => {
    images.forEach((img, index) => {
      const image = new Image();
      image.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(index));
      };
      image.src = img.path;
    });
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Image layers */}
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        const isLoaded = loadedImages.has(index);

        // Calculate distance from current for scale effect
        const distance = Math.abs(index - currentIndex);
        const scale = isActive ? 1 : 1.02;

        return (
          <div
            key={img.id}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: isActive && isLoaded ? 1 : 0,
              transform: `scale(${scale})`,
              transition: 'opacity 0.5s ease-out, transform 0.8s ease-out',
              zIndex: isActive ? 10 : 0,
            }}
          >
            <img
              src={img.path}
              alt={img.alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* Loading skeleton */}
      {loadedImages.size < images.length && (
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Progress dots */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full z-30">
        <span className="text-sm font-mono text-white/80">
          {currentIndex + 1}/{images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageSequence;
