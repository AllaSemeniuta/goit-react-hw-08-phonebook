import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { FiLogOut } from 'react-icons/fi';
import { Button, IconButton } from '@mui/material';
import { WelcomeText, Wrapper } from './UserMenu.styled';

const screenWidth = window.innerWidth;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const largeScreen = (
    <Wrapper>
      <WelcomeText> {user.name}</WelcomeText>
      <Button
        variant="contained"
        endIcon={<FiLogOut />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );

  const mobileScreen = (
    <Wrapper>
      <WelcomeText> {user.name}</WelcomeText>
      <IconButton aria-label="Logout" onClick={() => dispatch(logOut())}>
        <FiLogOut />
      </IconButton>
    </Wrapper>
  );

  return <>{screenWidth >= 600 ? largeScreen : mobileScreen}</>;
};
