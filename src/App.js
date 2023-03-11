import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CharacterPage from 'pages/CharacterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { Wrapper } from 'App.styled';

function App() {
  return (
    <Wrapper
    // p={1}
    // display="flex"
    // flexDirection="column"
    // justifyContent="center"
    // alignItems="center"
    // maxWidth="1020px"
    // marginLeft={0}
    // marginRight={0}
    >
      <Routes>
        <Route path="/Rick-and-Morty-API-ReactJS" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
