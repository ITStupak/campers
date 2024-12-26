import { Helmet } from 'react-helmet-async';
import css from './CamperDetailsPage.module.css';
import CamperDetails from '../../components/CamperDetails/CamperDetails';

const CamperDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Camper Details</title>
      </Helmet>
      <section className={css.section_details}>
        <CamperDetails />
      </section>
    </>
  );
};

export default CamperDetailsPage;
