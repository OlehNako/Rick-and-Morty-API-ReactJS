import React from 'react';
import { FcHome } from 'react-icons/fc';
import { Box } from 'utils/Box';
import { StyledBackHome, TextInfo } from './NotFoundPage.styled';

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <TextInfo>
        Well, I guess you did something wrong. Don't worry and go back to the {' '}
        <StyledBackHome to="/">
          <FcHome />
        </StyledBackHome>
      </TextInfo>
    </Box>
  );
};

export default NotFound;