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
  };
}

export type ProcessState = ProcessItemState["item"][];

interface ProcessItemState {
  item: {
    id: number;
    title: string;
    image: string;
    text: string;
  };
}

export interface AboutState {
  introduction: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  conclusionText: string;
  firstImage: string;
  mainImage: string;
  finalImage: string;
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
