import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. RE-DEFINED INTERACTIVE NETWORK GRAPH (Home)
function NetworkGraph() {
  const ref = useRef<THREE.Points>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { points, linePositions } = useMemo(() => {
    const count = 300; 
    const p = new Float32Array(count * 3);
    const l = [];
    for (let i = 0; i < count; i++) {
      const r = 4; 
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < i + 2; j++) {
        const next = j % count;
        l.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
        l.push(p[next * 3], p[next * 3 + 1], p[next * 3 + 2]);
      }
    }
    return { points: p, linePositions: new Float32Array(l) };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.05;
    lineRef.current.rotation.y = time * 0.05;

    // Smooth Mouse Reactivity (Parallax)
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.4;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
    lineRef.current.position.set(ref.current.position.x, ref.current.position.y, ref.current.position.z);
  });

  return (
    <group position={[1.5, 0, -5]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffc1d0"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffc1d0" transparent opacity={0.03} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

// 2. INTERACTIVE WAVE (About)
function TopographyWave() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.current.y = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const geom = meshRef.current.geometry as THREE.BufferGeometry;
      const positions = geom.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        // Wave logic + Mouse proximity displacement
        const dist = Math.sqrt((x - mouse.current.x * 20) ** 2 + (y - mouse.current.y * -20) ** 2);
        const ripple = Math.sin(dist - time * 2) * 0.2 / (dist + 1);
        
        positions[i + 2] = Math.sin(x * 0.5 + time) * 0.15 + ripple;
      }
      geom.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, -5]}>
      <planeGeometry args={[25, 25, 52, 52]} />
      <meshStandardMaterial 
        color="#f49db5" 
        wireframe 
        transparent 
        opacity={0.04} 
        emissive="#f49db5"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// 3. INTERACTIVE SHAPE (Contact)
function FloatingCore({ interactionState }: { interactionState: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const speed = interactionState === 'active' ? 2 : 0.5;
      meshRef.current.rotation.x += delta * speed * 0.2;
      meshRef.current.rotation.y += delta * speed * 0.3;
      meshRef.current.position.y = Math.sin(time) * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, -3]}>
        <MeshDistortMaterial
          color={interactionState === 'active' ? "#ffc1d0" : "#1a1d23"}
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={4}
          transparent
          opacity={0.8}
        />
        <pointLight intensity={2} color="#ffc1d0" />
      </Sphere>
    </Float>
  );
}

// 4. ATMOSPHERIC DRIFT (Blog)
function BlogFlow() {
  const meshRef = useRef<THREE.Points>(null!);
  const count = 1000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
       p[i * 3] = (Math.random() - 0.5) * 15;
       p[i * 3 + 1] = (Math.random() - 0.5) * 15;
       p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.z = time * 0.02;
    // Gentle floating
    meshRef.current.position.y = Math.sin(time * 0.3) * 0.1;
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#f49db5"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

export default function ParticleBackground({ activeTab, interactionState }: { activeTab: string; interactionState?: string }) {
  return (
    <div className="fixed inset-0 -z-10 bg-bg-dark overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffc1d0" />
        <spotLight position={[-10, 10, 5]} angle={0.15} penumbra={1} intensity={2} color="#b8846b" />

        {activeTab === 'home' && <NetworkGraph />}
        {activeTab === 'about' && <TopographyWave />}
        {activeTab === 'blog' && <BlogFlow />}
        {activeTab === 'contact' && <FloatingCore interactionState={interactionState || 'idle'} />}
        
        {/* Default / Fallback */}
        {!(activeTab === 'home' || activeTab === 'about' || activeTab === 'blog' || activeTab === 'contact' || activeTab.startsWith('case-study')) && <NetworkGraph />}
      </Canvas>
    </div>
  );
}
