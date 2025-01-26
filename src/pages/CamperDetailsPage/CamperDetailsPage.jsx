import { Helmet } from 'react-helmet-async';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const CamperDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Camper Details</title>
      </Helmet>
      <CamperDetails />
      <ScrollToTop />
    </>
  );
};

export default CamperDetailsPage;
