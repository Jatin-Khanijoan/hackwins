import React from 'react';
import Navbar from "@/components/navbar"; // Assuming you have a Navbar
import Footer from "@/components/footer"; // Assuming you have a Footer

// Data for the tracks. You can easily add more tracks here later.
const trackData = [
  // {
  //   title: "Track 1: Celestial Innovations",
  //   description: "Forge new constellations of technology. This track is for groundbreaking ideas that push the boundaries of what's possible.",
  //   // You can add more properties like an icon or image later
  // },
  // {
  //   title: "Track 2: Galactic Guardians",
  //   description: "Build solutions that protect and serve our digital universe. Focus on cybersecurity, data privacy, and ethical tech.",
  // },
];

const Tracks = () => {
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

      <div className="relative z-10 flex min-h-screen flex-col bg-transparent text-white">
        <Navbar />

        <main className="flex-grow min-h-screen">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32">
            <div className="text-center mb-16">
              <h1 className="text-2xl md:text-2xl font-bold text-[#FDC700] mb-4 font-benguiat drop-shadow-[0_0_15px_rgba(253,199,0,0.3)]">
                Choose Your Track
              </h1>
              {/* <p className="text-xl text-gray-300 font-benguiat mt-4">
                The Rift is Opening. 10 Days to Solve. 1 Vision to Save the Future.
              </p> */}
              <div className="h-0.5 w-32 bg-[#CE1126] mx-auto box-border mt-6" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {trackData.map((track) => (
                <div
                  key={track.title}
                  className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#CE1126]/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#CE1126]/10"
                >
                  <h2 className="mb-4 font-benguiat text-2xl font-bold text-white group-hover:text-[#FDC700] transition-colors">
                    {track.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Tracks;
