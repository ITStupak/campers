import { Link } from 'react-router-dom';
import css from './CamperDetailsBar.module.css';

const CamperDetailsBar = ({ active, handleClick }) => {
  const { feature, reviews } = active;
  return (
    <ul className={css.details_bar_wrapper}>
      <li>
        <Link
          to="features"
          className={`${css.details_bar_title} ${css[feature ? 'active' : '']}`}
          onClick={() => handleClick('feature')}
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          to="reviews"
          className={`${css.details_bar_title} ${css[reviews ? 'active' : '']}`}
          onClick={() => handleClick('reviews')}
        >
          Reviews
        </Link>
      </li>
    </ul>
  );
};

export default CamperDetailsBar;
