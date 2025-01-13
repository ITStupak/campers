import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOneCamper } from '../../redux/campers/operations';
import { selectCamperById } from '../../redux/campers/selectors';
import CamperForm from '../CamperDetails/CamperForm/CamperForm';
import css from './CamperDetails.module.css';
import CamperFeatures from './CamperFeatures/CamperFeatures';
import CamperDetailsBar from './CamperDetailsBar/CamperDetailsBar';
import CamperGallery from './CamperGallery/CamperGallery';
import Review from '../Review/Review';
import Container from '../Container/Container';
// import CamperReviews from '../CamperDetails/CamperReviews/CamperReviews';

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
        <div className={css.details_wrapper_top}>
          <div className={css.details_info_wrap}>
            <h2 className={css.details_title}>{camper.name}</h2>
            <Container className={css.details_review_wrap}>
              <Review
                reviews={camper.reviews}
                rating={camper.rating}
                location={camper.location}
              />
            </Container>
            <span className={css.details_price}>
              {`€${camper.price.toFixed(2)}`}
            </span>
          </div>
          <CamperGallery camper={camper} />
          <CamperDetailsBar />
        </div>
        <div className={css.details_wrapper_bottom}>
          <CamperFeatures camper={camper} />
          {/* <CamperReviews camper={camper} /> */}
          <CamperForm />
        </div>
      </section>
    </>
  );
};

export default CamperDetails;
