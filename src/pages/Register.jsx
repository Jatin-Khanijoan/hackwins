"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { registerTeam } from "@/supabase/queries/teams";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Mail,
  Phone,
  Hash,
  GraduationCap,
  Building2,
} from "lucide-react";

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
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-20">
          <img
            src="/hero_bg.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>

        <div className="fixed inset-0 bg-black/85 -z-10" />

        <Navbar />

        <main className="relative px-4 pt-28 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-benguiat text-[#FDC700] mb-4">
                Team Registration
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Register your team for{" "}
                <span className="text-[#CE1126] font-semibold">
                  HackWins 2026
                </span>
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl
                p-5 sm:p-8 md:p-12 space-y-12"
            >
              {/* Team Name */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-benguiat text-white flex items-center gap-2">
                  <Users className="text-[#FDC700]" /> Team Details
                </h2>

                <input
                  required
                  value={formData.teamName}
                  placeholder="Team Name"
                  className="w-full rounded-lg bg-black/60 border border-white/20 px-4 py-3 text-white
                    focus:ring-2 focus:ring-[#CE1126]/50 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, teamName: e.target.value })
                  }
                />
              </section>

              {/* Members */}
              <section className="space-y-8">
                <h2 className="text-xl sm:text-2xl font-benguiat text-white flex items-center gap-2">
                  <GraduationCap className="text-[#FDC700]" /> Team Members
                </h2>

                {formData.members.map((member, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 md:p-8 space-y-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#CE1126]/30 text-[#FDC700]">
                          {index + 1}
                        </span>
                        Member {index + 1}
                      </h3>

                      {index === 0 && (
                        <span className="text-xs bg-[#CE1126] px-3 py-1 rounded-full font-bold">
                          TEAM LEADER
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        required
                        placeholder="Full Name"
                        value={member.member_name}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "member_name",
                            e.target.value
                          )
                        }
                      />

                      <input
                        required
                        type="email"
                        placeholder="Email"
                        value={member.email}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                      />

                      <input
                        required
                        type="tel"
                        placeholder="Phone"
                        value={member.phone}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(index, "phone", e.target.value)
                        }
                      />

                      <input
                        required
                        placeholder="Moodle ID"
                        value={member.moodle_id}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "moodle_id",
                            e.target.value
                          )
                        }
                      />

                      <input
                        required
                        placeholder="Department"
                        value={member.member_dept}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "member_dept",
                            e.target.value
                          )
                        }
                      />

                      <select
                        value={member.member_year}
                        className="input"
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "member_year",
                            e.target.value
                          )
                        }
                      >
                        <option value="FE">FE</option>
                        <option value="SE">SE</option>
                        <option value="TE">TE</option>
                      </select>
                    </div>
                  </motion.div>
                ))}
              </section>

              {/* Messages */}
              {error && (
                <div className="p-4 text-red-400 bg-red-500/10 rounded-lg text-center">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-4 text-green-400 bg-green-500/10 rounded-lg text-center">
                  ✓ Registration Successful!
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-lg bg-[#CE1126] text-white text-lg font-bold
                  hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
            </motion.form>
          </div>
        </main>

        <Footer />
      </div>

      {/* Input utility */}
      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #ce1126;
          box-shadow: 0 0 0 2px rgba(206, 17, 38, 0.4);
        }
      `}</style>
    </>
  );
};

export default Register;
