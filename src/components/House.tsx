import React from 'react';
import { Html } from '@react-three/drei';

// A glowing room module
const Room: React.FC<{ 
    position: [number, number, number]; 
    size: [number, number, number]; 
    color: string; 
    intensity?: number;
}> = ({ position, size, color, intensity = 1 }) => {
  return (
    <group position={position}>
      {/* Interior Volume (Emissive) */}
      <mesh position={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[size[0] - 0.2, size[1] - 0.2, size[2] - 0.2]} />
        <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={intensity * 0.8} 
            toneMapped={false}
            roughness={0.1}
        />
      </mesh>
      
      {/* Internal Point Light for Glow effect */}
      <pointLight position={[0, 0, 1]} intensity={intensity * 1.5} distance={5} color={color} />

      {/* Glass Front */}
      <mesh position={[0, 0, size[2]/2]}>
        <planeGeometry args={[size[0]-0.2, size[1]-0.2]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.9}
          opacity={0.4}
          transparent
          roughness={0}
          reflectivity={1}
          thickness={0.1}
        />
      </mesh>
    </group>
  )
}

// Architectural Frame (Concrete/White)
const Frame: React.FC<{ position: [number, number, number]; size: [number, number, number] }> = ({ position, size }) => {
    return (
        <mesh position={position} receiveShadow castShadow>
            <boxGeometry args={size} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
        </mesh>
    )
}

// Vertical Garden Patch
const GreenWall: React.FC<{ position: [number, number, number]; size: [number, number, number] }> = ({ position, size }) => {
    return (
        <mesh position={position} receiveShadow>
            <boxGeometry args={size} />
            <meshStandardMaterial color="#166534" roughness={0.9} />
        </mesh>
    )
}

export const House: React.FC = () => {
  return (
    <group rotation={[0, -Math.PI / 8, 0]}> 
      
      {/* --- LEFT WING (2 Stories) --- */}
      
      {/* Top Left: Blue Office */}
      <Room position={[-2.5, 2.8, 0]} size={[3.5, 2.5, 3]} color="#3b82f6" intensity={2} />
      
      {/* Top Frames */}
      <Frame position={[-2.5, 4.15, 0]} size={[4, 0.2, 3.5]} /> {/* Roof */}
      <Frame position={[-2.5, 1.45, 0]} size={[4, 0.2, 3.5]} /> {/* Floor */}
      <Frame position={[-4.6, 2.8, 0]} size={[0.2, 2.9, 3.5]} /> {/* Left Wall */}
      <Frame position={[-0.4, 2.8, -0.5]} size={[0.2, 2.9, 2.5]} /> {/* Right Wall Inner */}

      
      {/* Bottom Left: Green Room */}
      <Room position={[-2.5, -0.2, 0]} size={[3.5, 2.5, 3]} color="#10b981" intensity={1.5} />
      
      {/* Bottom Frames */}
      <Frame position={[-2.5, -1.55, 0]} size={[4, 0.2, 3.5]} /> {/* Base */}
      <Frame position={[-4.6, -0.2, 0]} size={[0.2, 2.9, 3.5]} /> {/* Left Wall */}
      <GreenWall position={[-0.4, -0.2, 0.1]} size={[0.4, 2.5, 3.2]} /> {/* Green Wall Divider */}


      {/* --- RIGHT WING (1 Story) --- */}
      
      {/* Bottom Right: Purple/Warm Lounge */}
      <Room position={[2, -0.2, 0.5]} size={[4, 2.5, 3]} color="#a855f7" intensity={1.5} />
      
      {/* Right Frames */}
      <Frame position={[2, 1.15, 0.5]} size={[4.6, 0.2, 3.5]} /> {/* Roof */}
      <Frame position={[2, -1.55, 0.5]} size={[4.6, 0.2, 3.5]} /> {/* Floor */}
      <Frame position={[4.4, -0.2, 0.5]} size={[0.2, 2.9, 3.5]} /> {/* Far Right Wall */}
      
      {/* Second Floor Terrace Block on Right (Visual balance) */}
      <Frame position={[1.5, 2.2, -1]} size={[3, 2, 2]} />
      <GreenWall position={[2, 2.2, 0.1]} size={[2, 1.5, 0.2]} /> 


      {/* --- HUD Element --- */}
      <Html position={[-1, 4.8, 1]} center transform>
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-xs font-mono text-cyan-50 tracking-widest whitespace-nowrap">
                SYSTEM OPTIMIZED: 98%
            </span>
            {/* HUD Line connector */}
            <div className="absolute top-full left-1/2 w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </Html>

      {/* Ground */}
      <mesh position={[0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1e293b" roughness={0.6} metalness={0.2} />
      </mesh>

    </group>
  );
};