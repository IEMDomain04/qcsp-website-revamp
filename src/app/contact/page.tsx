import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const socials = [
  {
    name: "Facebook",
    href: "",
    src: "/assets/socials/fb.svg",
  },
  {
    name: "Instagram",
    href: "",
    src: "/assets/socials/ig.svg",
  },
  {
    name: "Twitter",
    href: "",
    src: "/assets/socials/x-twitter.svg",
  },
  {
    name: "YouTube",
    href: "",
    src: "/assets/socials/yt.svg",
  },
];

const contacts = () => {
  return (
    <div>
      <NavBar />

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-30 mb-32 space-y-10 lg:space-y-0">
        <div className="max-sm:w-60">
          <Image
            src="/assets/qcsp-icon-animation.gif"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-h1 font-bold mb-10 text-center lg:text-left max-sm:text-xl">
            Contact us
          </h1>
          <h2 className="text-h2 font-semibold italic text-secondary text-center lg:text-left max-sm:text-lg">
            "Driving Change Together"
          </h2>
        </div>
      </div>

      <div className="flex justify-center gap-30 bg-blue-50/50 py-10">
        {socials.map((social) => (
          <a
            className="duration-300 rounded-4xl hover:scale-105 hover:shadow-2xl"
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={100}
              height={100}
            />
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default contacts;
