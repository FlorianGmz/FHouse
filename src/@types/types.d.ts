export interface textState {
  text: string;
}

export interface architectState {
  architect: {
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
  };
}

export interface projectsState {
  introduction: string;
  items: projectState["project"][];
}

export interface projectState {
  project: {
    id: number;
    name: string;
    surface: number;
    city: string;
    image: string;
    description: string;
  };
}

export interface processState {
  introduction: string;
  items: processItemsState["item"][];
}
interface processItemState {
  item: {
    id: number;
    title: string;
    image: string;
    text: string;
  };
}

export interface aboutState {
  introduction: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  conclusionText: string;
  slideshow: string[];
  mainImage: string;
  finalImage: string;
}

export interface contactState {
  introduction: string;
  location: string;
  mainImage: string;
}
