export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export const fetchGames = async (): Promise<Game[]> => {
  const response = await fetch('http://localhost:3000/games');
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  const data = await response.json();
  return data.results; // adjust if RAWG API structure differs
};