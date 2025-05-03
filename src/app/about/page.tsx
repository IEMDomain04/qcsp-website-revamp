"use client";
import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

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
        <motion.div
          className="flex flex-col space-y-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-h1 text-secondary font-bold max-sm:text-xl">
            About
          </h1>
          <div className="space-y-10">
            <p className="text-h4 max-sm:text-sm">
              Known globally as OneQuantum Philippines, QCSP is the leading
              community of academics, industry leaders, and quantum enthusiasts.
              Together, we're building a vibrant quantum ecosystem in the
              Philippines, fostering collaboration and innovation. Moving the
              quantum frontier, one qubit at a time.
            </p>
            <button
              className="px-10 py-5 rounded-xl bg-tertiary font-bold cursor-pointer max-sm:text-xs max-sm:p-4 hover:scale-125"
              type="button"
            >
              See our Team..
            </button>
          </div>
        </motion.div>

        {/* Connect Minds */}
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
        </motion.div>

        {/* Vision and Mission */}
        <motion.div
          className="flex flex-col lg:flex-row lg:space-x-40 space-y-10 lg:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-5">
            <h1 className="text-h1 text-accent font-bold max-sm:text-xl">
              Vision
            </h1>
            <p className="text-h4 max-sm:text-xs">
              Our vision is to be a global force for good in Quantum Tech and
              support humanity’s transition into the quantum era in an inclusive
              way, enabling everyone to contribute, grow and make a positive
              impact.
            </p>
          </div>

          <div className="space-y-5">
            <h1 className="text-h1 text-accent font-bold max-sm:text-xl">
              Mission
            </h1>
            <p className="text-h4 max-sm:text-xs">
              Our mission it to accomplish this by providing a global community
              with local chapters, professional mentoring, career opportunities
              and quantum tech skills.
            </p>
          </div>
        </motion.div>

        {/* Partnership */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <div className="space-y-10">
            <div className="space-y-5">
              <h1 className="text-h1 text-secondary font-bold max-sm:text-xl">
                Partnership
              </h1>
              <h2 className="text-h4 italic font-bold max-sm:text-xl">
                Let's create something together!
              </h2>
              <p className="text-h4 max-sm:text-xs">
                QCSP is open to strategic partnerships that drive innovation and
                mutual growth. We collaborate with tech companies, research
                institutions, and industry leaders to build impactful solutions.
              </p>
            </div>
            <button
              className="px-10 py-5 rounded-xl bg-tertiary font-bold cursor-pointer max-sm:text-xs max-sm:p-4"
              type="button"
            >
              Be a partner..
            </button>
          </div>

          <Image
            src={"/assets/about-icon2.svg"}
            alt="logo"
            width={500}
            height={500}
            className="max-sm:w-50"
          />
        </motion.div>

        {/* Join Us and Contact Us */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-h1 font-bold text-accent text-center max-sm:text-xl">
            Check our social and Contact us!
          </h1>
          <button
            className="text-black px-10 py-5 rounded-xl bg-amber-50 font-bold cursor-pointer max-sm:text-xs max-sm:p-4"
            type="button"
          >
            Contact us
          </button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default about;
