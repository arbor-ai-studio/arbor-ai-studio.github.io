"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function FlowingMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const { theme, systemTheme } = useTheme();

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    // Distort based on time and scroll
    mesh.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    mesh.current.rotation.y = Math.cos(time * 0.3) * 0.2;
    
    // Reaction to scroll
    mesh.current.position.z = Math.sin(scrollY * 0.001) * 2;
  });

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const color = isDark ? "#86a447" : "#5a7a2a";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
        <sphereGeometry args={[10, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.4}
          radius={1}
          transparent
          opacity={isDark ? 0.4 : 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function MovingLight() {
  const light = useRef<THREE.SpotLight>(null);
  useFrame((state) => {
    if (!light.current) return;
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
  });
  return <spotLight ref={light} position={[0, 0, 15]} intensity={100} color="#86a447" />;
}

function BackgroundWaves() {
    const mesh = useRef<THREE.Mesh>(null);
    const { theme, systemTheme } = useTheme();

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();
        // Subtle wave animation
        (mesh.current.material as THREE.MeshStandardMaterial).opacity = 0.1 + Math.sin(time) * 0.05;
    });

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === "dark";
    const color = isDark ? "#86a447" : "#3f522b";

    return (
        <mesh ref={mesh} position={[0, 0, -5]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100, 32, 32]} />
            <MeshWobbleMaterial
                color={color}
                speed={1}
                factor={0.5}
                transparent
                opacity={0.1}
                wireframe={true}
            />
        </mesh>
    );
}

export function NeuralNetwork3D() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const fogColor = isDark ? "#000000" : "#ffffff";

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-100">
        <Canvas
            camera={{ position: [0, 0, 20], fov: 50 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
        >
            <fog attach="fog" args={[fogColor, 10, 40]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={50} />
            <MovingLight />
            
            {/* The Central Morphing AI Core */}
            <FlowingMesh />
            
            {/* Subtle Ground Waves for Depth */}
            <BackgroundWaves />
        </Canvas>
    </div>
  );
}