export type Id = string;

export type Token = string;

export interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
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

export interface WithIsLiked {
  isLiked: boolean;
}
