import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo on Left - Hides on scroll but keeps space */}
        <div className="w-16 h-16">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/" className="flex items-center gap-3 group">
                  <HackWinsLogo className="w-16 h-16 transition-transform group-hover:scale-110" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expandable Navigation Menu - Always in same position */}
        <div className="relative">
          <div className="flex items-center bg-black/90 backdrop-blur-md rounded-full border border-yellow-400/50 shadow-[0_0_20px_rgba(253,199,0,0.3)] overflow-hidden">

            {/* Navigation Items - GPU accelerated with transforms */}
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
                  <div className="flex items-center gap-1 sm:gap-2 pr-2 whitespace-nowrap">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                        }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="text-sm sm:text-base font-benguiat text-gray-300 hover:text-yellow-400 transition-colors px-3 py-1 rounded-sm inline-block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated Menu <-> X Icon */}
            <button
              onClick={() => setOpen(!open)}
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center hover:bg-yellow-400/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {open ? (
                    <X className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <Menu className="w-6 h-6 text-yellow-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;