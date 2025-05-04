import React from 'react'
import { motion } from 'framer-motion'

const vision_mission = () => {
    return (
        <section id="mission" className="-mt-50">
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
    )
}

export default vision_mission
