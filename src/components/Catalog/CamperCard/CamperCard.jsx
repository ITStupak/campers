import sprite from '../../../assets/icons/sprite.svg';
import css from './CamperCard.module.css';
import Review from '../../Review/Review.jsx';
import CamperEquipment from '../../Catalog/CamperEquipment/CamperEquipment.jsx';

import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/favorites/slice.js';
import { Link } from 'react-router-dom';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <li className={css.card_wrap}>
      <Link to={`/catalog/${camper.id}`}>
        <img
          src={camper.gallery[0].thumb}
          alt={`Image of ${camper.name}`}
          width={292}
          height={320}
          className={css.card_img}
        />
      </Link>
      <div className={css.card_info}>
        <header className={css.card_info_main}>
          <div className={css.card_info_top}>
            <h2 className={css.card_info_title}>
              {camper.name.length > 23
                ? camper.name.slice(0, 23) + '...'
                : camper.name}
            </h2>
            <div className={css.card_price_wrap}>
              <span className={css.card_price}>{`€${camper.price.toFixed(
                2
              )}`}</span>
              <svg
                className={css.favorite_icon}
                width={24}
                height={24}
                role="button"
                onClick={handleToggleFavorite}
                aria-pressed={camper.favorite}
              >
                <use
                  xlinkHref={`${sprite}#favorite`}
                  href={`${sprite}#favorite`}
                />
              </svg>
            </div>
          </div>
          <Review
            id={camper.id}
            rating={camper.rating}
            reviews={camper.reviews}
            location={camper.location}
          />
        </header>
        <p className={css.card_dscr}>{camper.description.slice(0, 60)}...</p>
        <CamperEquipment camper={camper} scrollbar={true} />
        <Link
          to={`/catalog/${camper.id}`}
          className={css.show_more_link}
          rel="noopener noreferrer"
        >
          Show More
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
