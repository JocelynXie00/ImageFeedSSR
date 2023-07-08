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

export interface Characters {
  characters: CharacterInfo[];
}

export interface HomeProps {
  characters: CharacterInfo[];
  page: number;
  totalPages: number;
  error: string;
}

export interface EpisodeInfo {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface DetailProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  episodeInfo: EpisodeInfo[];
}
