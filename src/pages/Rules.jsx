import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ===================== RULES DATA =====================
const rulesData = [
  {
    title: "LAWS OF THE UPSIDE DOWN (GENERAL RULES)",
    subtitle: "Break these, and you’re lost in the void.",
    points: [
      {
        label: "Original Work Only",
        text: "All projects must be entirely original. Plagiarism, reuse of existing projects, or copied solutions will lead to immediate disqualification.",
      },
      {
        label: "Ethical Development",
        text: "Projects must follow ethical development practices. Misuse of data, violation of privacy, or unethical use of technology will result in disqualification.",
      },
      {
        label: "Fair Play",
        text: "Any form of misconduct, rule violation, or misrepresentation will lead to immediate disqualification.",
      },
      {
        label: "Final Authority",
        text: "All decisions made by the judges and organizing committee are final. GDGoC APSIT reserves the right to update or modify rules if required.",
      },
    ],
  },
  {
    title: "POWER FROM THE OTHER SIDE (MANDATORY GOOGLE TECH)",
    subtitle: "Harness Google tech or face disqualification.",
    points: [
      {
        label: "Mandatory Requirement",
        text: "Each project must use at least one Google technology. Projects not meeting this requirement will be penalised.",
      },
      {
        label: "Accepted Technologies",
        text: "Firebase, Google Cloud Platform (GCP), Gemini API, Google Maps API, or any other Google-supported technology.",
      },
    ],
  },
  {
    title: "THE PARTY (TEAM FORMATION RULES)",
    subtitle: "Choose your squad carefully.",
    points: [
      {
        label: "FE Students",
        text: "No cross-division teams allowed.",
      },
      {
        label: "SE, TE, BE Students",
        text: "No cross-department teams allowed.",
      },
      {
        label: "Same Department",
        text: "Teams from the same department with members from different years are allowed.",
      },
      {
        label: "Registration",
        text: "Fill the registration details correctly, no rectifications allowed once filled.",
      },
    ],
  },
  {
    title: "THE GATE OPENS (REGISTRATION DETAILS)",
    subtitle: "Miss it, and the portal closes forever.",
    points: [
      {
        label: "Registration Deadline",
        text: "Registration link is live till 12:00 PM, 8th January.",
      },
      {
        label: "Late Registrations",
        text: "Late registrations will not be accepted under any circumstances.",
      },
    ],
  },
  {
    title: "THE INTEL DROP (SUBMISSION GUIDELINES)",
    subtitle: "Before the gate closes, send everything.",
    points: [
      {
        label: "Project Description",
        text: "A detailed project description or solution document.",
      },
      {
        label: "Presentation (PPT)",
        text: "Must include problem statement, proposed solution, technology stack, impact, and use cases.",
      },
      {
        label: "Working Prototype",
        text: "A working prototype along with a GitHub repository and/or demo link is mandatory.",
      },
      {
        label: "Mandatory Compliance",
        text: "All submission requirements must be followed strictly.",
      },
    ],
  },
  {
    title: "THE FINAL COUNTDOWN (SUBMISSION DEADLINE)",
    subtitle: "No extensions. No second chances.",
    points: [
      {
        label: "Final Submission",
        text: "Last date for submission is 12:00 PM, 18th January.",
      },
      {
        label: "Late Submissions",
        text: "Late submissions will not be accepted under any circumstances.",
      },
    ],
  },
  {
    title: "THE SIGNAL CHECK (SHORTLISTING PROCESS)",
    subtitle: "Only the strongest signals survive.",
    points: [
      {
        label: "Shortlisting",
        text: "Based on submissions, the Top 15 teams will be shortlisted.",
      },
      {
        label: "Next Round",
        text: "Shortlisted teams will be invited for the next round. Details will be shared separately.",
      },
    ],
  },
];

// ===================== COMPONENT =====================
const Rules = () => {
  const DARK_TINT_OPACITY = 0.8;
  const DARK_TINT_COLOR = "rgb(0, 0, 0)";

  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
        <img
          src="/hero_bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="fixed inset-0 w-full h-screen -z-10 pointer-events-none"
        style={{
          backgroundColor: DARK_TINT_COLOR,
          opacity: DARK_TINT_OPACITY,
        }}
      />

      <div className="relative z-10 min-h-screen bg-transparent text-white flex flex-col">
        <Navbar />

        <main className="flex-grow mx-auto max-w-5xl px-4 py-24 sm:py-32 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-2xl font-bold text-[#FDC700] mb-4 font-benguiat drop-shadow-[0_0_15px_rgba(253,199,0,0.3)]">
              WELCOME TO THE UPSIDE DOWN OF CODE
            </h1>
            <p className="text-xl text-gray-300 font-benguiat mt-4">
              The Rift is Opening. Build Clean. Build Ethical. Build Smart.
            </p>
            <div className="h-0.5 w-32 bg-[#CE1126] mx-auto mt-6" />
          </div>

          {/* Rules Sections */}
          <div className="grid gap-8">
            {rulesData.map((section) => (
              <div
                key={section.title}
                className="group relative p-6 md:p-8 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#CE1126]/40 transition-colors duration-300"
              >
                <h2 className="mb-2 text-2xl font-bold text-white font-benguiat group-hover:text-[#FDC700] transition-colors">
                  {section.title}
                </h2>

                {section.subtitle && (
                  <p className="mb-4 text-[#CE1126] font-mono text-sm tracking-widest uppercase">
                    {section.subtitle}
                  </p>
                )}

                <ul className="space-y-3 text-gray-300">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#CE1126] mt-1">▸</span>
                      <span className="text-base leading-relaxed">
                        <strong className="text-white">{point.label}:</strong>{" "}
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 p-8 border border-[#CE1126]/30 rounded-lg bg-black/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#CE1126] font-benguiat mb-4">
              TRANSMISSION COMPLETE
            </h3>
            <p className="text-gray-300">
              All official announcements, updates, and results will be shared
              via official GDGoC APSIT channels. Stay alert.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Rules;
