import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAllCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import { fetchAllCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader.jsx';
import CamperList from './CamperList/CamperList.jsx';
import { clearFilter } from '../../redux/filters/slice.js';
import { selectFilters } from '../../redux/filters/selectors.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (
      (!campers || campers.length === 0) &&
      error === null &&
      Object.keys(filters).length === 0
    ) {
      dispatch(clearFilter());
      dispatch(fetchAllCampers());
    }
  }, [dispatch, campers, error, filters]);

  return loading ? <Loader /> : <CamperList campers={campers} />;
};

export default Catalog;
