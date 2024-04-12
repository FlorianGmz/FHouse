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

interface itemState {
  id: number;
  title: string;
  image: string;
  text: string;
}
export interface processState {
  introduction: string;
  item: itemState[];
}

export interface aboutState {
  introductionText: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  conclusionText: string;
  diaporamaImage: string[];
  mainImage: string;
}
