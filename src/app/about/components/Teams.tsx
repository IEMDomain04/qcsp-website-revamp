"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Maria Santos",
    role: "President & Quantum Physicist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ph.D. in Quantum Physics with 15 years of research experience in quantum computing algorithms.",
  },
  {
    name: "Engr. Juan Reyes",
    role: "Vice President & Quantum Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializes in quantum hardware development with background in superconducting qubits.",
  },
  {
    name: "Dr. Ana Lim",
    role: "Research Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in quantum information theory and quantum error correction codes.",
  },
  {
    name: "Prof. Carlos Mendoza",
    role: "Education Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Develops quantum computing curriculum for universities across the Philippines.",
  },
  {
    name: "Sophia Garcia",
    role: "Industry Relations Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bridges academic research with industry applications of quantum technology.",
  },
  {
    name: "Miguel Tan",
    role: "Communications Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Responsible for public outreach and making quantum concepts accessible.",
  },
]

export default function AboutTeam() {
  return (
    <section id="team" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Meet the brilliant minds behind the Quantum Society of the Philippines
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-xl overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-indigo-400 mb-3">{member.role}</p>
              <p className="text-slate-300">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
