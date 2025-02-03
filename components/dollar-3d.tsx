"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls, Center, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function DollarSign() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Center>
      <mesh ref={meshRef}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          $
          <meshBasicMaterial color="#ffffff" />
        </Text3D>
      </mesh>
    </Center>
  )
}

export default function Dollar3D() {
  return (
    <div className="mt-12 mb-4 relative z-10">
      <div className="h-[400px] w-full max-w-[400px] mx-auto">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <DollarSign />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(Math.PI * 3) / 4}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <p className="text-gray-400 text-center mt-4">Pay in our main page, recommended in Discord Server though.</p>
    </div>
  )
}

