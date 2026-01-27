import { Box,  Image } from '@chakra-ui/react';
import type { Game } from '../../services/api-client';
import PlatformIconList from '../PlatformIconList';
interface GameCardProps {
    game: Game;
}
const GameCard = ({ game }: GameCardProps) => (
    
  <Box borderWidth="1px" borderRadius={10} overflow="hidden">
    <Image src={game.background_image} alt={game.name} />
    <Box p="4">
      <h2>{game.name}</h2>
        <p>Rating: {game.rating}</p>
<PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />    </Box>
  </Box>
);
export default GameCard