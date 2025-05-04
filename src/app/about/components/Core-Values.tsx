import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Lightbulb, Users, Globe, BookOpen, Rocket } from "lucide-react"

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

const Core_Values = () => {
    return (
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
    )
}

export default Core_Values
