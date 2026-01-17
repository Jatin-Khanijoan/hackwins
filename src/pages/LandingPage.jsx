import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import {
  ArrowBigRightDash,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// --- Configuration for the 3 Event Galleries ---
const gallerySections = [
  {
    id: "event-1",
    title: "Event 1",
    subtitle: "Inauguration Day",
    direction: "left",
    content: (
      <div className="max-w-4xl mx-auto mb-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4 text-sm font-mono text-[#FDC700] mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Jan 7, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 10:00 AM - 12:00 PM
            </span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            GDG APSIT successfully inaugurated{" "}
            <span className="text-[#CE1126] font-bold">
              TechSprint’26 – HackWins
            </span>
            , marking the start of our multi-day journey. The session focused on
            equipping participants with essential knowledge on event structure,
            timelines, rules, and evaluation criteria.
          </p>
        </div>

        <div className="bg-[#CE1126]/5 border border-[#CE1126]/20 rounded-xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#CE1126]/40 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Star className="w-24 h-24 text-[#FDC700]" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-benguiat text-[#FDC700] mb-2">
                Guest Speaker: Mr. Asim Shah
              </h4>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                Industry Expert & Hackathon Veteran
              </p>
              <p className="text-gray-300 mb-0">
                An insightful session offering strategies on problem-solving,
                team collaboration, and how to stand out in competitive
                environments.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <ul className="space-y-2 text-gray-300 text-sm font-mono">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#CE1126]" /> Hackathon
                  Strategies
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#CE1126]" />{" "}
                  Problem-Solving
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#CE1126]" /> Team
                  Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    images: [
      { img: "/Event_1/img1.png" },
      { img: "/Event_1/img2.jpg" },
      { img: "/Event_1/img3.jpg" },
      { img: "/Event_1/img4.jpg" },
      { img: "/Event_1/img5.jpg" },
    ],
  },
  {
    id: "event-2",
    title: "Event 2",
    subtitle: "Inside the Upside Down",
    direction: "left",
    content: (
      <div className="max-w-4xl mx-auto mb-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4 text-sm font-mono text-[#FDC700] mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Jan 13, 2026
            </span>
            <span className="flex items-center gap-1">
              <Terminal className="w-4 h-4" /> GDG APSIT Tech Team
            </span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            A hands-on lab session designed to help participants elevate their
            hackathon projects by integrating{" "}
            <span className="text-[#CE1126] font-bold">
              Google technologies
            </span>{" "}
            into real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#CE1126]/20 rounded-lg">
                <Cpu className="w-5 h-5 text-[#CE1126]" />
              </div>
              <h4 className="text-[#FDC700] font-bold">Tech Integration</h4>
            </div>
            <p className="text-sm text-gray-400">
              Practical focus on industry-relevant tools like{" "}
              <strong>Anti-Gravity</strong> and modern Google solutions to build
              scalable projects.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#CE1126]/20 rounded-lg">
                <Layers className="w-5 h-5 text-[#CE1126]" />
              </div>
              <h4 className="text-[#FDC700] font-bold">Submission Quality</h4>
            </div>
            <p className="text-sm text-gray-400">
              Hands-on guidance aimed at making projects more robust, improving
              the overall impact of HackWins submissions.
            </p>
          </div>
        </div>
      </div>
    ),
    images: [
      { img: "/Event_2/img1.jpg" },
      { img: "/Event_2/img2.jpg" },
      { img: "/Event_2/img3.jpg" },
      { img: "/Event_2/img4.jpg" },
      { img: "/Event_2/img5.jpg" },
      { img: "/Event_2/img6.jpg" },
    ],
  },
];

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
        description:
          "Release of Problem Statements. Announcement of rules, timelines, and winning strategies.",
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
        description:
          "Hands-on exposure to Google’s latest tools: Google Gemini, Project IDX / Antigravity (AI-powered IDE).",
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
        description:
          "Qualified teams present their solutions. Judging and announcement of winners.",
      },
    ],
  },
];

const LandingPage = () => {
  const [pageState, setPageState] = useState(() =>
    sessionStorage.getItem("hasSeenIntro") ? "completed" : "loading",
  );

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

  return (
    <>
      <div id="hero-section" className="relative bg-transparent">
        <div className="fixed inset-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
          <img
            src="/hero_bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="fixed inset-0 w-full h-screen -z-10 pointer-events-none"
          style={{ backgroundColor: "rgb(0, 0, 0)", opacity: 0.8 }}
        ></div>
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

      {/* About Section */}
      <div
        id="about-section"
        className="bg-[#050505] relative min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDC700]/[0.02] to-transparent pointer-events-none" />
        <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 flex items-center justify-center min-h-screen">
          {/* ... [About Content Remains Unchanged] ... */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center lg:text-left"
            >
              <h2
                className="text-3xl md:text-6xl font-bold text-[#FDC700] mb-3 font-benguiat"
                style={{ textShadow: "0 0 20px rgba(253, 199, 0, 0.3)" }}
              >
                About HackWins
              </h2>
              <div className="h-0.5 w-24 bg-[#FDC700] mx-auto lg:mx-0" />
            </motion.div>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 space-y-8 text-center lg:text-left"
              >
                <div className="space-y-6">
                  <p className="text-base md:text-2xl text-gray-100 leading-relaxed">
                    <span className="text-[#FDC700] font-semibold">
                      HackWins
                    </span>{" "}
                    is a 10-day innovation sprint organized by{" "}
                    <span className="text-[#CE1126] font-semibold">
                      GDG on Campus APSIT
                    </span>
                    , running from{" "}
                    <span className="text-[#FDC700]">January 7-19, 2026</span>.
                  </p>
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    This hackathon brings together passionate developers,
                    designers, and innovators to tackle real-world challenges
                    across three powerful domains:{" "}
                    <span className="text-[#CE1126] font-semibold">
                      HealthTech
                    </span>
                    ,{" "}
                    <span className="text-[#CE1126] font-semibold">
                      FinTech
                    </span>
                    , and{" "}
                    <span className="text-[#CE1126] font-semibold">
                      Open Innovation
                    </span>
                    .
                  </p>
                </div>
                <div className="border-l-2 border-[#CE1126] pl-6 py-2 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-benguiat">
                    What Makes HackWins Unique
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed">
                        <strong className="text-white">
                          Build-First Approach:
                        </strong>{" "}
                        Start developing from day one with clear problem
                        statements.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FDC700] mt-1">▸</span>
                      <span className="text-sm md:text-base leading-relaxed">
                        <strong className="text-white">
                          Expert Workshops:
                        </strong>{" "}
                        Hands-on sessions with Google's latest AI tools.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Image side left as is */}
            </div>
          </div>
        </section>
      </div>

      {/* Timeline Section */}
      <div
        id="timeline"
        className="relative py-24 bg-[#050505] overflow-hidden"
      >
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
            {/* Timeline logic from original */}
            <div className="space-y-16 md:space-y-32">
              {timelineEvents.map((phase, index) => (
                <motion.div
                  key={phase.day}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-4 h-4 z-20">
                    <div className="w-3 h-3 rounded-full bg-[#CE1126] shadow-[0_0_10px_#CE1126]"></div>
                  </div>
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                  >
                    <div className="relative p-6 md:p-8 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-md">
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-benguiat mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-[#CE1126] font-mono text-sm tracking-widest uppercase mb-4">
                        {phase.date}
                      </p>
                      {phase.events.map((event, i) => (
                        <p
                          key={i}
                          className="text-gray-200 text-sm leading-relaxed"
                        >
                          {event.description}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- EVENT SUMMARIES (GALLERY) --- */}
      <div
        id="event-gallery"
        className="relative bg-[#050505] text-white overflow-hidden pb-24"
      >
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 space-y-32 pt-24">
          {gallerySections.map((section, index) => (
            <div key={section.id} className="relative">
              {index !== 0 && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#CE1126]/30 to-transparent" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-[#FDC700] font-benguiat mb-3">
                  {section.subtitle}
                </h2>
                <p className="text-[#CE1126] font-mono text-sm md:text-base tracking-[0.2em] uppercase">
                  {section.title}
                </p>
              </motion.div>

              <div className="h-auto w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden bg-black/20 border border-white/5 backdrop-blur-sm p-4 md:p-10">
                <div className="h-[20rem] md:h-[25rem] w-full relative mb-10">
                  <InfiniteMovingCards
                    items={section.images}
                    direction={section.direction}
                    speed="slow"
                  />
                </div>
                {section.content && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative z-10"
                  >
                    {section.content}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`bg-[#131314] ${pageState === "completed" ? "animate-[fadeInLanding_1s_ease-out_1.5s_both]" : ""}`}
      >
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
