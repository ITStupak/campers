import { Helmet } from 'react-helmet-async';
import css from './CamperDetailsPage.module.css';
import CamperForm from '../../components/CamperDetails/CamperForm/CamperForm';

const CamperDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Camper Details</title>
      </Helmet>
      <section className={css.section_details}>
        <CamperForm />
      </section>
    </>
  );
};

export default CamperDetailsPage;
