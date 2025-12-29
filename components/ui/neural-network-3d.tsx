"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleFlow({ count = 3000 }) {
  const points = useRef<THREE.Points>(null);
  const { theme, systemTheme } = useTheme();

  // Initial positions and random offsets for noise
  const [initialPositions, randomOffsets] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const r = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Spread particles across a wide field
      p[i * 3] = (Math.random() - 0.5) * 50;     // x
      p[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
      
      // Random offset for unique movement
      r[i] = Math.random() * Math.PI * 2;
    }
    return [p, r];
  }, [count]);

  // Buffer for animating positions
  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 10;
    const mouseY = state.mouse.y * 10;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const initialX = initialPositions[i3];
      const initialY = initialPositions[i3 + 1];
      const initialZ = initialPositions[i3 + 2];
      const offset = randomOffsets[i];

      // FLOW FIELD LOGIC
      // Create complex wave patterns using sin/cos based on time and position
      
      // Horizontal flow (X) with slight variation
      let x = initialX;
      
      // Vertical flow (Y) - The "Wave" effect
      // combine multiple sine waves for organic look
      let y = initialY + Math.sin(time * 0.5 + initialX * 0.2 + offset) * 2;
      y += Math.cos(time * 0.3 + initialZ * 0.3) * 1.5;

      // Depth flow (Z) - Gentle breathing
      let z = initialZ + Math.sin(time * 0.2 + initialY * 0.2) * 2;

      // MOUSE INTERACTION
      // Calculate distance to mouse (projected to Z=0 roughly)
      const dx = mouseX - x;
      const dy = mouseY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulsionRadius = 8;

      if (dist < repulsionRadius) {
        const force = (repulsionRadius - dist) / repulsionRadius;
        const angle = Math.atan2(dy, dx);
        
        // Push particles away from mouse
        x -= Math.cos(angle) * force * 3;
        y -= Math.sin(angle) * force * 3;
        z -= force * 5; // Push them 'deep' into the screen too
      }

      // Apply positions
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    // Update geometry
    points.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    points.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the whole cloud
    points.current.rotation.y = time * 0.02;
  });

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const color = isDark ? "#86a447" : "#2d3e15"; // Brand Green vs Dark Olive
  const opacity = isDark ? 0.6 : 0.7;

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.08} // Fine, dust-like particles
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
        blending={THREE.AdditiveBlending} // Glow effect
      />
    </Points>
  );
}

function CameraRig() {
    useFrame((state) => {
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        // Move camera vertically to follow the page flow
        state.camera.position.y = -scrollY * 0.005;
    });
    return null;
}

export function NeuralNetwork3D() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const fogColor = isDark ? "#000000" : "#ffffff";

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-100">
        <Canvas
            camera={{ position: [0, 0, 25], fov: 60 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
        >
            <CameraRig />
            <fog attach="fog" args={[fogColor, 15, 45]} />
            <ambientLight intensity={0.5} />
            
            {/* The Fluid Data Stream */}
            <ParticleFlow count={4000} />
        </Canvas>
    </div>
  );
}
