import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const trackData = [
  {
    title: "Track 1: Healthcare",
    description:
      "Build AI-driven solutions for diagnostics, patient care, telemedicine, mental health, and hospital optimization. From personalized treatment to efficient care delivery, shape the future of healthcare with intelligent systems.",
    problem_statements: {
      ps_1: {
        title: "AI-Powered Diagnostics",
        desc: "Develop machine learning models capable of analyzing medical images such as X-rays, MRIs, and retinal scans with the goal of enabling early detection of diseases like cancer, diabetic retinopathy, and pulmonary disorders with high accuracy, especially in resource-limited settings.",
      },
      ps_2: {
        title: "Personalized Treatment & Drug Repurposing",
        desc: "Create a Generative AI tool that analyzes patient-specific data such as genomics, vitals, and electronic health records (EHRs) to suggest optimal drug dosages and identify existing drugs for new therapeutic applications, with the goal of improving treatment effectiveness while reducing trial-and-error in healthcare.",
      },
      ps_3: {
        title: "Mental Health Companion",
        desc: "Build a conversational AI system that provides immediate, non-judgmental emotional support, delivers CBT-based exercises, generates personalized mental wellness plans, and escalates high-risk cases to human professionals.",
      },
      ps_4: {
        title: "Hospital Workflow Optimization",
        desc: "Design an AI-driven system to predict patient inflow and outflow, optimize surgery schedules, and manage pharmacy inventory efficiently.",
      },
    },
  },
  {
    title: "Track 2: FinTech",
    description:
      "Build intelligent solutions for fraud prevention, smart investing, regulatory compliance, and financial inclusion. Make finance safer, smarter, and more accessible.",
    problem_statements: {
      ps_1: {
        title: "Generative Investment Strategies",
        desc: "Develop a Generative AI model that analyzes financial news, market sentiment, and macroeconomic indicators to generate adaptive investment strategies.",
      },
      ps_2: {
        title: "AI-Powered Compliance (RegTech)",
        desc: "Build an NLP-based system that summarizes financial regulations and flags compliance gaps automatically.",
      },
      ps_3: {
        title: "Financial Inclusion for the Underserved",
        desc: "Create alternative credit scoring models using non-traditional data sources.",
      },
      ps_4: {
        title: "Real-Time Fraud Detection",
        desc: "Design a deep learning model for ultra-low latency anomaly detection in transaction streams.",
      },
    },
  },
  {
    title: "Track 3: Open Innovation",
    description:
      "Open Innovation invites teams to build creative, cross-domain solutions without industry constraints. This track emphasizes originality, scalability, and real-world impact, encouraging participants to leverage emerging technologies to solve challenges in society, sustainability, education, governance, smart cities, and beyond.",
  },
];

const Tracks = () => {
  const [openTrack, setOpenTrack] = useState(null);

  const toggleTrack = (index) => {
    setOpenTrack(openTrack === index ? null : index);
  };

  return (
    <>
      <div className="fixed inset-0 -z-20">
        <img src="/hero_bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="fixed inset-0 -z-10 bg-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col text-white">
        <Navbar />

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <h1 className="text-2xl font-bold text-[#FDC700] font-benguiat mb-4">
                Choose Your Track
              </h1>
              <div className="h-0.5 w-32 bg-[#CE1126] mx-auto" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {trackData.map((track, index) => (
                <div
                  key={track.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-[#FDC700]">
                    {track.title}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {track.description}
                  </p>

                  {track.problem_statements && (
                    <>
                      <button
                        onClick={() => toggleTrack(index)}
                        className="text-sm text-[#FDC700] hover:underline"
                      >
                        {openTrack === index
                          ? "Hide Problem Statements ▲"
                          : "View Problem Statements ▼"}
                      </button>

                      {openTrack === index && (
                        <div className="mt-6 space-y-4">
                          {Object.values(track.problem_statements).map(
                            (ps, idx) => (
                              <div
                                key={idx}
                                className="p-4 rounded-lg bg-black/30 border border-white/10"
                              >
                                <h3 className="font-semibold text-[#FDC700] mb-2">
                                  {ps.title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                  {ps.desc}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tracks;
