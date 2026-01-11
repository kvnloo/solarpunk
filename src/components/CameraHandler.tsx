import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { scrollTimeline, TOTAL_PAGES } from '../data/scrollTimeline';
import { easing, clamp } from '../utils/easing';

export const CameraHandler: React.FC = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  // Vectors to reuse for memory optimization
  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const velocity = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const scrollPage = scroll.offset * TOTAL_PAGES;

    // Find current and next section for interpolation
    let currentSection = scrollTimeline[0];
    let nextSection = scrollTimeline[0];
    let sectionProgress = 0;

    for (let i = 0; i < scrollTimeline.length; i++) {
      const section = scrollTimeline[i];
      if (scrollPage >= section.startPage && scrollPage < section.endPage) {
        currentSection = section;
        nextSection = scrollTimeline[i + 1] || section;
        sectionProgress = clamp(
          (scrollPage - section.startPage) / (section.endPage - section.startPage),
          0,
          1
        );
        break;
      }
      // Handle last section edge case
      if (i === scrollTimeline.length - 1 && scrollPage >= section.startPage) {
        currentSection = section;
        nextSection = section;
        sectionProgress = clamp(
          (scrollPage - section.startPage) / (section.endPage - section.startPage),
          0,
          1
        );
      }
    }

    // Apply Apple-style easing to section progress
    const easedProgress = easing.appleEase(sectionProgress);

    // Calculate target camera position
    const startPos = new THREE.Vector3(...currentSection.camera.position);
    const endPos = new THREE.Vector3(...nextSection.camera.position);
    targetPosition.current.lerpVectors(startPos, endPos, easedProgress);

    // Calculate target look-at point
    const startTarget = new THREE.Vector3(...currentSection.camera.target);
    const endTarget = new THREE.Vector3(...nextSection.camera.target);
    targetLookAt.current.lerpVectors(startTarget, endTarget, easedProgress);

    // Apply smooth damping to camera position
    // Higher damping factor = smoother but more delayed response
    const positionDamping = 1 - Math.pow(0.001, delta);
    camera.position.lerp(targetPosition.current, positionDamping * 2.5);

    // Smooth look-at transition
    const lookAtDamping = 1 - Math.pow(0.0005, delta);
    currentLookAt.current.lerp(targetLookAt.current, lookAtDamping * 2);

    // Apply look-at
    camera.lookAt(currentLookAt.current);

    // Store current look-at in userData for reference
    camera.userData.currentLookAt = currentLookAt.current.clone();
    camera.userData.currentSection = currentSection.id;
    camera.userData.sectionProgress = sectionProgress;
  });

  return null;
};

export default CameraHandler;
