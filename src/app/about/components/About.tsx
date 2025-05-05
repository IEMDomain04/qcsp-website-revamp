import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion";
import React, { useRef } from "react";
import type * as THREE from "three"


function AtomModel() {
    const groupRef = useRef<THREE.Group>(null)
    const electronRef1 = useRef<THREE.Mesh>(null)
    const electronRef2 = useRef<THREE.Mesh>(null)
    const electronRef3 = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.1
        }

        if (electronRef1.current) {
            electronRef1.current.position.x = Math.sin(t * 0.8) * 1.2
            electronRef1.current.position.z = Math.cos(t * 0.8) * 1.2
        }

        if (electronRef2.current) {
            electronRef2.current.position.x = Math.sin(t * 0.8 + 2) * 1.2
            electronRef2.current.position.z = Math.cos(t * 0.8 + 2) * 1.2
        }

        if (electronRef3.current) {
            electronRef3.current.position.x = Math.sin(t * 0.8 + 4) * 1.2
            electronRef3.current.position.z = Math.cos(t * 0.8 + 4) * 1.2
        }
    })

    return (
        <group ref={groupRef}>
            {/* Nucleus */}
            <mesh>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#6366f1" />
            </mesh>

            {/* Electrons */}
            <mesh ref={electronRef1}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
            </mesh>

            <mesh ref={electronRef2}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
            </mesh>

            <mesh ref={electronRef3}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
            </mesh>

            {/* Electron paths (rings) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#4f46e5" transparent opacity={0.3} />
            </mesh>

            <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                <torusGeometry args={[1.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#4f46e5" transparent opacity={0.3} />
            </mesh>
        </group>
    )
}

const About = () => {
    return (
        <section id="about" className="lg:-mt-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 mx-5 lg:mx-0"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What is QCSP?</h2>
                    <p className="text-lg text-slate-300">
                        Known globally as OneQuantum Philippines, QCSP is the leading
                        community of academics, industry leaders, and quantum enthusiasts.
                        Together, we're building a vibrant quantum ecosystem in the
                        Philippines, fostering collaboration and innovation. Moving the
                        quantum frontier, one qubit at a time.
                    </p>
                </motion.div>

                <div className="h-[30rem] lg:h-[50rem]">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={1} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <AtomModel />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default About
