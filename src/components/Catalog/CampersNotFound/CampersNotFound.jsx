import Container from '../../Container/Container';
import css from './CampersNotFound.module.css';

const CampersNotFound = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers Not Found🙅🏽‍♂️</h1>
      </div>
    </Container>
  );
};

export default CampersNotFound;
