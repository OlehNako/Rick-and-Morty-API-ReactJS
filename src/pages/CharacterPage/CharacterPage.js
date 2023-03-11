import CharacterAPI from 'components/CharacterAPI';
import ArrowBack from 'components/ArrowBack';
import { Box } from 'utils/Box';

const CharacterPage = () => {
  return (
      <Box pt="23px" px="50px" pb="142px">
        <ArrowBack />
      <CharacterAPI />
    </Box>
  );
};

export default CharacterPage;