"use client";
import React, { useRef, useEffect, useState } from "react";
import { initThreeJS } from '../lib/threeSetup';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | undefined;

    if (isClient && containerRef.current) {
      renderer = initThreeJS(containerRef.current);
    }

    return () => {
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div
      ref={containerRef}
      className="w-[100%] h-[100%] flex items-center justify-center absolute top-0 left-0 z-1"
    />
  );
};

export default ThreeScene;
