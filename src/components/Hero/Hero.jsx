import Container from '../Container/Container.jsx';
import css from './Hero.module.css';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={css.hero_section}>
      <Container className={css.hero_container}>
        <div className={css.hero_wrapper}>
          <h1 className={css.hero_title}>Campers of your dreams</h1>
          <p className={css.hero_text}>
            You can find everything you want in our catalog
          </p>
          <Link to={'/catalog'}>
            <Button typeBtn="button" ariaLabel="View the campers catalog">
              View Now
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
