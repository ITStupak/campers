import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Button/Button.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';
import css from './CamperList.module.css';
import { fetchAllCampers } from '../../../redux/campers/operations.js';
import {
  selectError,
  selectTotalCampers,
} from '../../../redux/campers/selectors.js';
import CampersNotFound from '../CampersNotFound/CampersNotFound.jsx';
import { selectFavorites } from '../../../redux/favorites/selectors.js';
import { selectFilters } from '../../../redux/filters/selectors.js';

let limit = 4;
let limitSequence = 4;

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);
  const favorites = useSelector(selectFavorites);
  const savedFilters = useSelector(selectFilters);
  const error = useSelector(selectError);

  const isFavorite = camperId => favorites.includes(camperId);

  const handleMore = () => {
    if (limit < totalCampers) {
      limit += limitSequence;
      dispatch(fetchAllCampers({ ...savedFilters, limit }));
    }
  };

  return (
    <section className={css.camper_list_section}>
      {error !== null ? (
        <CampersNotFound />
      ) : (
        <ul className={css.camper_list}>
          {campers.map(camper => (
            <CamperCard
              key={camper.id}
              camper={{ ...camper, favorite: isFavorite(camper.id) }}
            />
          ))}
        </ul>
      )}
      {error === null && (
        <Button
          className={css.load_more_btn}
          typeBtn="submit"
          ariaLabel="Download more campers"
          onClick={handleMore}
          disabled={limit >= totalCampers}
        >
          Load more
        </Button>
      )}
    </section>
  );
};

export default CamperList;
