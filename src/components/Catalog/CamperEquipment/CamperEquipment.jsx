import sprite from '../../../assets/icons/sprite.svg';
import css from './CamperEquipment.module.css';

const CamperEquipment = ({ camper }) => {
  return (
    <div className={css.camper_equipment_wrap}>
      <ul className={css.camper_equipment}>
        {camper.transmission && (
          <li
            className={css.camper_equipment_item}
            aria-label={`Transmission: ${camper.transmission}`}
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use
                xlinkHref={`${sprite}#transmission`}
                href={`${sprite}#transmission`}
              />
            </svg>
            {camper.transmission}
          </li>
        )}
        {camper.engine && (
          <li
            className={css.camper_equipment_item}
            aria-label={`Engine ${camper.engine}`}
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#engine`} href={`${sprite}#engine`} />
            </svg>
            {camper.engine}
          </li>
        )}
        {camper.AC && (
          <li
            className={css.camper_equipment_item}
            aria-label="Air conditioning available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#ac`} href={`${sprite}#ac`} />
            </svg>
            AC
          </li>
        )}
        {camper.kitchen && (
          <li
            className={css.camper_equipment_item}
            aria-label="Kitchen available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#kitchen`} href={`${sprite}#kitchen`} />
            </svg>
            Kitchen
          </li>
        )}
        {camper.TV && (
          <li className={css.camper_equipment_item} aria-label="TV available">
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#tv`} href={`${sprite}#tv`} />
            </svg>
            TV
          </li>
        )}
        {camper.bathroom && (
          <li
            className={css.camper_equipment_item}
            aria-label="Bathroom available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use
                xlinkHref={`${sprite}#bathroom`}
                href={`${sprite}#bathroom`}
              />
            </svg>
            Bathroom
          </li>
        )}

        {camper.radio && (
          <li
            className={css.camper_equipment_item}
            aria-label="Radio available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#radio`} href={`${sprite}#radio`} />
            </svg>
            Radio
          </li>
        )}
        {camper.adults && (
          <li
            className={css.camper_equipment_item}
            aria-label="2 adults available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#adults`} href={`${sprite}#adults`} />
            </svg>
            2 adults
          </li>
        )}
        {camper.refrigerator && (
          <li
            className={css.camper_equipment_item}
            aria-label="Refrigerator available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use
                xlinkHref={`${sprite}#refrigerator`}
                href={`${sprite}#refrigerator`}
              />
            </svg>
            Refrigerator
          </li>
        )}
        {camper.microwave && (
          <li
            className={css.camper_equipment_item}
            aria-label="Microwave available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use
                xlinkHref={`${sprite}#microwave`}
                href={`${sprite}#microwave`}
              />
            </svg>
            Microwave
          </li>
        )}
        {camper.gas && (
          <li className={css.camper_equipment_item} aria-label="Gas available">
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#gas`} href={`${sprite}#gas`} />
            </svg>
            Gas
          </li>
        )}
        {camper.water && (
          <li
            className={css.camper_equipment_item}
            aria-label="Water available"
          >
            <svg width={20} height={20} className={css.camper_equipment_icon}>
              <use xlinkHref={`${sprite}#water`} href={`${sprite}#water`} />
            </svg>
            Water
          </li>
        )}
      </ul>
    </div>
  );
};

export default CamperEquipment;
