import useGames  from '../../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <ul>
      {games.map(game => (
        <li key={game.id}>
          <img src={game.background_image} alt={game.name} style={{ width: '100%' }} />
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
        </li>
      ))}
    </ul>
    </>
  );
};

export default GameGrid;