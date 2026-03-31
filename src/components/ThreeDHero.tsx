import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 32, 100]}>
      <meshStandardMaterial
        color="#f49db5"
        wireframe
        emissive="#f49db5"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Torus>
  );
}

export default function ThreeDHero() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#f49db5" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#b8846b" intensity={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <RotatingShape />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {/* AMBIENT GLOW BEHIND 3D */}
      <div className="absolute inset-0 bg-accent-pink/5 blur-[120px] rounded-full -z-10" />
    </div>
  );
}
