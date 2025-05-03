import Image from "next/image";
import React from "react";

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

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contacts",
    href: "/contacts",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Workshops",
    href: "/workshops",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 px-6 py-32 bg-black/50 text-white sm:px-12 md:px-20 lg:px-32 lg:space-x-32">
      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
        <div className="space-y-4">
          <Image src={"/assets/QCSP.svg"} alt="logo" width={200} height={200} />
          <p className="text-sm sm:text-base leading-relaxed">
            A chapter of the global OneQuantum organization. A non-profit
            community about quantum technology.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
          <p className="text-xs sm:text-sm">
            &copy; 2025 QCSP PH. All rights reserved.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full sm:w-auto space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Navigation</h2>
        <div className="flex flex-col space-y-2 text-sm sm:text-base">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="w-fit border-b border-transparent hover:border-yellow-400 hover:text-yellow-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-auto space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Contact Us</h2>
        <div className="flex flex-col space-y-1 text-sm sm:text-base">
          <p>Manila City, Philippines</p>
          <p>(63) 0908123453</p>
          <p>contactus@qcsp.com.ph</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
