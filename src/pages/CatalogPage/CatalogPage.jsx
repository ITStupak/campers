import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import css from './CatalogPage.module.css';
// import CamperFilters from '../../components/Catalog/CamperFilters/CamperFilters';
// import Catalog from '../../components/Catalog/Catalog';

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Catalog</title>
      </Helmet>
      <section className={css.section_catalog}>
        <Container>
          <div className={css.wrapper}>
            {/* <CamperFilters /> */}
            {/* {<Catalog />} */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CatalogPage;
