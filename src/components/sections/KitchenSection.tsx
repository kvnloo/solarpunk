import React from 'react';
import { ImageSequence } from '../scrollytelling/ImageSequence';
import { FadeUp } from '../scrollytelling/TextReveal';
import { scrollTimeline } from '../../data/scrollTimeline';

interface KitchenSectionProps {
  sectionProgress: number;
}

export const KitchenSection: React.FC<KitchenSectionProps> = ({ sectionProgress }) => {
  const section = scrollTimeline.find((s) => s.id === 'kitchen');

  if (!section) return null;

  // Split content opacity for text reveal timing
  const textOpacity = Math.min(1, sectionProgress * 3);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient for nutrition zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)`,
          opacity: sectionProgress,
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Sequence - Apple-style carousel */}
        <div className="order-2 lg:order-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <ImageSequence
            images={section.images}
            sectionProgress={sectionProgress}
            showDots={true}
          />
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl"
            style={{
              opacity: textOpacity,
              transform: `translateY(${(1 - textOpacity) * 30}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <span className="text-sm font-bold tracking-widest text-orange-400/80 uppercase mb-3 block">
              {section.textContent.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {section.textContent.title}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {section.textContent.description}
            </p>
          </div>

          {/* Nutrition stats */}
          <FadeUp delay={0.3}>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-emerald-400">95%</div>
                <div className="text-xs text-white/60 mt-1">Less Water</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-orange-400">3x</div>
                <div className="text-xs text-white/60 mt-1">Faster Growth</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-white/60 mt-1">Organic</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default KitchenSection;
