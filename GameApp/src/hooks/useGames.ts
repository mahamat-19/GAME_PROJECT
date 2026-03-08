import { useEffect, useState } from 'react';
import { fetchGames, type Game, type Genre } from '../services/api-client';


const useGames = (selectedGenre: Genre | null) => {
    // Hook implementation goes here
 const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGames(selectedGenre)
      .then((res) => {
        setGames(res);
        setIsLoading(false);
      })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false);
  });
  }, [ selectedGenre]);
return { games, error, isLoading };
}

export default useGames;