import { NavLink } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={css.logo}>
        <svg className={css.icon}>
          <use xlinkHref={`${sprite}#logo`} href={`${sprite}#logo`} />
        </svg>
      </NavLink>
    </>
  );
};

export default Logo;
