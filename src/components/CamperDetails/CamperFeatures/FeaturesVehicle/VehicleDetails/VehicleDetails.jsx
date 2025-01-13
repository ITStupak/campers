import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  return (
    <ul className={css.vehicle_details_list}>
      <li className={css.vehicle_details_item}>
        <p>Form</p>
        {camper.form === 'panelTruck' ? 'Panel truck' : camper.form}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Length</p>
        {`${camper.length.slice(0, -1)}` +
          ' ' +
          `${camper.length.slice(-1)}`}{' '}
        {/* явно надо проще:))) */}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Width</p>
        {camper.width}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Height</p>
        {camper.height}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Tank</p>
        {camper.tank}
      </li>
      <li className={css.vehicle_details_item}>
        <p>Consumption</p>
        {camper.consumption}
      </li>
    </ul>
  );
};

export default VehicleDetails;
