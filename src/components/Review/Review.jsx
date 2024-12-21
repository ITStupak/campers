import css from './Review.module.css';
import sprite from '../../assets/icons/sprite.svg';

const Review = ({ rating, reviews, location }) => {
  const totalReviews = reviews.length;

  return (
    <ul className={css.camper_header_bottom}>
      <li className={css.camper_header_bottom_item}>
        <svg width={16} height={16} className={css.camper_rating_icon}>
          <use xlinkHref={`${sprite}#rating`} href={`${sprite}#rating`} />
        </svg>
        <span className={css.camper_rating}>
          {`${rating} (${totalReviews} Reviews)`}
        </span>
      </li>
      <li className={css.camper_header_bottom_item}>
        <svg width={20} height={20} className={css.camper_location_icon}>
          <use xlinkHref={`${sprite}#location`} href={`${sprite}#location`} />
        </svg>
        <span className={css.camper_location}>{location}</span>
      </li>
    </ul>
  );
};

export default Review;
