"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function DollarSign() {
  const meshRef = useRef<THREE.Mesh>(null)
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlwsT7tORm7sIuOI507mrW9e0qtFtW.png",
  )

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 0.2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function DollarModel() {
  return (
    <div className="h-[400px] w-full max-w-[400px] mx-auto my-8">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DollarSign />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <p className="text-gray-400 text-center mt-4">Pay in our main page, recommended in Discord Server though.</p>
    </div>
  )
}

