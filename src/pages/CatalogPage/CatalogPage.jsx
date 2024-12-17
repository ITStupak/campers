import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Catalog</title>
      </Helmet>
      <section className={css.section_catalog}>
        <Container>
          <div className={css.wrapper}>Catalog Page in progress...</div>
        </Container>
      </section>
    </>
  );
};

export default CatalogPage;
