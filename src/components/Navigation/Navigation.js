import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { Button, IconButton } from '@mui/material';
import { FiHome, FiPhone } from 'react-icons/fi';

const screenWidth = window.innerWidth;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const largeScreen = (
    <nav>
      <NavLink className={css.link} to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="contained">Contact</Button>
        </NavLink>
      )}
    </nav>
  );

  const mobileScreen = (
    <nav>
      <NavLink className={css.link} to="/">
        <IconButton aria-label="Home">
          <FiHome />
        </IconButton>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <IconButton aria-label="Contact">
            <FiPhone />
          </IconButton>
        </NavLink>
      )}
    </nav>
  );

  return <>{screenWidth > 600 ? largeScreen : mobileScreen}</>;
};
