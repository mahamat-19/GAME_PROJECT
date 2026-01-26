import { useEffect, useState } from 'react';
import { fetchGames, type Game } from '../services/api-client';


const useGames = () => {
    // Hook implementation goes here
 const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGames()
      .then(setGames)
      .catch(err => setError(err.message));
  }, []);

return { games, error };
}
export default useGames;

