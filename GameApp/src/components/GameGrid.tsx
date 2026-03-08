import { SimpleGrid } from '@chakra-ui/react';
import useGames  from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { Genre } from '../services/api-client';

interface GameGridProps {
  selectedGenre : Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5];

  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={5} padding={10} >
      {isLoading && 
      skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map(game => (
       <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;