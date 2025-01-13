import Container from '../../Container/Container';
import css from './CamperFeatures.module.css';
import FeaturesBadges from './FeaturesBadges/FeaturesBadges';
import FeaturesVehicle from './FeaturesVehicle/FeaturesVehicle';

const CamperFeatures = ({ camper }) => {
  return (
    <Container className={css.features_wrapper}>
      <FeaturesBadges camper={camper} />
      <FeaturesVehicle camper={camper} />
    </Container>
  );
};

export default CamperFeatures;
