"use client";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Calendar, GraduationCap, Laptop, Users, FlaskRoundIcon as Flask, Award } from "lucide-react" // Import users kapag nilipat
import { motion } from "framer-motion";
import About from "./components/About";
import Vision_Mission from "./components/Vision-Mission";
import Core_Values from "./components/Core-Values";


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
        <About />

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
        <Vision_Mission />


        {/* Core Values */}
        <Core_Values />
        

        {/* Partnership */}
        


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
