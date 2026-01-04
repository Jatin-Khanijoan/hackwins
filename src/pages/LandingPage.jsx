"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { ArrowBigRightDash, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        description:
          "Release of Problem Statements. Announcement of rules, timelines, and winning strategies. Teams begin building immediately.",
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
        description:
          "Hands-on exposure to Google’s latest tools: Google Gemini, Project IDX / Antigravity (AI-powered IDE).",
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
        description:
          "Qualified teams present their solutions. Judging and announcement of winners.",
      },
    ],
  },
];

const LandingPage = () => {
  const [pageState, setPageState] = useState(() =>
    sessionStorage.getItem("hasSeenIntro") ? "completed" : "loading"
  );

  useEffect(() => {
    if (pageState === "loading") {
      const t = setTimeout(() => setPageState("poster"), 9500);
      return () => clearTimeout(t);
    }
    if (pageState === "poster") {
      const t = setTimeout(() => {
        setPageState("transitioning");
        sessionStorage.setItem("hasSeenIntro", "true");
        setTimeout(() => setPageState("completed"), 300);
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [pageState]);

  return (
    <>
      {/* ================= HERO ================= */}
      <div
        id="hero-section"
        className="relative bg-transparent overflow-x-hidden"
      >
        <div className="fixed inset-0 -z-20">
          <img
            src="/hero_bg.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="fixed inset-0 bg-black/80 -z-10" />

        <div
          className={
            pageState === "completed"
              ? "animate-[slideInFromTop_0.8s_ease-out]"
              : ""
          }
        >
          <Navbar />
        </div>

        <Hero />
      </div>

      {/* ================= ABOUT ================= */}
      <div className="bg-[#050505] min-h-screen overflow-x-hidden">
        <section className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FDC700] mb-12 font-benguiat"
          >
            About HackWins
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* TEXT */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                <span className="text-[#FDC700] font-semibold">HackWins</span>{" "}
                is a 10-day innovation sprint by{" "}
                <span className="text-[#CE1126] font-semibold">
                  GDG on Campus APSIT
                </span>{" "}
                from <span className="text-[#FDC700]">Jan 7–18, 2026</span>.
              </p>

              <p className="text-gray-400 text-sm sm:text-base">
                Participants tackle real-world problems across{" "}
                <span className="text-[#CE1126] font-semibold">Fintech</span>,{" "}
                <span className="text-[#CE1126] font-semibold">Agritech</span>,
                and{" "}
                <span className="text-[#CE1126] font-semibold">
                  Open Innovation
                </span>
                .
              </p>

              <ul className="border-l-2 border-[#CE1126] pl-6 space-y-3">
                {[
                  "Build-first approach",
                  "Hands-on expert workshops",
                  "Real-world impact",
                  "Strong mentor support",
                ].map((item) => (
                  <li key={item} className="text-gray-300">
                    ▸ {item}
                  </li>
                ))}
              </ul>

              <a
                href="/tracks"
                className="inline-flex items-center gap-2 text-[#FDC700] hover:underline"
              >
                View Tracks <ArrowRight />
              </a>
            </div>

            {/* IMAGE */}
            <div className="relative lg:sticky lg:top-24 space-y-4">
              <img
                src="/welcome.png"
                alt=""
                className="rounded-lg border border-[#CE1126]/30 shadow-lg"
              />

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["10", "Days"],
                  ["3", "Tracks"],
                  ["∞", "Ideas"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-[#FDC700]">
                      {num}
                    </div>
                    <div className="text-xs text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="bg-[#050505] py-24 overflow-x-hidden">
        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-[#CE1126] font-benguiat mb-20">
            The Narrative Arc
          </h2>

          <div className="space-y-20">
            {timelineEvents.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
              >
                <div className="absolute top-4 right-4 text-4xl md:text-5xl opacity-10 text-[#FDC700] font-benguiat">
                  0{index + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-[#CE1126] text-sm mb-4">{phase.date}</p>

                {phase.events.map((e) => (
                  <p key={e.title} className="text-gray-400 text-sm">
                    {e.description}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= REGISTER ================= */}
      <section className="bg-[#050505] py-24 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FDC700] font-benguiat mb-6">
          Ready to Enter the Arena?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Assemble your team and build solutions that redefine the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/register">
            <Button className="w-full sm:w-auto bg-[#CE1126] px-10 py-6 text-lg">
              Register Your Team <ArrowBigRightDash className="ml-2" />
            </Button>
          </a>
          <a
            href="/rules"
            className="text-[#FDC700] flex items-center justify-center gap-2 hover:underline"
          >
            View Rules <ArrowRight />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <div className="bg-[#131314] overflow-x-hidden">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
