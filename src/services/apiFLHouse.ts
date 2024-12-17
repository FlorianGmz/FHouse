import { supabaseUrl } from "./supabase.js";

// TODO: Change the fetch function by the Supabase API one

export async function getProjects() {
  const res = await fetch(`${supabaseUrl}/projects`);
  if (!res.ok) throw Error("Failed getting projects data");
  const data = await res.json();
  return data;
}

export async function getHome() {
  const res = await fetch(`${supabaseUrl}/home`);
  if (!res.ok) throw Error("Failed getting home data");
  const data = await res.json();
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
  const res = await fetch(`${supabaseUrl}/architects`);
  if (!res.ok) throw Error("Failed getting architects data");
  const data = await res.json();
  return data;
}

export async function getProcess() {
  const res = await fetch(`${supabaseUrl}/process`);
  if (!res.ok) throw Error("Failed getting process data");
  const data = await res.json();
  return data;
}
