export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const fetchGames = async (selectedGenre?: Genre | null): Promise<Game[]> => {
  const genresQuery = selectedGenre ? `?genres=${selectedGenre.id}` : '';

  const response = await fetch(`http://localhost:3000/games${genresQuery}`);
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  const data = await response.json();
  return data.results; // adjust if RAWG API structure differs
};


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface fetchGenresResponse {
  count: number;
  results: Genre[];
}

export const fetchGenresResponse = async (selectedGenre?: Genre | null): Promise<Genre[]> => {
  const genresQuery = selectedGenre ? `?genres=${selectedGenre.id}` : '';

  const response = await fetch(`http://localhost:3000/genres${genresQuery}`);
  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }
  const data = await response.json();
  return data.results; // adjust if RAWG API structure differs
};
