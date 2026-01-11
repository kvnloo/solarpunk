import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        className="w-full h-full"
        // Dark twilight blue background for the evening aesthetic
        onCreated={(state) => state.gl.setClearColor('#0f172a')}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      
      {/* Loading overlay could go here, but Suspense fallback handles it simply */}
    </div>
  );
};

export default App;