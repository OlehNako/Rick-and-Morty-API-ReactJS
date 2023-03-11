import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'utils/Box';

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <RotatingLines strokeColor="#9a46b8" strokeWidth="4" />
    </Box>
  );
};

export default Loader;