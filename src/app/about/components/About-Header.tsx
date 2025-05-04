import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const About_Header = () => {
    return (
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
    )
}

export default About_Header
