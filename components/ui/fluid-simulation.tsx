"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// --------------------------------------------------------
// SHADERS
// --------------------------------------------------------

const SimulationMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uColor1: new THREE.Color(0.2, 0.8, 0.2),
    uColor2: new THREE.Color(0.2, 0.5, 1.0),
    uScroll: 0, // 0.0 to 1.0 representing page progress
    uOpacity: 0.8,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uScroll;
    
    varying float vDistance;
    varying float vScrollState;

    // Simplex Noise (Standard)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vScrollState = uScroll;
      vec3 pos = position;
      
      // --- PHASE 1: FLOW (Top of page) ---
      // Gentle sine wave drift - Slower, larger waves for premium feel
      float noiseFreq = 0.15; 
      float noiseAmp = 0.3;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq + uTime * 0.05, pos.z);
      
      vec3 flowPos = pos;
      flowPos.x += snoise(noisePos) * 3.0;
      flowPos.y += snoise(noisePos + 100.0) * 3.0;
      flowPos.z += snoise(noisePos + 200.0) * 3.0;

      // --- PHASE 2: VORTEX (Middle of page) ---
      // Spin around Y axis
      float angle = uTime * 0.5 + pos.y * 0.1;
      float radius = length(pos.xz);
      vec3 vortexPos = vec3(
        cos(angle) * radius,
        pos.y,
        sin(angle) * radius
      );
      
      // --- PHASE 3: ORBIT/SPHERE (Bottom of page) ---
      // Normalize to sphere
      vec3 spherePos = normalize(pos) * 12.0;

      // --- BLENDING STATES ---
      // We mix based on uScroll (0.0 -> 1.0)
      
      vec3 finalPos = flowPos;
      
      // 0.0 - 0.5: Flow to Vortex
      float mix1 = smoothstep(0.0, 0.5, uScroll);
      finalPos = mix(finalPos, vortexPos, mix1);
      
      // 0.5 - 1.0: Vortex to Sphere
      float mix2 = smoothstep(0.5, 1.0, uScroll);
      finalPos = mix(finalPos, spherePos, mix2);

      // --- MOUSE INTERACTION ---
      float d = distance(finalPos, uMouse);
      vDistance = d;
      
      if (d < 8.0) {
        vec3 dir = normalize(finalPos - uMouse);
        finalPos += dir * (8.0 - d) * 0.8;
      }

      vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
      gl_PointSize = (60.0 / -mvPosition.z); 
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uOpacity;
    varying float vDistance;
    varying float vScrollState;

    void main() {
      float r = distance(gl_PointCoord, vec2(0.5));
      if (r > 0.5) discard;

      // Make dots sharper: Harder edge with slight anti-aliasing
      float alpha = 1.0 - smoothstep(0.4, 0.5, r);

      // Color Shift based on Scroll
      // Top: Green/Blue
      // Bottom: Purple/Pink or just brighter Green
      
      vec3 c1 = uColor1; // Greenish
      vec3 c2 = uColor2; // Blueish
      
      vec3 finalColor = mix(c1, c2, vScrollState); // Shift hue as we scroll

      if (vDistance < 5.0) {
        finalColor += 0.5; // Bright white highlight near mouse
      }

      gl_FragColor = vec4(finalColor, alpha * uOpacity);
    }
  `
);

extend({ SimulationMaterial });

// --------------------------------------------------------
// NEURAL LINES SHADER (Duplicates Noise for Sync)
// --------------------------------------------------------

const LineMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uColor: new THREE.Color(0.0, 1.0, 0.5), // Vivid Electric Green/Cyan
    uScroll: 0,
    uOpacity: 0.0,
    uConnectProgress: 0,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uScroll;
    uniform float uConnectProgress;
    
    varying float vOpacity;

    // Simplex Noise (Standard) - Copied for sync
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vec3 pos = position;
      
      // PHASE 1: FLOW
      float noiseFreq = 0.15; 
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq + uTime * 0.05, pos.z);
      vec3 flowPos = pos;
      flowPos.x += snoise(noisePos) * 3.0;
      flowPos.y += snoise(noisePos + 100.0) * 3.0;
      flowPos.z += snoise(noisePos + 200.0) * 3.0;

      // PHASE 2: VORTEX
      float angle = uTime * 0.5 + pos.y * 0.1;
      float radius = length(pos.xz);
      vec3 vortexPos = vec3(cos(angle) * radius, pos.y, sin(angle) * radius);
      
      // PHASE 3: SPHERE
      vec3 spherePos = normalize(pos) * 12.0;

      // BLEND
      vec3 finalPos = flowPos;
      float mix1 = smoothstep(0.0, 0.5, uScroll);
      finalPos = mix(finalPos, vortexPos, mix1);
      float mix2 = smoothstep(0.5, 1.0, uScroll);
      finalPos = mix(finalPos, spherePos, mix2);

      // --- VISIBILITY LOGIC ---
      // 1. Must be in sphere phase (uScroll near 1.0)
      // Relaxed threshold to ensure visibility before hitting absolute bottom
      float phaseFade = smoothstep(0.85, 0.95, uScroll);
      
      // 2. Sequential Reveal based on uConnectProgress
      float pulse = 0.5 + 0.5 * sin(uTime * 3.0 + pos.x + pos.y);
      
      // Apply visibility based on scroll and connection progress
      float reveal = smoothstep(0.0, 1.0, uConnectProgress);
      
      vOpacity = phaseFade * pulse * reveal;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    varying float vOpacity;

    void main() {
      if (vOpacity < 0.01) discard;
      gl_FragColor = vec4(uColor, vOpacity);
    }
  `
);

extend({ LineMaterial });

// --------------------------------------------------------
// COMPONENTS
// --------------------------------------------------------

function NeuralLines({ count = 500 }) {
  const lines = useRef<THREE.LineSegments>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  // Ref to track accumulated progress for "drawing" the lines
  const connectProgressRef = useRef(0);

  const positions = useMemo(() => {
    const pts = [];
    const r = 12.0;
    
    // Create random line segments on sphere surface
    for (let i = 0; i < count; i++) {
        // Point 1
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const x1 = r * Math.sin(phi) * Math.cos(theta);
        const y1 = r * Math.sin(phi) * Math.sin(theta);
        const z1 = r * Math.cos(phi);
        
        // Point 2 (Nearby)
        // Perturb spherical coordinates slightly
        const theta2 = theta + (Math.random() - 0.5) * 0.5;
        const phi2 = phi + (Math.random() - 0.5) * 0.5;
        
        const x2 = r * Math.sin(phi2) * Math.cos(theta2);
        const y2 = r * Math.sin(phi2) * Math.sin(theta2);
        const z2 = r * Math.cos(phi2);
        
        pts.push(x1, y1, z1);
        pts.push(x2, y2, z2);
    }
    return new Float32Array(pts);
  }, [count]);

  useFrame((state, delta) => {
    if (!material.current) return;
    
    material.current.uniforms.uTime.value = state.clock.getElapsedTime();
    
    const scroller = document.documentElement;
    const scrollPct = scroller.scrollTop / (scroller.scrollHeight - scroller.clientHeight) || 0;
    
    material.current.uniforms.uScroll.value = THREE.MathUtils.lerp(
        material.current.uniforms.uScroll.value,
        scrollPct,
        0.05
    );

    // Logic: If user is at the bottom (scroll > 0.9), start filling the progress bar
    if (scrollPct > 0.9) {
        // Speed of connection: 0.5 means it takes 2 seconds to fully connect
        connectProgressRef.current = Math.min(connectProgressRef.current + delta * 0.5, 1.2);
    } else {
        // If they scroll away, slowly fade them out or reset
        connectProgressRef.current = Math.max(connectProgressRef.current - delta * 2.0, 0);
    }
    
    material.current.uniforms.uConnectProgress.value = connectProgressRef.current;
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]} 
        />
      </bufferGeometry>
      {/* @ts-expect-error - Custom shader material */}
      <lineMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function Particles({ count = 10000 }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { theme, systemTheme } = useTheme();
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40; 
      p[i * 3 + 1] = (Math.random() - 0.5) * 40;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!material.current) return;
    
    // Update Uniforms
    material.current.uniforms.uTime.value = state.clock.getElapsedTime();

    // Mouse
    const x = (state.mouse.x * viewport.width) / 2;
    const y = (state.mouse.y * viewport.height) / 2;
    // Smooth lerp mouse
    const currentMouse = material.current.uniforms.uMouse.value;
    currentMouse.x = THREE.MathUtils.lerp(currentMouse.x, x, 0.1);
    currentMouse.y = THREE.MathUtils.lerp(currentMouse.y, y, 0.1);
    
    // Scroll Logic
    const scroller = document.documentElement;
    const scrollPct = scroller.scrollTop / (scroller.scrollHeight - scroller.clientHeight) || 0;
    
    material.current.uniforms.uScroll.value = THREE.MathUtils.lerp(
        material.current.uniforms.uScroll.value,
        scrollPct,
        0.05
    );
  });

  // Theme-aware colors - Premium Palette
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  
  // Premium Emerald & Gold for Dark Mode, Rich Amber & Emerald for Light
  const color1 = new THREE.Color(isDark ? "#ca8a04" : "#d97706"); // Yellow-600 (Darker Gold) / Amber-600
  const color2 = new THREE.Color(isDark ? "#10b981" : "#059669"); // Emerald / Emerald-600

  // Use NormalBlending for light mode to make particles visible against white
  const blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
  const opacity = isDark ? 0.5 : 0.6;

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]} 
        />
      </bufferGeometry>
      {/* @ts-expect-error - Custom shader material */}
      <simulationMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={blending}
        uColor1={color1}
        uColor2={color2}
        uOpacity={opacity}
      />
    </points>
  );
}

export function FluidSimulation() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Particles count={10000} />
        <NeuralLines count={1000} />
      </Canvas>
    </div>
  );
}
