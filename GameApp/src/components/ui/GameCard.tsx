import { Box,  Image } from '@chakra-ui/react';
import type { Game } from '../../services/api-client';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
    
  <Box borderWidth="1px" borderRadius={10} overflow="hidden">
    <Image src={game.background_image} alt={game.name} />
    <Box p="6">
      <h2>{game.name}</h2>
    </Box>
  </Box>
);


export default GameCard