interface Origin {
  name: string;
} 

export interface Personaje {
  id: number;
  name: string;
  gender: string;
  origin: Origin;
  image: string;
  episode: string[];
}
