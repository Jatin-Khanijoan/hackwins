import React from 'react';
import Navbar from "@/components/navbar"; // Assuming you have a Navbar
import Footer from "@/components/footer"; // Assuming you have a Footer

// Data for the rules, making it easier to manage
const rulesData = [
  {
    title: "THE TIMELINE (STAY ON THE RIGHT FREQUENCY)",
    subtitle: "",
    points: [
      { label: "(JAN 7) The Rift Opens", text: "Problem Statements & Domains are released. The clock starts now." },
      { label: "(JAN 7 – 18) The Development Phase", text: "10 days of deep coding. Stay focused; don’t get lost in the dark." },
      { label: "(JAN 18) Final Submission", text: "The deadline. No late entries; the gate closes at midnight sharp." },
      { label: "(JAN 19) The Final Crawl", text: "Selected teams face the jury at the APSIT Campus for final presentations." },
    ],
  },
  {
    title: "THE PARTY (TEAM FORMATION)",
    subtitle: "You can’t fight the Demogorgon alone. Assemble your squad wisely.",
    points: [
      { label: "Squad Size", text: "Minimum 2, maximum 4 members." },
      { label: "Mix It Up", text: "Inter-department teams are highly encouraged." },
      { label: "Loyalty", text: "A participant cannot be part of more than one team." },
      { label: "Locked In", text: "Once registered, your team roster is final. No swaps allowed." },
    ],
  },
  {
    title: "THE MISSION (DOMAINS & PROBLEM STATEMENTS)",
    subtitle: "Data will be decrypted on January 7th.",
    points: [
      "Choose only one problem statement to work on.",
      "Your solution must align strictly with the chosen domain. No drifting into uncharted territory.",
    ],
  },
  {
    title: "THE INTEL (SUBMISSION GUIDELINES)",
    subtitle: "Before the gate closes on Jan 18th, you must submit:",
    points: [
      { label: "Project Description", text: "A clear document of your solution." },
      { label: "The Pitch (PPT)", text: "Detailing the problem, your tech stack, and the impact." },
      { label: "The Proof", text: "A working prototype, GitHub repo, or demo link is highly recommended to prove your tech isn't just a hallucination." },
    ],
  },
  {
    title: "THE SHORTLIST & JUDGING",
    subtitle: "Only the strongest signals survive.",
    points: [
      "The Top 20: Based on your submissions, only 20 teams will be invited to the APSIT Campus on Jan 19th.",
      { label: "Judging Criteria", text: "Innovation & Originality, Relevance, Technical Feasibility, Impact & Scalability." },
    ],
  },
  {
    title: "THE SPOILS (PRIZES & GLORY)",
    points: [
      { label: "The Grand Prize", text: "Cash prizes worth up to ₹5,000 for the Top 3 teams." },
      { label: "Evidence of Bravery", text: "Certificates for all shortlisted teams, winners, and participants." },
    ],
  },
  {
    title: "LAWS OF THE UPSIDE DOWN (GENERAL RULES)",
    points: [
      { label: "Originality Only", text: "Plagiarism is the shadow monster; it leads to immediate disqualification." },
      { label: "Ethics First", text: "Adhere to ethical coding practices. No cheating." },
      { label: "Final Word", text: "The decision of the GDG APSIT organizing committee is final and binding." },
    ],
  },
];

const Rules = () => {
  const DARK_TINT_OPACITY = 0.8;
  const DARK_TINT_COLOR = "rgb(0, 0, 0)";

  return (
    <>
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

      <div className="relative z-10 min-h-screen bg-transparent text-white flex flex-col">
        <Navbar />

        <main className="flex-grow mx-auto max-w-5xl px-4 py-24 sm:py-32 w-full">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-2xl font-bold text-[#FDC700] mb-4 font-benguiat drop-shadow-[0_0_15px_rgba(253,199,0,0.3)]">
              WELCOME TO THE UPSIDE DOWN OF CODE
            </h1>
            <p className="text-xl text-gray-300 font-benguiat mt-4">
              The Rift is Opening. 10 Days to Solve. 1 Vision to Save the Future.
            </p>
            <div className="h-0.5 w-32 bg-[#CE1126] mx-auto box-border mt-6" />
          </div>

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
                        {typeof point === 'string' ? (
                          point
                        ) : (
                          <>
                            <strong className="text-white">{point.label}:</strong> {point.text}
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 border border-[#CE1126]/30 rounded-lg bg-black/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#CE1126] font-benguiat mb-4">TRANSMISSION COMPLETE</h3>
            <p className="text-gray-300">
              All official updates regarding problem statements and results will be broadcast via Official GDG APSIT Channels. Keep your walkie-talkies on.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Rules;
