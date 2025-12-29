"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function FloatingParticles({ count = 200 }) {
  const points = useRef<THREE.Points>(null);
  const { theme, systemTheme } = useTheme();

  // Generate particles
  const particles = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    
    // Gentle rotation
    points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;

    // Mouse interaction parallax
    const { mouse } = state;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 2, 0.1);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 2, 0.1);
  });

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const color = isDark ? "#86a447" : "#5a7a2a";

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Connections({ count = 100 }) {
    const lines = useRef<THREE.LineSegments>(null);
    const { theme, systemTheme } = useTheme();

    const [positions, velocities] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
            velocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            });
        }
        return [positions, velocities];
    }, [count]);

    const lineGeo = useMemo(() => new THREE.BufferGeometry(), []);
    
    useFrame(() => {
        if (!lines.current) return;

        // Update positions
        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            // Bounce
            if (Math.abs(positions[i*3]) > 10) velocities[i].x *= -1;
            if (Math.abs(positions[i*3+1]) > 10) velocities[i].y *= -1;
            if (Math.abs(positions[i*3+2]) > 10) velocities[i].z *= -1;
        }

        // Create connections
        const connections = [];
        const connectionDist = 5; // Distance threshold

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i*3] - positions[j*3];
                const dy = positions[i*3+1] - positions[j*3+1];
                const dz = positions[i*3+2] - positions[j*3+2];
                const distSq = dx*dx + dy*dy + dz*dz;

                if (distSq < connectionDist * connectionDist) {
                    connections.push(
                        positions[i*3], positions[i*3+1], positions[i*3+2],
                        positions[j*3], positions[j*3+1], positions[j*3+2]
                    );
                }
            }
        }

        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));
    });

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === "dark";
    const color = isDark ? "#86a447" : "#5a7a2a";

    return (
        <lineSegments ref={lines} geometry={lineGeo}>
            <lineBasicMaterial color={color} transparent opacity={0.15} />
        </lineSegments>
    );
}

function CameraRig() {
    useFrame((state) => {
        // Fly through effect
        // Base Z is 15. As we scroll, we move closer (decrease Z).
        // Max scroll typically ~3000-5000px. 
        // 5000 * 0.002 = 10 units. 15 -> 5. Safe distance from 0.
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        
        // Smooth interpolation could be used, but direct mapping feels responsive for a background
        state.camera.position.z = 15 - scrollY * 0.002;
        
        // Subtle corkscrew rotation
        state.camera.rotation.z = -scrollY * 0.0001;
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
            camera={{ position: [0, 0, 15], fov: 50 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
        >
            <CameraRig />
            <fog attach="fog" args={[fogColor, 10, 25]} />
            <ambientLight intensity={0.5} />
            
            {/* Background Particles (Static/Drifting) */}
            <FloatingParticles count={300} />
            
            {/* Foreground Neural Mesh (Active) */}
            <Connections count={60} />
        </Canvas>
    </div>
  );
}