import { NavLink } from 'react-router-dom';
import css from './CamperDetailsBar.module.css';
import classNames from 'classnames';

const CamperDetailsBar = () => {
  return (
    <ul className={css.details_bar_wrapper}>
      <li>
        <NavLink
          to="/catalog"
          exact="true"
          className={classNames(css.details_bar_title, css.bar_title_accent)}
        >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog" className={classNames(css.details_bar_title)}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
{
  /* <div className={css.details_bar_wrapper}>
      <h4 className={classNames(css.details_bar_title, css.bar_title_accent)}>
        Features
      </h4>
      <h4 className={classNames(css.details_bar_title)}>Reviews</h4>
    </div> */
}

export default CamperDetailsBar;
