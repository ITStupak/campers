import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOneCamper } from '../../redux/campers/operations';
import { selectCamperById } from '../../redux/campers/selectors';
import CamperReviews from '../CamperDetails/CamperReviews/CamperReviews';
import CamperForm from '../CamperDetails/CamperForm/CamperForm';
import css from './CamperDetails.module.css';

const CamperDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(state => selectCamperById(state, id));
  //   const [isActiveTab, setIsActiveTab] = useState({
  //     feature: true,
  //     reviews: false,
  //   });

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCamper(id));
    }
  }, [dispatch, id]);

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <>
      <section className={css.section_details}>
        <CamperReviews camper={camper} />
        <CamperForm />
      </section>
    </>
  );
};

export default CamperDetails;
