import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const classActive = ({ isActive }) => {
  return isActive ? css.active : css.link;
};

const Header = () => (
  <header className={css.header}>
    <Container className={css.header_container}>
      <nav className={css.header_nav}>
        <Logo />
        <ul className={css.header_nav_list}>
          <li>
            <NavLink
              to="/"
              exact="true"
              className={classActive}
              rel="noopener noreferrer"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={classActive}
              rel="noopener noreferrer"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
