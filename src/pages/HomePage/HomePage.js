import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { useSearchParams } from 'react-router-dom';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import CharactersNotFound from 'components/CharactersNotFound';
import { Wrapper } from './HomePage.styled';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  
  const { data, error } = useGetCharacterByNameQuery(query);

  return (
    <>
      <Wrapper>
        <Logo />
        <Filter />
          {error?.status === 404 ? <CharactersNotFound /> : <CharacterList />}
      </Wrapper>
    </>
  );
};

export default HomePage;
