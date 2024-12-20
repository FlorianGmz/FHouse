import supabase, { supabaseUrl } from "./supabase.js";

// TODO: Change the fetch function by the Supabase API one

export async function getProjects() {
  const { data, error } = await supabase.from("project").select("*");
  const test = await supabase
    .from("introduction")
    .select("project_id" === "id");
  console.log(test);
  if (error) {
    throw new Error("Projects could not be loaded");
  }
  return data;
}

export async function getHome() {
  const { data, error } = await supabase.from("homepage").select("*");
  if (error) {
    throw new Error("Home could not be loaded");
  }
  return data;
}

export async function getAbout() {
  const res = await fetch(`${supabaseUrl}/about`);
  if (!res.ok) throw Error("Failed getting about data");
  const data = await res.json();
  return data;
}

export async function getContact() {
  const res = await fetch(`${supabaseUrl}/contact`);
  if (!res.ok) throw Error("Failed getting contact data");
  const data = await res.json();
  return data;
}

export async function getArchitects() {
  const { data, error } = await supabase.from("architect").select("*");
  if (error) {
    throw new Error("Architect could not be loaded");
  }
  return data;
}

export async function getProcess() {
  const { data, error } = await supabase.from("process").select("*");
  if (error) {
    throw new Error("Process could not be loaded");
  }
  return data;
}
