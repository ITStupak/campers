import { Helmet } from 'react-helmet-async';
import css from './CatalogPage.module.css';
import CamperFilters from '../../components/Catalog/CamperFilters/CamperFilters';
import Catalog from '../../components/Catalog/Catalog';

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Trucks - Catalog</title>
      </Helmet>
      <div className={css.catalog_page_wrap}>
        <CamperFilters />
        <Catalog />
      </div>
    </>
  );
};

export default CatalogPage;
