export interface HomeDataState {
  homeData: HomeState[];
  projectsData: ProjectsState;
}
export interface HomeState {
  introduction: string;
  mainText: string;
  conclusion: string;
  slideshow: string[];
}

export type ProjectsState = ProjectState["project"][];

export interface ProjectState {
  project: {
    id: number;
    name: string;
    floorSpace: number;
    city: string;
    image: string;
    description: string;
    introduction: { text: string };
  };
}

export type ProcessState = ProcessItemState["item"][];

interface ProcessItemState {
  item: {
    id: number;
    title: string;
    image: string;
    image_alt: string;
    text: string;
    introduction: { text: string };
  };
}

export interface AboutState {
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  image_1: string;
  image_2: string;
  image_3: string;
}

export interface ContactDataState {
  contactData: ContactState;
  architectsData: ArchitectState["architect"][];
}

export interface ContactState {
  introduction: string;
  location: string;
  mainImage: string;
}
export interface ArchitectState {
  architect: {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
  };
}
