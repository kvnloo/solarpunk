import React, { useRef, useEffect, useState, useMemo } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  delay?: number;
  staggerDelay?: number;
  className?: string;
  splitBy?: 'word' | 'line' | 'char';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = 'div',
  delay = 0,
  staggerDelay = 0.05,
  className = '',
  splitBy = 'word',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text into elements for animation
  const elements = useMemo(() => {
    const text = typeof children === 'string' ? children : '';

    if (splitBy === 'char') {
      return text.split('').map((char, i) => ({ content: char, key: i }));
    } else if (splitBy === 'line') {
      return text.split('\n').map((line, i) => ({ content: line, key: i }));
    } else {
      return text.split(/\s+/).map((word, i) => ({ content: word, key: i }));
    }
  }, [children, splitBy]);

  // If children is not a string, render as-is with fade animation
  if (typeof children !== 'string') {
    return (
      <Component
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        }}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`${className} flex flex-wrap`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {elements.map((element, index) => (
        <span
          key={element.key}
          className="inline-block overflow-hidden"
          style={{ marginRight: splitBy === 'word' ? '0.25em' : undefined }}
        >
          <span
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              transition: `opacity 0.5s ease-out ${delay + index * staggerDelay}s, transform 0.5s ease-out ${delay + index * staggerDelay}s`,
            }}
          >
            {element.content}
          </span>
        </span>
      ))}
    </Component>
  );
};

// Simpler fade-up animation component
export const FadeUp: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default TextReveal;
