import { Field, Form, Formik } from 'formik';
import Container from '../../Container/Container';
import sprite from '../../../assets/icons/sprite.svg';
import css from './CamperFilters.module.css';
import Button from '../../Button/Button';

const CamperFilters = () => {
  return (
    <Formik>
      <Form className={css.filters_wrap}>
        <Container className={css.location_box}>
          <p className={css.location}>Location</p>
          <label className={css.location_label}>
            <Field
              className={css.location_input}
              type="text"
              name="location"
              placeholder="City"
              id="location"
            />
            <svg width={20} height={20} className={css.location_icon}>
              <use
                xlinkHref={`${sprite}#location`}
                href={`${sprite}#location`}
              />
            </svg>
          </label>
        </Container>

        <h2 className={css.filters_title}>Filters</h2>

        <Container className={css.equipments_box}>
          <h3 className={css.equipments}>Vehicle equipment</h3>
          <ul className={css.filters_list}>
            <li className={css.filters_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="checkbox"
                  name="AC"
                  id="AC"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use xlinkHref={`${sprite}#ac`} href={`${sprite}#ac`} />
                </svg>
                <span className={css.icon_dscr}>AC</span>
              </label>
            </li>
            <li className={css.filters_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="checkbox"
                  name="transmission"
                  id="transmission"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use
                    xlinkHref={`${sprite}#transmission`}
                    href={`${sprite}#transmission`}
                  />
                </svg>
                <span className={css.icon_dscr}>Automatic</span>
              </label>
            </li>
            <li className={css.filters_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="checkbox"
                  name="kitchen"
                  id="kitchen"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use
                    xlinkHref={`${sprite}#kitchen`}
                    href={`${sprite}#kitchen`}
                  />
                </svg>
                <span className={css.icon_dscr}>Kitchen</span>
              </label>
            </li>
            <li className={css.filters_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="checkbox"
                  name="tv"
                  id="tv"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use xlinkHref={`${sprite}#tv`} href={`${sprite}#tv`} />
                </svg>
                <span className={css.icon_dscr}>TV</span>
              </label>
            </li>
            <li className={css.filters_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="checkbox"
                  name="bathroom"
                  id="bathroom"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use
                    xlinkHref={`${sprite}#bathroom`}
                    href={`${sprite}#bathroom`}
                  />
                </svg>
                <span className={css.icon_dscr}>Bathroom</span>
              </label>
            </li>
          </ul>
        </Container>

        <Container className={css.types_box}>
          <h3 className={css.types}>Vehicle type</h3>
          <ul className={css.types_list}>
            <li className={css.types_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="radio"
                  name="type"
                  id="van"
                  value="Van"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use xlinkHref={`${sprite}#van`} href={`${sprite}#van`} />
                </svg>
                <span className={css.icon_dscr}>Van</span>
              </label>
            </li>
            <li className={css.types_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="radio"
                  name="type"
                  id="fullyintegrated"
                  value="Fullyintegrated"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use
                    xlinkHref={`${sprite}#fullyintegrated`}
                    href={`${sprite}#fullyintegrated`}
                  />
                </svg>
                <span className={css.icon_dscr}>Fully Integrated</span>
              </label>
            </li>
            <li className={css.types_item}>
              <label className={css.checkbox_label}>
                <Field
                  className={css.checkbox}
                  type="radio"
                  name="type"
                  id="alcove"
                  value="Alcove"
                />
                <svg width={32} height={32} className={css.filters_icon}>
                  <use
                    xlinkHref={`${sprite}#alcove`}
                    href={`${sprite}#alcove`}
                  />
                </svg>
                <span className={css.icon_dscr}>Alcove</span>
              </label>
            </li>
          </ul>
        </Container>

        <Button
          className={css.search_btn}
          typeBtn="submit"
          ariaLabel="Submit filter form"
        >
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default CamperFilters;
