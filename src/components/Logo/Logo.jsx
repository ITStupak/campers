import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={css.logo}>
        <svg className={css.icon}>
          <use href="/src/assets/icons/sprite.svg#logo"></use>
        </svg>
      </NavLink>
    </>
  );
};

export default Logo;
