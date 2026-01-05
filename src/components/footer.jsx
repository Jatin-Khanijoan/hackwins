import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants for motion components to reduce repetition
const motionVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Data for links and contacts to make the component more data-driven
const quickLinks = [
  { name: "About", href: "#about-section" },
  { name: "Timeline", href: "#timeline" },
  { name: "Tracks", href: "/tracks" },
];

const organizerLinks = [
  { name: "Department of Computer Engineering", href: "#" },
  { name: "A.P. Shah Institute of Technology", href: "https://www.apsit.org.in/" },
];

const socialLinks = [
  { name: "GDG", imgSrc: "/gdg_dark.png", href: "https://www.instagram.com/gdg.apsit?igsh=ZW9kZnluNXlnY2d1" },
];

const contactInfo = [
  { name: "Avanish Kasar", phone: "+91 93264 66780" },
  { name: "Vinayak Kundar", phone: "+91 96533 31831" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Code of Conduct", href: "#conduct" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#CE1126]/20 bg-gradient-to-b from-[#131314] via-black to-[#050505]">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CE1126] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FDC700] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/2 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#CE1126] to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <motion.div {...motionVariants} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <h3 className="mb-4 font-benguiat text-3xl font-bold text-[#FDC700]" style={{
                textShadow: "0 0 20px rgba(253, 199, 0, 0.3)"
              }}>
                HackWins
              </h3>
              <p className="mb-6 text-md italic leading-relaxed text-gray-400">
                Build Before the Battle
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    href={social.href}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src={social.imgSrc}
                      alt={social.name}
                      className={`${social.isRounded !== false ? 'rounded-full w-10 h-10' : ''} ${social.className || 'w-60 h-20 -ml-3'} object-contain`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...motionVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 font-benguiat text-lg font-semibold text-[#FDC700]">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="inline-block mr-2 text-[#CE1126]">▸</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...motionVariants} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="mb-6 font-benguiat text-lg font-semibold text-[#FDC700]">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              {contactInfo.map((contact) => (
                <div key={contact.name} className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-[#CE1126] flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{contact.name}</p>
                    <p className="text-xs text-gray-500">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          {...motionVariants}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-2 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} HackWins. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Built with passion by <span className="text-white">GDG on Campus APSIT</span>
              </p>
            </div>

            <nav className="flex items-center gap-6 text-xs text-gray-500">
              {legalLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-[#FDC700]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div >
    </footer >
  );
};

export default Footer;