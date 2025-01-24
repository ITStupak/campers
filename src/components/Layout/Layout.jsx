import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
