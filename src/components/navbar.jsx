import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HackWinsLogo from "./ui/logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rules", label: "Guidelines" },
    { href: "/tracks", label: "Tracks" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent overflow-x-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Link to="/" className="flex items-center gap-2 group">
                  <HackWinsLogo className="w-full h-full transition-transform group-hover:scale-110" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu Container */}
        <div className="relative flex-shrink-0">
          <div className="flex items-center bg-black/90 backdrop-blur-md rounded-full border border-yellow-400/50 shadow-[0_0_20px_rgba(253,199,0,0.3)] overflow-hidden">
            {/* Nav Items */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                  }}
                  className="flex items-center overflow-hidden"
                >
                  <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="text-xs sm:text-sm md:text-base font-benguiat text-gray-300 hover:text-yellow-400 transition-colors
                            px-2 sm:px-3 py-1.5 rounded-md inline-block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Burger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
    hover:bg-yellow-400/10 transition-colors relative"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-4 sm:w-6 sm:h-5">
                {/* Top line */}
                <motion.span
                  animate={{
                    rotate: open ? 45 : 0,
                    top: open ? "50%" : "50%",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute left-0 w-full h-0.5 bg-yellow-400 rounded-full origin-center"
                  style={{ transformTranslate: "translateY(-50%)" }}
                />

                {/* Middle line */}
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-1/2 w-full h-0.5 bg-yellow-400 rounded-full"
                  style={{ transform: "translateY(-50%)" }}
                />

                {/* Bottom line */}
                <motion.span
                  animate={{
                    rotate: open ? -45 : 0,
                    top: open ? "50%" : "50%",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute left-0 w-full h-0.5 bg-yellow-400 rounded-full origin-center"
                  style={{ transformTranslate: "translateY(-50%)" }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
