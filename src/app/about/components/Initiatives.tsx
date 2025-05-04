import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Laptop, Users, FlaskRoundIcon as Flask, Award } from "lucide-react"

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

const Initiatives = () => {
    return (
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
    )
}

export default Initiatives
