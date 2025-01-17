import Container from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <section className={css.not_found_page}>
        <h1 className={css.not_found_title}>Oops! Page Not Found</h1>
        <p className={css.not_found_text}>
          Looks like this page is not available.
        </p>
        <p className={css.not_found_text}>Let’s get you back on track!</p>
        <Link to="/" className={css.not_found_link}>
          ⬅️ Go Home
        </Link>
      </section>
    </Container>
  );
};

export default NotFoundPage;
