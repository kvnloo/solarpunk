import React from 'react';
import { SplitLayout } from '../scrollytelling/SplitLayout';
import { FadeUp } from '../scrollytelling/TextReveal';
import { scrollTimeline } from '../../data/scrollTimeline';

interface LivingRoomSectionProps {
  sectionProgress: number;
}

export const LivingRoomSection: React.FC<LivingRoomSectionProps> = ({ sectionProgress }) => {
  const section = scrollTimeline.find((s) => s.id === 'living-room');

  if (!section) return null;

  // Show CTA when section is mostly scrolled
  const showCTA = sectionProgress > 0.6;

  return (
    <div className="relative min-h-screen">
      {/* Background gradient for social zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
          opacity: sectionProgress,
        }}
      />

      <SplitLayout
        images={section.images}
        textContent={section.textContent}
        align="right"
        sectionProgress={sectionProgress}
      />

      {/* Connection indicator */}
      <div
        className="absolute top-12 left-12 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-purple-500/30"
        style={{
          opacity: sectionProgress > 0.3 ? 1 : 0,
          transform: sectionProgress > 0.3 ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
          <div>
            <div className="text-xs text-white/60 uppercase tracking-wide">Digital Detox</div>
            <div className="text-lg font-bold text-purple-400">Enabled</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="absolute bottom-0 left-0 right-0 py-16"
        style={{
          opacity: showCTA ? 1 : 0,
          transform: showCTA ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* CTA Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl">
            <FadeUp delay={0.2}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be First to Experience the Algorithmic Home
              </h3>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                We're building a limited number of concept homes. Join the waitlist for early access and exclusive updates.
              </p>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
                  Join the Vision
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.8}>
              <p className="text-sm text-white/50 mt-6">
                2,500+ early visionaries already on the list
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingRoomSection;
