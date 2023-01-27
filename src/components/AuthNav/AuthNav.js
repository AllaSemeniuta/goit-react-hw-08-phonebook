import { Button, IconButton } from '@mui/material';
import { FiLogIn, FiHome, FiUserPlus } from 'react-icons/fi';
import { StyledLink } from './AuthNav.styled';

const screenWidth = window.innerWidth;

export const AuthNav = () => {
  const largeScreen = (
    <div>
      <StyledLink to="/register">
        <Button variant="contained">Register</Button>
      </StyledLink>
      <StyledLink to="/login">
        <Button variant="contained" endIcon={<FiLogIn />}>
          Log In
        </Button>
      </StyledLink>
    </div>
  );

  const mobileScreen = (
    <div>
      <StyledLink to="/register">
        <IconButton aria-label="Register">
          <FiUserPlus />
        </IconButton>
      </StyledLink>
      <StyledLink to="/login">
        <IconButton aria-label="Log In">
          <FiLogIn />
        </IconButton>
      </StyledLink>
    </div>
  );

  return <>{screenWidth > 600 ? largeScreen : mobileScreen}</>;
};

// FiLogIn;
// <Button variant="outlined" startIcon={<DeleteIcon />}>
//   Delete
// </Button>
// <Button variant="contained" endIcon={<SendIcon />}>
//   Send
// </Button>
