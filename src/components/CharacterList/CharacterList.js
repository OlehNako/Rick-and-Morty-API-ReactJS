import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCharters } from 'services/API/API';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
import { BASE_URL } from 'helpers/constans';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import { useSearchParams } from 'react-router-dom';

import {
  StyledList,
  StyledItem,
  StyledImg,
  CharacterName,
  Species,
  StyledLink,
} from './CharacterList.styled';
import Loader from 'components/Loader';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { data, error, isLoading } = useGetCharacterByNameQuery(query);
  console.log('error', error);
  
  useEffect(() => {
    if (data) {
      console.log("refresh search");
      let charactersToShow = data?.results.slice(0, 8);
      setCharacters(charactersToShow);
    } else {
      console.log('query in useEffect', query);
      getAllCharters().then(setCharacters);
    }
  }, [data, query]);

  return (
    <>
    {isLoading ? (
      <Loader />
      ) : (
        <StyledList>
          {characters.length !== 0 &&
            sortedCharactersByName(characters).map(
              ({ id, name, image, species }) => (
                <StyledItem key={id}>
                  <StyledLink to={`${BASE_URL}${id}`} state={{ from: location }}>
                    <StyledImg>
                       <img src={image} alt={name} width="240" />
                    </StyledImg>
                    <Box display="flex" flexDirection="column" m={5} height="70px">
                      <CharacterName>{name}</CharacterName>
                      <Species>{species}</Species>
                    </Box>
                  </StyledLink>
                </StyledItem>
              )
            )}
        </StyledList>
      )}
      </>
  );
};

export default CharacterList;
