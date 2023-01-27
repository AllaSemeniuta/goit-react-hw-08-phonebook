import { useAuth } from 'hooks';
import { Button, IconButton } from '@mui/material';
import { FiHome, FiPhone } from 'react-icons/fi';
import { StyledLink } from './Navigation.styled';

const screenWidth = window.innerWidth;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const largeScreen = (
    <nav>
      <StyledLink to="/">
        <Button variant="contained">Home</Button>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Button variant="contained">Contact</Button>
        </StyledLink>
      )}
    </nav>
  );

  const mobileScreen = (
    <nav>
      <StyledLink to="/">
        <IconButton aria-label="Home">
          <FiHome />
        </IconButton>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <IconButton aria-label="Contact">
            <FiPhone />
          </IconButton>
        </StyledLink>
      )}
    </nav>
  );

  return <>{screenWidth >= 600 ? largeScreen : mobileScreen}</>;
};
