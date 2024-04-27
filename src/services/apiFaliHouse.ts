const API_URL = "http://localhost:9000";

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw Error("Failed getting projects data");
  const data = await res.json();
  return data;
}

export async function getHome() {
  const res = await fetch(`${API_URL}/home`);
  if (!res.ok) throw Error("Failed getting home data");
  const data = await res.json();
  return data;
}

export async function getAbout() {
  const res = await fetch(`${API_URL}/about`);
  if (!res.ok) throw Error("Failed getting about data");
  const data = await res.json();
  return data;
}

export async function getContact() {
  const res = await fetch(`${API_URL}/contact`);
  if (!res.ok) throw Error("Failed getting contact data");
  const data = await res.json();
  return data;
}

export async function getArchitects() {
  const res = await fetch(`${API_URL}/architects`);
  if (!res.ok) throw Error("Failed getting architects data");
  const data = await res.json();
  return data;
}

export async function getProcess() {
  const res = await fetch(`${API_URL}/process`);
  if (!res.ok) throw Error("Failed getting process data");
  const data = await res.json();
  return data;
}
