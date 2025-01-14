import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  return (
    <ul className={css.vehicle_details_list}>
      <li className={css.vehicle_details_item}>
        <p>Form</p>
        {(() => {
          switch (camper.form) {
            case 'panelTruck':
              return 'Panel truck';
            case 'alcove':
              return 'Alcove';
            case 'fullyIntegrated':
              return 'Fully Integrated';
            default:
              return 'Undefined';
          }
        })()}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Length</p>
        {camper.length.replace('m', ' m')}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Width</p>
        {camper.width.replace('m', ' m')}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Height</p>
        {camper.height.replace('m', ' m')}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Tank</p>
        {camper.tank.replace('l', ' l')}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Consumption</p>
        {camper.consumption}
      </li>
    </ul>
  );
};

export default VehicleDetails;
