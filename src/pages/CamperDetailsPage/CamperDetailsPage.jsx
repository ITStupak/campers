import { Helmet } from 'react-helmet-async';
import CamperDetails from '../../components/CamperDetails/CamperDetails';

const CamperDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Camper Details</title>
      </Helmet>
      <CamperDetails />
    </>
  );
};

export default CamperDetailsPage;
