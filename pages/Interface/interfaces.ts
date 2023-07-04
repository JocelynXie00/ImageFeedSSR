export interface CharacterInfo {
  id: number;
  name: string;
  image: string;
}
export interface ImageProps {
  characters: CharacterInfo[];
  page: number;
  totalPages: number;
}

export interface HomeProps {
  characters: CharacterInfo[];
  page: number;
  totalPages: number;
  error: string;
}
