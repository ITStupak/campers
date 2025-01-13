import CamperEquipment from '../../../Catalog/CamperEquipment/CamperEquipment';
import Container from '../../../Container/Container';
import css from './FeaturesBadges.module.css';

const FeaturesBadges = ({ camper }) => {
  return (
    <Container className={css.badges_wrapper}>
      <CamperEquipment camper={camper} />
    </Container>
  );
};

export default FeaturesBadges;
