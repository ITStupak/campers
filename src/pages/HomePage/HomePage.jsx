import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Home</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;
