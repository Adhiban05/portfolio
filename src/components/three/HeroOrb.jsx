import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Trail, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three';

function GlowingSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#3700B3"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
          distort={0.35}
          speed={2}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
}

function OrbitingRing({ radius, rotationAxis, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation[rotationAxis] += 0.008;
      ref.current.rotation.z += 0.002;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 8, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function FloatingCube({ position, scale = 0.12 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[scale, scale, scale]} />
      <meshStandardMaterial color="#06B6D4" emissive="#0891B2" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
    </mesh>
  );
}

function ParticleField() {
  const count = 120;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y += 0.001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7C3AED" size={0.025} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function GridFloor() {
  return (
    <gridHelper
      args={[12, 20, '#7C3AED', '#4A4455']}
      position={[0, -2.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#7C3AED" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#06B6D4" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />

      <Stars radius={40} depth={50} count={600} factor={2} saturation={0} fade speed={0.5} />
      <ParticleField />
      <GlowingSphere />
      <OrbitingRing radius={2.2} rotationAxis="x" color="#7C3AED" />
      <OrbitingRing radius={2.6} rotationAxis="y" color="#06B6D4" />
      <OrbitingRing radius={3.0} rotationAxis="z" color="#ffffff" />
      {[
        [2.5, 0.5, 0], [-2.5, 1, 0.5], [1.5, -1.5, 1],
        [-1.8, -0.8, -1], [2.2, 1.5, -1], [-2.2, 0.2, 1.5],
      ].map((pos, i) => (
        <FloatingCube key={i} position={pos} scale={i % 2 === 0 ? 0.1 : 0.14} />
      ))}
      <GridFloor />
    </Canvas>
  );
}
