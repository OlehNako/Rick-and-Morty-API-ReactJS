import { Routes, Route } from 'react-router-dom';
import { Box } from 'utils/Box';
import HomePage from 'pages/HomePage';
import CharacterPage from 'pages/CharacterPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <Box
      p={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="1020px"
      marginLeft={0}
      marginRight={0}
    >
      <Routes>
        <Route path="/Rick-and-Morty-API-ReactJS" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
