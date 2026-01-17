import React from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./countdown";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-16 text-center md:px-6 lg:py-24">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        src="./latest-logo.png"
        className="w-72 mb-4"
      />

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-balance text-3xl font-semibold leading-tight tracking-wide md:text-4xl lg:text-5xl mt-10 text-yellow-400 font-benguiat"
      >
        A signal from the other side
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl leading-tight tracking-wide md:text-3xl lg:text-4xl mt-6 text-white font-benguiat relative"
      >
        Decipher the warning <br />
        <div className="relative inline-flex flex-col items-center">
          <div className="w-full h-[3px] bg-[#CE1126] shadow-[0_0_10px_rgba(206,17,38,0.8)] mb-[2px] z-20 rounded-sm"></div>
          <span className="starwars-outline text-[3rem] sm:text-[7rem] md:text-[9rem] font-stranger-outlined tracking-[0.05em] leading-none relative z-10 px-4">
            HackwinS
          </span>
          <div className="relative flex justify-between w-full">
            <div className="w-[150px] h-[3px] bg-[#CE1126] shadow-[0_0_10px_rgba(206,17,38,0.8)] mt-[2px] z-20 rounded-sm"></div>
            <div className="w-[150px] h-[3px] bg-[#CE1126] shadow-[0_0_10px_rgba(206,17,38,0.8)] mt-[2px] z-20 rounded-sm"></div>
          </div>
          <span
            className="mt-3 text-lg sm:text-xl md:text-2xl font-benguiat text-[#FDC700] tracking-wide uppercase text-center"
            style={{
              textShadow:
                "0 0 15px rgba(253, 199, 0, 0.6), 0 0 30px rgba(253, 199, 0, 0.4)",
            }}
          >
            Build Before The Battle
          </span>
        </div>
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-balance text-lg font-medium leading-relaxed tracking-wide md:text-2xl lg:text-3xl mt-4 text-gray-200 font-benguiat"
      >
        The gate is open
      </motion.h3>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-balance text-lg font-medium leading-relaxed tracking-wide md:text-2xl lg:text-3xl mt-4 text-yellow-400 font-benguiat"
      >
        Evaluations going on...
      </motion.h3>
    </section>
  );
};

export default Hero;
