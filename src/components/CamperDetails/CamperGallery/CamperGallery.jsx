import css from './CamperGallery.module.css';
import Container from '../../Container/Container';

const CamperGallery = ({ camper }) => {
  const photos = camper.gallery;
  // console.log(photos);

  return (
    <Container className={css.camper_gallery_wrapper}>
      <ul className={css.gallery_list}>
        {photos.map(photo => (
          <li key={photo.thumb} className={css.gallery_item}>
            <img
              src={photo.thumb}
              alt={`Image of ${camper.name}`}
              className={css.gallery_img}
            />
          </li>
        ))}
      </ul>
      <p className={css.gallery_dscr}>{camper.description}</p>
    </Container>
  );
};

export default CamperGallery;
