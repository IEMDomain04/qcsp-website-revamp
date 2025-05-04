"use client";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import About from "./components/About";
import Vision_Mission from "./components/Vision-Mission";
import Core_Values from "./components/Core-Values";
import Partnerships from "./components/Partnerships";
import Initiatives from "./components/Initiatives";
import Teams from "./components/Teams";
import About_Header from "./components/About-Header";

const about = () => {
  return (
    <div>
      <NavBar />

      {/* Header */}
      <About_Header />

      {/* Main Content */}
      <div className="flex flex-col w-11/12 lg:w-3/4 space-y-60 mx-auto text-justify">
        {/* About */}
        <About />

        {/* Vision and Mission */}
        <Vision_Mission />

        {/* Core Values */}
        <Core_Values />

        {/* Initiatives */}
        <Initiatives />

        {/* Teams */}
        <Teams />

        {/* Partnership */}
        <Partnerships />
      </div>

      <Footer />
    </div>
  );
};

export default about;
