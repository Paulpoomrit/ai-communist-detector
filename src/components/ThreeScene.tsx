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
      className="w-[50vw] h-[75vh] absolute top-0 left-0 translate-x-[9.5vw] translate-y-[15vh] z-1"
    />
  );
};

export default ThreeScene;
