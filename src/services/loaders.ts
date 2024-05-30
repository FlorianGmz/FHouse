import {
  getAbout,
  getArchitects,
  getContact,
  getHome,
  getProcess,
  getProjects,
} from "./apiFaliHouse";

export async function aboutLoader() {
  const aboutData = await getAbout();
  return aboutData;
}

export async function homeLoader() {
  const homeData = await getHome();
  const projectsData = await getProjects();
  return { homeData, projectsData };
}

export async function processLoader() {
  const processData = await getProcess();
  return processData;
}

export async function projectsLoader() {
  const projectsData = await getProjects();
  return projectsData;
}

export async function contactLoader() {
  const contactData = await getContact();
  const architectsData = await getArchitects();
  return { contactData, architectsData };
}

export async function footerLoader() {
  const architectsData = await getArchitects();
  return architectsData;
}
