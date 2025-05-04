import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
    {
      name: "University of the Philippines",
      logo: "/assets/partners/up.png",
      type: "Academic",
    },
    {
      name: "Department of Science and Technology",
      logo: "/assets/partners/dost.png",
      type: "Government",
    },
    {
      name: "Department of Science and Technology",
      logo: "/assets/partners/dost.png",
      type: "Government",
    },
  ]

const Partnerships = () => {
    return (
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
    )
}

export default Partnerships
