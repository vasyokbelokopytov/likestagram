type Id = number;

export interface User {
  username: string;
  email: string;
  instagram: string | null;
  telegram: string | null;
  description: string;
}

export interface WithPhoto {
  photo: string | null;
}

export interface WithId {
  id: Id;
}

export interface WithPassword {
  password: string;
}
