import { Field, Form, Formik } from 'formik';
import Button from '../../Button/Button';
import Container from '../../Container/Container';
import css from './CamperForm.module.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CamperForm = () => {
  return (
    <Container className={css.form_container}>
      <div className={css.form_text_wrapper}>
        <h3 className={css.form_title}>Book your campervan now</h3>
        <p className={css.form_text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik>
        <Form className={css.form_wrap}>
          <div className={css.inputs_wrap}>
            <Field
              className={css.form_input}
              type="text"
              name="name"
              placeholder="Name*"
              autocomplete="off"
            ></Field>
            <Field
              className={css.form_input}
              type="email"
              name="email"
              placeholder="Email*"
              autocomplete="off"
            ></Field>
            <DatePicker
              className={css.form_input}
              //   selected={values.date}
              //   onChange={date => setFieldValue('date', date)}
              placeholderText="Booking date*"
              dateFormat="yyyy-MM-dd"
            />
            {/* 
            <Field
              className={css.form_input}
              type="date"
              name="date"
              placeholder="Booking date*"
              autocomplete="off"
            ></Field> */}
            <Field
              className={css.form_input_text_aria}
              as="textarea"
              name="comment"
              placeholder="Comment"
            ></Field>
          </div>
          <Button
            typeBtn="submit"
            ariaLabel="Submit a booking request"
            className={css.send_btn}
          >
            Send
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CamperForm;
