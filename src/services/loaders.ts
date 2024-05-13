import { getAbout } from "./apiFaliHouse";

export async function aboutLoader() {
  const aboutData = await getAbout();
  return aboutData;
}
