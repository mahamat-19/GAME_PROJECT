import { HStack, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  if (isLoading) return <div>Sowsow...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {genres.map(genre => (
        <div key={genre.id}>
          <HStack marginBottom={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background ? getCropedImageUrl(genre.image_background, 'small') : undefined}
              alt={genre.name}
            />
            <span>{genre.name}</span>
          </HStack>
        </div>
      ))}
    </div>
  );
};

export default GenreList;