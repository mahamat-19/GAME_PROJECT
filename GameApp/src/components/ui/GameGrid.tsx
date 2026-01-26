import { useEffect, useState } from 'react';
import { fetchGames } from '../../services/api-client';
import type { Game } from '../../services/api-client';

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGames()
      .then(setGames)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {games.map(game => (
        <div key={game.id}>
          <img src={game.background_image} alt={game.name} style={{ width: '100%' }} />
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default GameGrid;