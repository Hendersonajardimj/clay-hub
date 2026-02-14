"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Spinner() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.4;
    mesh.current.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial color="#7fb069" roughness={0.25} metalness={0.25} />
    </mesh>
  );
}

export default function PlaygroundScene() {
  return (
    <Canvas className="visual-canvas" camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Spinner />
    </Canvas>
  );
}
