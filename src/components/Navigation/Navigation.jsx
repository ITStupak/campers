import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const createClassLink = ({ isActive }) => {
    return clsx(css.btn, isActive && css.active);
  };

  return (
    <header className={css.navBox}>
      <nav className={css.links}>
        <NavLink to="/" className={createClassLink}>
          Home
        </NavLink>

        <NavLink to="/catalog" className={createClassLink}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
