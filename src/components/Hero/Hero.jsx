import Container from '../Container/Container.jsx';
import css from './Hero.module.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={css.hero_section}>
      <Container className={css.hero_container}>
        <h1 className={css.hero_title}>Campers of your dreams</h1>
        <h2 className={css.hero_text}>
          You can find everything you want in our catalog
        </h2>
        <Link
          to={'/catalog'}
          className={css.view_now_link}
          rel="noopener noreferrer"
        >
          View Now
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
