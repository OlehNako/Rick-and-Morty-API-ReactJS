import { useLocation } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from 'assets/arrow_back_24px.svg';
import { Box } from 'utils/Box';
import { GoBackLink, GoBackText } from './ArrowBack.styled';

const ArrowBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <GoBackLink to={backLinkHref}>
        <GoBackIcon /> <GoBackText>go back</GoBackText>
      </GoBackLink>
    </Box>
  );
};

export default ArrowBack;