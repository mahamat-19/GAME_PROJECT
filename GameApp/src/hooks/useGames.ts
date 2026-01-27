import { useEffect, useState } from 'react';
import { fetchGames, type Game } from '../services/api-client';


const useGames = () => {
    // Hook implementation goes here
 const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGames()
      .then((res) => {
        setGames(res);
        setIsLoading(false);
      })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false);
  });
  }, []);
return { games, error, isLoading };
}

export default useGames;