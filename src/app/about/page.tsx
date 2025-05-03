"use client";
import React, { useRef } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Atom, Lightbulb, Users, Globe, BookOpen, Rocket } from "lucide-react"
import { Calendar, GraduationCap, Laptop, FlaskRoundIcon as Flask, Award } from "lucide-react" // Import users kapag nilipat
import type * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion";

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

const values = [
  {
    icon: <Atom className="h-8 w-8 text-accent" />,
    title: "Scientific Excellence",
    description: "We uphold the highest standards of scientific rigor and integrity in all our endeavors.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Innovation",
    description: "We embrace creative thinking and novel approaches to quantum challenges.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives and interdisciplinary cooperation.",
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: "Inclusivity",
    description: "We strive to make quantum science accessible to all Filipinos regardless of background.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    title: "Education",
    description: "We are committed to continuous learning and knowledge sharing.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: "Impact",
    description: "We focus on applications that address real-world challenges facing the Philippines.",
  },
]

const partners = [
  {
    name: "University of the Philippines",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Academic",
  },
  {
    name: "Department of Science and Technology",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Government",
  },
  {
    name: "Philippine Institute of Quantum Research",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Research",
  },
  {
    name: "QuantumTech Philippines",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Industry",
  },
  {
    name: "Asian Quantum Computing Alliance",
    logo: "/placeholder.svg?height=100&width=200",
    type: "International",
  },
  {
    name: "Philippine Future Technologies Association",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Industry",
  },
]


const initiatives = [
  {
    title: "Quantum Computing Bootcamp",
    description:
      "Intensive 2-week training program for students and professionals to learn quantum computing fundamentals.",
    icon: <Laptop className="h-8 w-8 text-accent" />,
    status: "Annual Event",
  },
  {
    title: "Philippine Quantum Conference",
    description:
      "The country's premier gathering of quantum researchers, featuring keynote speakers from around the world.",
    icon: <Calendar className="h-8 w-8 text-accent" />,
    status: "Annual Event",
  },
  {
    title: "Quantum Education Initiative",
    description: "Developing curriculum materials for high schools and universities to introduce quantum concepts.",
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    status: "Ongoing",
  },
  {
    title: "Quantum Research Grants",
    description: "Funding opportunities for Filipino researchers working on quantum technologies.",
    icon: <Award className="h-8 w-8 text-accent" />,
    status: "Biannual",
  },
  {
    title: "Quantum Hackathon",
    description: "Competition challenging participants to solve real-world problems using quantum algorithms.",
    icon: <Users className="h-8 w-8 text-accent" />,
    status: "Annual Event",
  },
  {
    title: "Quantum Lab Network",
    description: "Collaborative research infrastructure connecting quantum laboratories across the Philippines.",
    icon: <Flask className="h-8 w-8 text-accent" />,
    status: "In Development",
  },
]

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const about = () => {
  return (
    <div>
      <NavBar />

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-30 mb-32 space-y-10 lg:space-y-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="max-sm:w-60"
        >
          <Image
            src="/assets/qcsp-icon-animation.gif"
            alt="logo"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-h1 font-bold mb-10 text-center lg:text-left max-sm:text-xl">
            Quantum Computing Society of the Philippines
          </h1>
          <h2 className="text-h2 font-bold italic text-secondary text-center lg:text-left max-sm:text-xl">
            "Change Forward"
          </h2>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-11/12 lg:w-3/4 space-y-60 mx-auto text-justify">
        {/* About */}
        <section id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
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

            <div className="h-[30rem]">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <AtomModel />
              </Canvas>
            </div>
          </div>
        </section>

        {/* Connect Minds
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 lg:space-x-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div className="max-sm:w-50">
            <Image
              src="/assets/about-icon1.svg"
              alt="logo"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-h3 font-bold mb-10 text-secondary text-center lg:text-left max-sm:text-xl">
              Connect minds across research, industry, and curiosity.
            </h1>
            <div className="flex flex-col space-y-10">
              <h2 className="text-h4 italic max-sm:text-xs">
                Researchers: Collaborate, share knowledge, and accelerate
                discoveries with QCSP. Push the boundaries of quantum science
                together.
              </h2>
              <h2 className="text-h4 italic max-sm:text-xs">
                Industry Leaders: Bridge the gap between research and real-world
                applications. Gain a competitive edge in quantum technologies.
              </h2>
              <h2 className="text-h4 italic max-sm:text-xs">
                Learners & Enthusiasts: Ignite your passion for quantum
                technologies. Access resources, connect with a community, and
                explore this transformative field.
              </h2>
            </div>
          </div>
        </motion.div> */}

        {/* Vision and Mission */}
        <section id="mission" className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission and Vision</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Guiding our journey into the quantum future</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-extrabold text-accent mb-4 leading-tight sm:text-4xl">
                Our Mission
              </h3>
              <p className="text-base text-slate-400 mb-2 sm:text-lg">
                We bring this vision to life by:
              </p>
              <p className="text-h5 text-slate-200 sm:text-xl leading-relaxed max-w-3xl">
                Building a global community through local chapters, empowering individuals with access to
                mentorship, career pathways, and practical skills in quantum technology—fostering growth, collaboration,
                and impact worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-extrabold text-accent mb-4 leading-tight sm:text-4xl">
                Our Vision
              </h3>
              <p className="text-base text-slate-400 mb-2 sm:text-lg">
                We imagine a future where:
              </p>
              <p className="text-h5 text-slate-200 sm:text-xl leading-relaxed max-w-3xl">
                Our mission it to accomplish this by providing a global community
                with local chapters, professional mentoring, career opportunities
                and quantum tech skills.
              </p>

            </motion.div>
          </div>
        </section>


        {/* Core Values */}
        <section id="values">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">The principles that guide our organization</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-colors"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnership */}
        <section id="partnerships">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnerships</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Collaborating with leading institutions to advance quantum science in the Philippines
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors"
              >
                <div className="relative h-20 w-full mb-4">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{partner.name}</h3>
                <p className="text-sm text-accent">{partner.type} Partner</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Initiatives */}
        <section id="initiatives">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Initiatives</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Programs and projects advancing quantum science in the Philippines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-colors"
              >
                <div className="mb-4">{initiative.icon}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-xs font-medium mb-3">
                  {initiative.status}
                </div>
                <h3 className="text-h5 font-bold text-white mb-2">{initiative.title}</h3>
                <p className="text-slate-300">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default about;
