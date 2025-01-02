import supabase from "./supabase.js";

export async function getProjects() {
  const { data, error } = await supabase
    .from("project")
    .select(
      `
    *,
    introduction (
      text
    )
  `,
    )
    .order("id", { ascending: true });
  if (error) {
    throw new Error("Projects could not be loaded");
  }
  return data;
}

export async function getHome() {
  const { data, error } = await supabase.from("homepage")
    .select(`*, introduction(text)
`);
  if (error) {
    throw new Error("Home could not be loaded");
  }
  return data;
}

export async function getAbout() {
  const { data, error } = await supabase.from("aboutpage")
    .select(`*, introduction(text)
`);
  if (error) {
    throw new Error("About data could not be loaded");
  }
  return data;
}

export async function getContact() {
  const { data, error } = await supabase.from("contactpage")
    .select(`*, introduction(text)
`);
  if (error) {
    throw new Error("Contact data could not be loaded");
  }
  return data;
}

export async function getArchitects() {
  const { data, error } = await supabase
    .from("architect")
    .select(`*`)
    .order("id", { ascending: true });
  if (error) {
    throw new Error("Architect could not be loaded");
  }
  return data;
}

export async function getProcess() {
  const { data, error } = await supabase
    .from("process")
    .select(`*, introduction(text)`)
    .order("id", { ascending: true });
  if (error) {
    throw new Error("Process could not be loaded");
  }
  return data;
}
