import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CombinedSpaceAnimation from "@/components/preloader";
import Hero from "@/components/hero";

const timelineEvents = [
  {
    day: "Phase 1",
    date: "Jan 7, 2026",
    title: "The Breach",
    subtitle: "The Portal Opens",
    events: [
      {
        time: "Kickoff",
        title: "Problem Statement Reveal",
        description: "Release of Problem Statements. Announcement of rules, timelines, and winning strategies. Teams begin building immediately.",
      },
    ],
  },
  {
    day: "Phase 2",
    date: "Jan 12, 2026",
    title: "The Armory",
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
    date: "Jan 18, 2026",
    title: "The Final Crawl",
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

      <div id="about-section" className="bg-black relative min-h-screen overflow-hidden">
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
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#FDC700] mb-3 font-benguiat" style={{
                textShadow: "0 0 20px rgba(253, 199, 0, 0.3)"
              }}>
                About HackWins
              </h2>
              <div className="h-0.5 w-24 bg-[#FDC700]" />
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Text Content - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 space-y-8"
              >
                {/* Introduction */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                    <span className="text-[#FDC700] font-semibold">HackWins</span> is a 10-day innovation sprint organized by <span className="text-[#CE1126] font-semibold">GDG on Campus APSIT</span>, running from <span className="text-[#FDC700]">January 7-18, 2026</span>.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    This hackathon brings together passionate developers, designers, and innovators to tackle real-world challenges across three powerful domains: <span className="text-[#CE1126] font-semibold">Fintech</span>, <span className="text-[#CE1126] font-semibold">Agritech</span>, and <span className="text-[#CE1126] font-semibold">Open Innovation</span>.
                  </p>
                </div>

                {/* What Makes It Special */}
                <div className="border-l-2 border-[#CE1126] pl-6 py-2">
                  <h3 className="text-2xl font-bold text-white mb-4 font-benguiat">What Makes HackWins Unique</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-base leading-relaxed"><strong className="text-white">Build-First Approach:</strong> Start developing from day one with clear problem statements and immediate access to resources.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-base leading-relaxed"><strong className="text-white">Expert Workshops:</strong> Hands-on sessions with Google's latest AI tools and development platforms.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-base leading-relaxed"><strong className="text-white">Real Impact:</strong> Solutions that address genuine challenges in critical sectors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-base leading-relaxed"><strong className="text-white">Collaborative Environment:</strong> Connect with like-minded innovators and industry mentors.</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-4">
                    <a href="/tracks">
                      <span className="text-[#FDC700]">▸ <span cl assName="text-white">View all tracks</span></span>
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
                <div className="sticky top-24">
                  <div className="relative overflow-hidden rounded-lg border border-[#CE1126]/30 shadow-lg">
                    <img
                      src="/welcome.png"
                      alt="HackWins 2026"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Stats Grid Below Image */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
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

      <div id="timeline" className="relative py-20">
        <section className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#CE1126] font-benguiat mb-6 drop-shadow-[0_0_10px_rgba(206,17,38,0.6)]">The Narrative Arc</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-benguiat tracking-wider text-[#FDC700] drop-shadow-[0_0_5px_rgba(253,199,0,0.5)]">Mission Timeline</p>
          </motion.div>
          <div className="space-y-16">
            {timelineEvents.map((phase, index) => (
              <motion.div key={phase.day} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="relative border-l-2 border-[#CE1126]/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
                <div className="flex flex-col md:items-center mb-8">
                  <div className="bg-[#CE1126] text-white px-6 py-2 rounded-sm font-bold text-xl font-benguiat tracking-widest shadow-[0_0_15px_rgba(206,17,38,0.5)] transform -skew-x-12 inline-block md:mx-auto">
                    {phase.day}: {phase.title}
                  </div>
                  <div className="mt-2 text-[#FDC700] text-lg font-benguiat tracking-wide drop-shadow-[0_0_5px_rgba(253,199,0,0.5)] text-left md:text-center italic">
                    "{phase.subtitle}"
                  </div>
                  <div className="mt-1 text-gray-400 text-base font-mono md:text-center border border-[#CE1126]/30 px-3 py-1 rounded bg-black/50 inline-block md:mx-auto">
                    {phase.date}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                  {phase.events.map((event, eventIndex) => (
                    <motion.div key={eventIndex} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: eventIndex * 0.1 }} className="bg-gradient-to-r from-gray-900/80 to-black/80 border-l-4 border-[#CE1126] rounded-r-lg p-6 hover:bg-gray-900/90 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="text-[#CE1126] font-bold text-lg font-mono whitespace-nowrap min-w-[100px]">{event.time}</div>
                        <div>
                          <div className="text-white font-bold text-xl mb-2 font-benguiat tracking-wide">{event.title}</div>
                          <div className="text-gray-300 text-sm leading-relaxed font-sans">{event.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-center mt-24">
            <h3 className="text-3xl font-bold text-[#CE1126] font-benguiat mb-6 tracking-widest">Ready to enter the gate?</h3>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto font-medium">Secure your place in the HackWins legacy today.</p>
            <a href="/register"><Button size="lg" className="px-12 py-6 text-xl bg-[#CE1126] text-white hover:bg-[#A30D1E] font-bold rounded-sm border border-red-500/50 uppercase tracking-widest transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(206,17,38,0.5)]">Register Now</Button></a>
          </motion.div>
        </section>
      </div>
      <div className={`bg-[#131314] ${pageState === "completed" ? "animate-[fadeInLanding_1s_ease-out_1.5s_both]" : ""}`}><Footer /></div>
    </>
  );
};

export default LandingPage;
