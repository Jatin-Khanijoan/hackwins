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
        src="./gdg_dark.png"
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

      <CountdownTimer />
      <Link
        to={
          "https://vision.hack2skill.com/event/gdgoc-25-gdgapsit?utm_source=hack2skill&utm_medium=homepage&sectionid=694bdedafd4bb77e2c71502f"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Button
            className="group relative overflow-hidden bg-black px-12 py-8 transition-all duration-300 
                   border-2 border-red-900/50 
                   hover:border-red-600 hover:bg-[#0f0000] 
                   font-benguiat"
            style={{
              boxShadow: "inset 0 0 15px rgba(206, 17, 38, 0.2)",
            }}
          >
            {/* Subtle Red Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* The Text */}
            <span className="relative z-10 text-xl md:text-2xl font-bold uppercase tracking-widest text-[#FDC700] drop-shadow-[0_0_10px_rgba(253,199,0,0.3)] group-hover:text-white transition-colors duration-300">
              Register
            </span>

            {/* Flickering Red Neon Line at bottom on Hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-500 group-hover:w-full" />
          </Button>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
