import React from 'react';
import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { Box } from 'utils/Box';

const HomePage = () => {
  return (
    <Box pt="28px" width="100%">
      <Logo />
      <Filter />
      <CharacterList />
    </Box>
  );
};

export default HomePage;
