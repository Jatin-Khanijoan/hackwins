import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { registerTeam } from "@/supabase/queries/teams";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail, Phone, Hash, GraduationCap, Building2 } from "lucide-react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    teamName: "",
    members: Array.from({ length: 4 }, () => ({
      member_name: "",
      email: "",
      phone: "",
      moodle_id: "",
      member_dept: "",
      member_year: "FE",
    })),
  });

  const handleMemberChange = (index, field, value) => {
    const updated = [...formData.members];
    updated[index][field] = value;
    setFormData({ ...formData, members: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await registerTeam(formData);
      setSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          teamName: "",
          members: Array.from({ length: 4 }, () => ({
            member_name: "",
            email: "",
            phone: "",
            moodle_id: "",
            member_dept: "",
            member_year: "FE",
          })),
        });
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative bg-black min-h-screen">
        {/* Background with hero image */}
        <div className="fixed inset-0 w-full h-screen -z-20 overflow-hidden pointer-events-none">
          <img src="/hero_bg.png" alt="" className="w-full h-full object-cover opacity-20" />
        </div>

        {/* Dark tint overlay */}
        <div
          className="fixed inset-0 w-full h-screen -z-10 pointer-events-none"
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            opacity: 0.85
          }}
        ></div>

        {/* Ambient glows */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#CE1126] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-[#FDC700] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <Navbar />

        <main className="relative min-h-screen px-4 pb-20 pt-32">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-benguiat text-[#FDC700] mb-4"
                style={{
                  textShadow: "0 0 30px rgba(253, 199, 0, 0.4)"
                }}
              >
                Team Registration
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#CE1126] to-transparent mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Assemble your squad for the ultimate 10-day innovation sprint. Register your team and prepare for <span className="text-[#CE1126] font-semibold">HackWins 2026</span>.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="max-w-5xl mx-auto backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 space-y-12 shadow-2xl"
            >
              {/* Team Details Section */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#CE1126]/30">
                  <Users className="text-[#FDC700]" size={24} />
                  <h2 className="text-2xl font-semibold font-benguiat text-white">
                    Team Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Team Name <span className="text-[#CE1126]">*</span>
                    </label>
                    <input
                      required
                      value={formData.teamName}
                      placeholder="Enter your team name"
                      className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3.5 text-white placeholder:text-gray-500
                        focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, teamName: e.target.value })
                      }
                    />
                  </div>
                </div>
              </section>

              {/* Team Members Section */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 pb-4 border-b border-[#CE1126]/30">
                  <GraduationCap className="text-[#FDC700]" size={24} />
                  <h2 className="text-2xl font-semibold font-benguiat text-white">
                    Team Members
                  </h2>
                </div>

                <div className="space-y-8">
                  {formData.members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="relative rounded-xl border border-white/10 bg-black/30 p-6 md:p-8 space-y-6 hover:border-[#CE1126]/30 transition-colors group"
                    >
                      {/* Member header */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-[#CE1126]/20 border border-[#CE1126]/40 flex items-center justify-center text-[#FDC700] font-benguiat">
                            {index + 1}
                          </span>
                          Member {index + 1}
                        </h3>

                        {index === 0 && (
                          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#CE1126] text-white shadow-lg">
                            TEAM LEADER
                          </span>
                        )}
                      </div>

                      {/* Input grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Users size={16} className="text-[#CE1126]" />
                            Full Name <span className="text-[#CE1126]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={member.member_name}
                            placeholder="Enter full name"
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "member_name", e.target.value)
                            }
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Mail size={16} className="text-[#CE1126]" />
                            Email <span className="text-[#CE1126]">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            value={member.email}
                            placeholder="email@example.com"
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "email", e.target.value)
                            }
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Phone size={16} className="text-[#CE1126]" />
                            Phone <span className="text-[#CE1126]">*</span>
                          </label>
                          <input
                            required
                            type="tel"
                            value={member.phone}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "phone", e.target.value)
                            }
                          />
                        </div>

                        {/* Moodle ID */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Hash size={16} className="text-[#CE1126]" />
                            Moodle ID <span className="text-[#CE1126]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={member.moodle_id}
                            maxLength={8}
                            placeholder="Enter Moodle ID"
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "moodle_id", e.target.value)
                            }
                          />
                        </div>

                        {/* Department */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Building2 size={16} className="text-[#CE1126]" />
                            Department <span className="text-[#CE1126]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={member.member_dept}
                            placeholder="e.g., Computer Engineering"
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "member_dept", e.target.value)
                            }
                          />
                        </div>

                        {/* Year */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <GraduationCap size={16} className="text-[#CE1126]" />
                            Year <span className="text-[#CE1126]">*</span>
                          </label>
                          <select
                            value={member.member_year}
                            className="w-full rounded-lg bg-black/50 border border-white/20 px-4 py-3 text-white
                              focus:outline-none focus:ring-2 focus:ring-[#CE1126]/50 focus:border-[#CE1126] transition-all"
                            onChange={(e) =>
                              handleMemberChange(index, "member_year", e.target.value)
                            }
                          >
                            <option value="FE">First Year (FE)</option>
                            <option value="SE">Second Year (SE)</option>
                            <option value="TE">Third Year (TE)</option>
                          </select>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#CE1126]/10 to-transparent rounded-tr-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Error/Success Messages */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-center font-medium"
                >
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-center font-medium"
                >
                  ✓ Team registered successfully! Good luck at HackWins 2026!
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full h-14 rounded-lg bg-gradient-to-r from-[#CE1126] to-[#A00F1E] text-white font-bold text-lg font-benguiat
                  hover:shadow-[0_0_30px_rgba(206,17,38,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
                  border border-[#CE1126]/50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </motion.button>

              {/* Info note */}
              <p className="text-center text-sm text-gray-500">
                By registering, you agree to participate in HackWins 2026 from January 7-18, 2026.
              </p>
            </motion.form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Register;