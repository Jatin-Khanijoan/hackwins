import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CombinedSpaceAnimation from "@/components/preloader";
import Hero from "@/components/hero";
import { ArrowBigRightDash, ArrowRight } from "lucide-react";

const timelineEvents = [
  {
    day: "Phase 1",
    date: "Jan 7, 2026",
    title: "The Opening of the Gate",
    subtitle: "The Portal Opens",
    events: [
      {
        time: "Kickoff",
        title: "Problem Statement Reveal",
        description: "Release of Problem Statements. Announcement of rules, timelines, and winning strategies.",
      },
    ],
  },
  {
    day: "Phase 2",
    date: "Jan 13, 2026",
    title: "Inside the Upside Down",
    subtitle: "Equip yourself for the unknown",
    events: [
      {
        time: "Workshop",
        title: "Build-Up Workshop",
        description: "Hands-on exposure to Google’s latest tools: Google Gemini, Project IDX / Antigravity (AI-powered IDE).",
      },
    ],
  },
  {
    day: "Phase 3",
    date: "Jan 19, 2026",
    title: "The Rightside UP",
    subtitle: "The strong survive",
    events: [
      {
        time: "Finale",
        title: "Final Presentations",
        description: "Qualified teams present their solutions. Judging and announcement of winners.",
      },
    ],
  },
];

// --- Main Landing Page Component ---
const LandingPage = () => {
  const [pageState, setPageState] = useState(() => {
    return sessionStorage.getItem("hasSeenIntro") ? "completed" : "loading";
  });

  useEffect(() => {
    if (pageState === "loading") {
      const preloaderTimer = setTimeout(() => setPageState("poster"), 9500);
      return () => clearTimeout(preloaderTimer);
    }
    if (pageState === "poster") {
      const posterTimer = setTimeout(() => {
        setPageState("transitioning");
        sessionStorage.setItem("hasSeenIntro", "true");
        setTimeout(() => setPageState("completed"), 300);
      }, 4000);
      return () => clearTimeout(posterTimer);
    }
  }, [pageState]);

  const DARK_TINT_OPACITY = 0.8;
  const DARK_TINT_COLOR = "rgb(0, 0, 0)";

  return (
    <>
      <div id="hero-section" className="relative bg-transparent">
        <div className="fixed inset-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
          <img src="/hero_bg.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div
          className="fixed inset-0 w-full h-screen -z-10 pointer-events-none"
          style={{
            backgroundColor: DARK_TINT_COLOR,
            opacity: DARK_TINT_OPACITY
          }}
        ></div>

        <div className={pageState === "completed" ? "animate-[slideInFromTop_0.8s_ease-out]" : ""}><Navbar /></div>
        <Hero />
      </div>

      <div id="about-section" className="bg-[#050505] relative min-h-screen overflow-hidden">
        {/* Subtle Static Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDC700]/[0.02] to-transparent pointer-events-none" />

        <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 flex items-center justify-center min-h-screen">
          <div className="w-full">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-[#FDC700] mb-3 font-benguiat" style={{
                textShadow: "0 0 20px rgba(253, 199, 0, 0.3)"
              }}>
                About HackWins
              </h2>
              <div className="h-0.5 w-24 bg-[#FDC700] mx-auto lg:mx-0" />
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Text Content - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 space-y-8 text-center lg:text-left"
              >
                {/* Introduction */}
                <div className="space-y-6">
                  <p className="text-base md:text-2xl text-gray-100 leading-relaxed">
                    <span className="text-[#FDC700] font-semibold">HackWins</span> is a 10-day innovation sprint organized by <span className="text-[#CE1126] font-semibold">GDG on Campus APSIT</span>, running from <span className="text-[#FDC700]">January 7-19, 2026</span>.
                  </p>

                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    This hackathon brings together passionate developers, designers, and innovators to tackle real-world challenges across three powerful domains: <span className="text-[#CE1126] font-semibold">HealthTech</span>, <span className="text-[#CE1126] font-semibold">FinTech</span>, and <span className="text-[#CE1126] font-semibold">Open Innovation</span>.
                  </p>
                </div>

                {/* What Makes It Special */}
                <div className="border-l-2 border-[#CE1126] pl-6 py-2 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-benguiat">What Makes HackWins Unique</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed"><strong className="text-white">Build-First Approach:</strong> Start developing from day one with clear problem statements and immediate access to resources.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed"><strong className="text-white">Expert Workshops:</strong> Hands-on sessions with Google's latest AI tools and development platforms.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed"><strong className="text-white">Real Impact:</strong> Solutions that address genuine challenges in critical sectors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed"><strong className="text-white">Collaborative Environment:</strong> Connect with like-minded innovators and industry mentors.</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a href="/tracks">
                      <span className="hover:underline flex items-center gap-2 text-[#FDC700]">View all tracks <ArrowRight /></span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Image Section - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="sticky top-24 space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-[#CE1126]/30 shadow-lg h-[350px] md:h-[400px]">
                    <img
                      src="/welcome.png"
                      alt="HackWins 2026"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Stats Grid Below Image */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded p-4 text-center">
                      <div className="text-2xl font-bold text-[#FDC700] mb-1">10</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Days</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded p-4 text-center">
                      <div className="text-2xl font-bold text-[#CE1126] mb-1">3</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Tracks</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded p-4 text-center">
                      <div className="text-2xl font-bold text-[#FDC700] mb-1">∞</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Ideas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <div id="timeline" className="relative py-24 bg-[#050505] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CE1126] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

        <section className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#CE1126] font-benguiat mb-4 drop-shadow-[0_0_15px_rgba(206,17,38,0.5)]">
              The Narrative Arc
            </h2>
            <p className="text-xl text-[#FDC700] font-benguiat tracking-wider opacity-80">
              Mission Phases & Protocol
            </p>
          </motion.div>

          <div className="relative mt-12 md:mt-24">
            {/* Central Desktop Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#CE1126]/50 to-transparent"></div>
            {/* Mobile Line */}
            <div className="md:hidden absolute left-8 h-full w-px bg-gradient-to-b from-transparent via-[#CE1126]/50 to-transparent"></div>

            <div className="space-y-16 md:space-y-32">
              {timelineEvents.map((phase, index) => (
                <motion.div
                  key={phase.day}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Central Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-4 h-4 z-20">
                    <div className="w-3 h-3 rounded-full bg-[#CE1126] shadow-[0_0_10px_#CE1126] relative z-20"></div>
                    <div className="absolute w-8 h-8 rounded-full bg-[#CE1126]/20 animate-ping"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}>
                    <div className="group relative">
                      {/* Hover Connector Line (Desktop) */}
                      <div className={`hidden md:block absolute top-6 h-px w-16 bg-[#CE1126]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#CE1126]/10 ${index % 2 === 0 ? "right-[-64px]" : "left-[-64px]"
                        }`}></div>

                      <div className="relative p-6 md:p-8 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#CE1126]/40 transition-colors duration-300 overflow-hidden">

                        {/* Number Indicator - Alternating Sides */}
                        <div className={`absolute top-2 md:top-4 text-6xl font-bold font-benguiat opacity-10 select-none text-[#FDC700] ${index % 2 === 0
                          ? "right-4" // Even Index (Left Card): Box 1 & 3 logic is usually flipped due to reverse?
                          // Wait: index 0 is Even. Reverse row. Card is on Left. Text Right.
                          // User wants Box 1 (Index 0) to have number on Right. 
                          // "1 and 3 box will have number in the card on the right side"
                          // So YES, Right side.
                          : "right-4 md:left-4 md:right-auto" // Odd Index (Right Card): Box 2. Normal row. Card Right. Text Left.
                          // User wants Box 2 to have number on Left.
                          // So YES, Left side.
                          }`}>
                          0{index + 1}
                        </div>

                        {/* Content Wrapper with padding to avoid number overlap */}
                        <div className={`relative z-10 mr-12 ${index % 2 === 0
                          ? "" // Even: keep mr-12 for both mobile and desktop (number on right)
                          : "md:ml-12 md:mr-0" // Odd: switch to left padding on desktop, remove right
                          }`}>
                          <h3 className="text-2xl md:text-3xl font-bold text-white font-benguiat mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-[#CE1126] font-mono text-sm tracking-widest uppercase mb-4">
                            {phase.date}
                          </p>

                          <div className="space-y-4">
                            {phase.events.map((event, i) => (
                              <div key={i} className={`flex flex-col gap-1 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FDC700]"></span>
                                  <span className="text-gray-200 font-bold">{event.title}</span>
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
                                  {event.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={`bg-[#131314] ${pageState === "completed" ? "animate-[fadeInLanding_1s_ease-out_1.5s_both]" : ""}`}><Footer /></div>
    </>
  );
};

export default LandingPage;