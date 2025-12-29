"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function FloatingParticles({ count = 400 }) {
  const points = useRef<THREE.Points>(null);
  const { theme, systemTheme } = useTheme();

  // Generate particles
  const particles = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const color = isDark ? "#86a447" : "#3f522b";

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05} // Smaller background dots
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function Connections({ count = 120 }) {
    const lines = useRef<THREE.LineSegments>(null);
    const dots = useRef<THREE.Points>(null);
    const { theme, systemTheme } = useTheme();

    // Node positions and velocities
    const [positions, velocities] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
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
        if (!lines.current || !dots.current) return;

        // Update positions
        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            if (Math.abs(positions[i*3]) > 20) velocities[i].x *= -1;
            if (Math.abs(positions[i*3+1]) > 20) velocities[i].y *= -1;
            if (Math.abs(positions[i*3+2]) > 20) velocities[i].z *= -1;
        }

        // Create connections
        const lineConnections = [];
        const connectionDist = 7;

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i*3] - positions[j*3];
                const dy = positions[i*3+1] - positions[j*3+1];
                const dz = positions[i*3+2] - positions[j*3+2];
                const distSq = dx*dx + dy*dy + dz*dz;

                if (distSq < connectionDist * connectionDist) {
                    lineConnections.push(
                        positions[i*3], positions[i*3+1], positions[i*3+2],
                        positions[j*3], positions[j*3+1], positions[j*3+2]
                    );
                }
            }
        }

        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineConnections, 3));
        dots.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    });

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === "dark";
    const color = isDark ? "#86a447" : "#3f522b";

    return (
        <group>
            {/* The Dots at every intersection */}
            <Points ref={dots}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={isDark ? 0.8 : 1.0}
                />
            </Points>
            {/* The Lines connecting them */}
            <lineSegments ref={lines} geometry={lineGeo}>
                <lineBasicMaterial color={color} transparent opacity={isDark ? 0.2 : 0.4} />
            </lineSegments>
        </group>
    );
}

function CameraRig() {
    useFrame((state) => {
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        
        // Increased scroll depth (0.005 multiplier)
        state.camera.position.z = 15 - scrollY * 0.005;
        
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
            <fog attach="fog" args={[fogColor, 10, 50]} /> {/* Increased fog range */}
            <ambientLight intensity={0.5} />
            
            {/* Background Particles (Static/Drifting) */}
            <FloatingParticles count={400} /> {/* Increased count for larger volume */}
            
            {/* Foreground Neural Mesh (Active) */}
            <Connections count={80} /> {/* Increased count for density */}
        </Canvas>
    </div>
  );
}