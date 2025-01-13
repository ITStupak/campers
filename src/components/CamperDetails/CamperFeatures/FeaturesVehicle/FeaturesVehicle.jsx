import Container from '../../../Container/Container';
import css from './FeaturesVehicle.module.css';
import VehicleDetails from './VehicleDetails/VehicleDetails';

const FeaturesVehicle = ({ camper }) => {
  return (
    <Container className={css.vehicle_wrapper}>
      <h3 className={css.vehicle_title}>Vehicle details</h3>
      <div className={css.vehicle_line}></div>
      <VehicleDetails camper={camper} />
    </Container>
  );
};

export default FeaturesVehicle;
