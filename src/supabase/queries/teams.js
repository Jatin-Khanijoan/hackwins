import { supabase } from "../client";

export const registerTeam = async (formData) => {
  const { teamName, members } = formData;

  if (!teamName || members.length !== 4) {
    throw new Error("Invalid team data");
  }

  // Insert team
  const { data: team, error: teamError } = await supabase
  .from("teams")
    .insert({
      team_name: teamName,
    })
    .select()
    .single();

  if (teamError) throw teamError;

  const membersPayload = members.map((m, index) => ({
    team_id: team.id,
    member_name: m.member_name,
    email: m.email,
    phone: m.phone,
    moodle_id: m.moodle_id,
    member_dept: m.member_dept,
    member_year: m.member_year,
    team_lead: index === 0,
  }));

  const { error: membersError } = await supabase
    .from("members")
    .insert(membersPayload);

  if (membersError) throw membersError;

  return {
    success: true,
    team_id: team.id,
  };
};
