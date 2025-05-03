"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { random } from "maath"

type ParticleFieldProps = {
  count?: number
}

function ParticleField({ count = 5000 }: ParticleFieldProps) {
    const points = useRef<THREE.Points>(null)
  
    const sphere = random.inSphere(new Float32Array(count * 3), { radius: 20 })
    const positions = sphere
  
    useFrame((_, delta) => {
      if (points.current) {
        points.current.rotation.x += delta * 0.05
        points.current.rotation.y += delta * 0.05
      }
    })

  return (
    <Points ref={points} positions={positions as Float32Array} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#88ccff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function QuantumBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}
