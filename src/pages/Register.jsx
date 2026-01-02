import { registerTeam } from "@/supabase/queries/teams";
import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);

    try {
      await registerTeam(formData);
      alert("Team registered successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 pb-20">
      <div className="text-center pt-14 mb-14">
        <h1 className="text-5xl font-bold tracking-tight text-[#CE1126]">
          Team Registration
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-10 space-y-14"
      >
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-zinc-800 pb-3 text-zinc-200">
            Team Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Team Name
              </label>
              <input
                required
                placeholder="Enter your team name"
                className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-zinc-100
                  focus:outline-none focus:ring-2 focus:ring-[#CE1126]/60 focus:border-[#CE1126]"
                onChange={(e) =>
                  setFormData({ ...formData, teamName: e.target.value })
                }
              />
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-xl font-semibold border-b border-zinc-800 pb-3 text-zinc-200">
            Team Members
          </h2>

          {formData.members.map((_, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-zinc-800 bg-black/50 p-8 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">
                  Member {index + 1}
                </h3>

                {index === 0 && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#CE1126] text-black">
                    Team Leader
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["Full Name", "member_name"],
                  ["Email", "email"],
                  ["Phone", "phone"],
                  ["Moodle ID", "moodle_id"],
                  ["Department", "member_dept"],
                ].map(([label, field]) => (
                  <div key={field}>
                    <label className="block text-sm text-zinc-400 mb-1">
                      {label}
                    </label>
                    <input
                      required
                      type={field === "email" ? "email" : "text"}
                      maxLength={field === "moodle_id" ? 8 : undefined}
                      placeholder={label}
                      className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-zinc-100
                        focus:outline-none focus:ring-2 focus:ring-[#CE1126]/60 focus:border-[#CE1126]"
                      onChange={(e) =>
                        handleMemberChange(index, field, e.target.value)
                      }
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Year
                  </label>
                  <select
                    className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-zinc-100
                      focus:outline-none focus:ring-2 focus:ring-[#CE1126]/60 focus:border-[#CE1126]"
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
            </div>
          ))}
        </section>

        {error && (
          <p className="text-red-500 text-center font-medium">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full h-14 rounded-xl bg-[#CE1126] text-black font-bold text-lg
            hover:bg-red-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </main>
  );
};

export default Register;
