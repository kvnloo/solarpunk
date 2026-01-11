import React from 'react';
import { ScrollControls, Environment, Float, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { HouseModel } from './3d/HouseModel';
import { Interface } from './Interface';
import { CameraHandler } from './CameraHandler';
import { TOTAL_PAGES } from '../data/scrollTimeline';

// Inner component that has access to scroll context
const SceneContent: React.FC = () => {
  const scroll = useScroll();
  const [scrollOffset, setScrollOffset] = React.useState(0);

  useFrame(() => {
    setScrollOffset(scroll.offset);
  });

  return (
    <>
      <Interface scrollOffset={scrollOffset} />
      <CameraHandler />

      <group position={[0, -0.5, 0]}>
        <Float
          speed={0.5}
          rotationIntensity={0.03}
          floatIntensity={0.08}
        >
          <HouseModel scrollProgress={scrollOffset} />
        </Float>
      </group>
    </>
  );
};

export const Experience: React.FC = () => {
  return (
    <>
      <ScrollControls pages={TOTAL_PAGES} damping={0.15}>
        <SceneContent />
      </ScrollControls>

      {/* Lighting for "Twilight/Evening" Look */}
      {/* Low ambient light so the room emissive materials glow */}
      <ambientLight intensity={0.15} color="#1e3a8a" />

      {/* Directional light acting as moonlight */}
      <directionalLight
        position={[-5, 8, 5]}
        intensity={0.6}
        color="#c7d2fe"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Subtle fill light with purple accent */}
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#4c1d95" />

      {/* Warm accent light from below */}
      <pointLight position={[0, -5, 5]} intensity={0.2} color="#f97316" />

      {/* City environment for reflections on glass */}
      <Environment preset="night" />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0f172a', 15, 40]} />
    </>
  );
};

export default Experience;
