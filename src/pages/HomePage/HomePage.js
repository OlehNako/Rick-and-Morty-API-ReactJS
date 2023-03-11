import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { Box } from 'utils/Box';
import { useSearchParams } from 'react-router-dom';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import CharactersNotFound from 'components/CharactersNotFound';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  
  const { data, error } = useGetCharacterByNameQuery(query);

  return (
    <Box pt="28px" width="100%">
      <Logo />
      <Filter />
      {error?.status === 404 ? <CharactersNotFound /> : <CharacterList />}
    </Box>
  );
};

export default HomePage;
