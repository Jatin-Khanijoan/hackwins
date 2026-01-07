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
        desc: "Healthcare systems generate vast amounts of medical imaging data, yet early and accurate diagnosis remains a challenge particularly in resource-constrained settings. This challenge invites innovators to explore how AI can enhance the interpretation of X-rays, MRIs, and retinal scans to support clinicians in achieving faster, more reliable, and widely accessible disease detection.",
      },
      ps_2: {
        title: "Personalized Treatment & Drug Repurposing",
        desc: "As medicine shifts toward personalized care, effectively leveraging complex patient data continues to be a major hurdle. This challenge focuses on using Generative AI to synthesize genomics, vitals, and electronic health records to guide individualized treatment decisions and uncover new therapeutic applications for existing drugs, improving outcomes while reducing trial-and-error.",
      },
      ps_3: {
        title: "Mental Health Companion",
        desc: "Access to timely and stigma-free mental health support remains limited for many individuals. This challenge encourages the design of empathetic AI companions that can provide immediate emotional support, promote evidence-based mental wellness practices, personalize care journeys, and responsibly collaborate with human professionals when higher-risk situations arise.",
      },
      ps_4: {
        title: "Hospital Workflow Optimization",
        desc: "Hospitals face increasing operational strain due to unpredictable patient flow, limited resources, and complex scheduling demands. This challenge explores how AI can be leveraged to anticipate patient inflow and outflow, optimize surgical schedules, and manage pharmacy inventory, enabling more efficient, resilient, and patient-centric healthcare operations.",
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
        desc: "Financial markets are shaped by rapidly changing information, sentiment, and macroeconomic signals, making traditional investment approaches increasingly reactive. This challenge invites innovators to explore how Generative AI can synthesize financial news, market sentiment, and economic indicators to produce adaptive, explainable, and forward-looking investment strategies.",
      },
      ps_2: {
        title: "AI-Powered Compliance (RegTech)",
        desc: "The growing volume and complexity of financial regulations create significant compliance burdens for institutions. This challenge focuses on leveraging NLP and AI to transform regulatory texts into actionable insights, enabling automated summarization, continuous monitoring, and early identification of potential compliance gaps.",
      },
      ps_3: {
        title: "Financial Inclusion for the Underserved",
        desc: "Millions remain excluded from formal financial systems due to the lack of traditional credit histories. This challenge encourages the exploration of AI-driven alternative credit assessment methods that responsibly use non-traditional data sources to expand access to financial services while ensuring fairness and transparency.",
      },
      ps_4: {
        title: "Real-Time Fraud Detection",
        desc: "As digital transactions grow in scale and speed, detecting fraudulent activity in real time becomes increasingly critical. This challenge examines how deep learning can be applied to high-velocity transaction streams to identify anomalies with ultra-low latency, balancing accuracy, scalability, and trust.",
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
                          ? "Hide Challenges ▲"
                          : "View Challenges ▼"}
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
