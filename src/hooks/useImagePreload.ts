import { useEffect, useState, useCallback } from 'react';

interface PreloadState {
  loaded: boolean;
  progress: number;
  loadedCount: number;
  totalCount: number;
  errors: string[];
}

export const useImagePreload = (imagePaths: string[]): PreloadState => {
  const [state, setState] = useState<PreloadState>({
    loaded: false,
    progress: 0,
    loadedCount: 0,
    totalCount: imagePaths.length,
    errors: [],
  });

  useEffect(() => {
    if (imagePaths.length === 0) {
      setState({
        loaded: true,
        progress: 1,
        loadedCount: 0,
        totalCount: 0,
        errors: [],
      });
      return;
    }

    let loadedCount = 0;
    const errors: string[] = [];
    const total = imagePaths.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          loadedCount++;
          setState((prev) => ({
            ...prev,
            loadedCount,
            progress: loadedCount / total,
            loaded: loadedCount === total,
          }));
          resolve();
        };

        img.onerror = () => {
          loadedCount++;
          errors.push(src);
          setState((prev) => ({
            ...prev,
            loadedCount,
            progress: loadedCount / total,
            loaded: loadedCount === total,
            errors: [...prev.errors, src],
          }));
          resolve();
        };

        img.src = src;
      });
    };

    // Preload all images in parallel
    Promise.all(imagePaths.map(preloadImage));

    // Cleanup function
    return () => {
      // Reset state on unmount or when paths change
    };
  }, [imagePaths.join(',')]);

  return state;
};

// Hook for lazy loading images when they enter viewport
export const useLazyImage = (src: string, threshold = 0.1) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!inView) return;

    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [inView, src]);

  return { ref, loaded, inView };
};

export default useImagePreload;
