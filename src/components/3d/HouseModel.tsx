import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { scrollTimeline } from '../../data/scrollTimeline';

interface HouseModelProps {
  scrollProgress: number;
}

export const HouseModel: React.FC<HouseModelProps> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/assets/3d/object_1.glb');

  // Clone the scene to avoid mutation issues
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // Setup materials for all meshes
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Clone material to allow per-instance modifications
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material = child.material.map((m) => m.clone());
          } else {
            child.material = child.material.clone();
          }
        }
      }
    });

    return clone;
  }, [scene]);

  // Scroll-based room highlighting effect
  useEffect(() => {
    if (!clonedScene) return;

    // Determine which section is active based on scroll
    const totalPages = 8;
    const scrollPage = scrollProgress * totalPages;

    let activeSection = scrollTimeline[0];
    for (const section of scrollTimeline) {
      if (scrollPage >= section.startPage && scrollPage < section.endPage) {
        activeSection = section;
        break;
      }
    }

    // Map section IDs to potential mesh name patterns
    const sectionToMeshPatterns: Record<string, string[]> = {
      'bedroom': ['bedroom', 'bed', 'sleep', 'green'],
      'kitchen': ['kitchen', 'cook', 'food', 'nutrition'],
      'office': ['office', 'work', 'desk', 'blue'],
      'living-room': ['living', 'lounge', 'social', 'purple'],
      'exterior': ['exterior', 'outside', 'garden'],
      'hero': [],
    };

    const activePatterns = sectionToMeshPatterns[activeSection.id] || [];

    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        if (material && material.emissive !== undefined) {
          const meshName = child.name.toLowerCase();

          // Check if this mesh matches the active section
          const isActiveRoom = activePatterns.some((pattern) =>
            meshName.includes(pattern)
          );

          // Subtle glow effect for active room
          if (isActiveRoom) {
            material.emissiveIntensity = THREE.MathUtils.lerp(
              material.emissiveIntensity || 0,
              0.3,
              0.1
            );
          } else {
            material.emissiveIntensity = THREE.MathUtils.lerp(
              material.emissiveIntensity || 0,
              0.05,
              0.1
            );
          }
        }
      }
    });
  }, [scrollProgress, clonedScene]);

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 8, 0]}>
      <primitive
        object={clonedScene}
        scale={1}
        position={[0, 0, 0]}
      />
    </group>
  );
};

// Preload the GLB model
useGLTF.preload('/assets/3d/object_1.glb');

export default HouseModel;
