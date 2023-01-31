import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, Wrapper, UserName } from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Header>
      {isLoggedIn && <UserName>Welcome, {user.name}</UserName>}
      <Wrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </Header>
  );
};
