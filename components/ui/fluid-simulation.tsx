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
    uColor: new THREE.Color(0.2, 0.4, 0.2), // Default green
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    
    varying vec2 vUv;
    varying float vDistance;

    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;

      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

      // Permutations
      i = mod289(i);
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

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

      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      // Mix final noise value
      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // CURL NOISE FLOW
      // We displace the particle based on noise and time
      float noiseFreq = 0.5;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.2, pos.y * noiseFreq + uTime * 0.2, pos.z);
      
      pos.x += snoise(noisePos) * noiseAmp;
      pos.y += snoise(noisePos + 100.0) * noiseAmp;
      pos.z += snoise(noisePos + 200.0) * noiseAmp;

      // MOUSE INTERACTION
      // Simple repulsion
      float d = distance(pos, uMouse);
      vDistance = d;
      
      if (d < 5.0) {
        vec3 dir = normalize(pos - uMouse);
        pos += dir * (5.0 - d) * 0.5;
      }

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = (100.0 / -mvPosition.z); // Scale based on depth
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    varying float vDistance;

    void main() {
      // Circle shape
      float r = distance(gl_PointCoord, vec2(0.5));
      if (r > 0.5) discard;

      // Glow center
      float alpha = 1.0 - (r * 2.0);
      alpha = pow(alpha, 1.5);

      // Color variation based on mouse distance
      vec3 finalColor = uColor;
      if (vDistance < 5.0) {
        finalColor += vec3(0.2, 0.2, 0.2); // Highlight near mouse
      }

      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

extend({ SimulationMaterial });

// --------------------------------------------------------
// COMPONENT
// --------------------------------------------------------

function Particles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { theme, systemTheme } = useTheme();
  const { viewport } = useThree();

  // Generate initial positions
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30; // X
      p[i * 3 + 1] = (Math.random() - 0.5) * 30; // Y
      p[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!material.current) return;
    
    // Update time
    material.current.uniforms.uTime.value = state.clock.getElapsedTime();

    // Update mouse position (projected to 3D roughly)
    const x = (state.mouse.x * viewport.width) / 2;
    const y = (state.mouse.y * viewport.height) / 2;
    material.current.uniforms.uMouse.value.set(x, y, 0);
  });

  // Theme Sync
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const color = new THREE.Color(isDark ? "#86a447" : "#2d3e15");

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
      {/* @ts-expect-error - Custom shader material extended in R3F */}
      <simulationMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uColor={color}
      />
    </points>
  );
}

export function FluidSimulation() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Particles count={8000} />
      </Canvas>
    </div>
  );
}
