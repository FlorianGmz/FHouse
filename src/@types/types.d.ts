export interface HomeDataState {
  homeData: HomeState;
  projectsData: ProjectsState;
}
export interface HomeState {
  introduction: string;
  firstText: string;
  secondText: string;
  slideshow: string[];
}
export interface ArchitectState {
  architect: {
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
  };
}

export interface ProjectsState {
  introduction: string;
  items: ProjectState["project"][];
}

export interface ProjectState {
  project: {
    id: number;
    name: string;
    surface: number;
    city: string;
    image: string;
    description: string;
  };
}

export interface ProcessState {
  introduction: string;
  items: ProcessItemsState["item"][];
}
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

export interface ContactState {
  introduction: string;
  location: string;
  mainImage: string;
}
