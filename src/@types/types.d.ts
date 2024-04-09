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
