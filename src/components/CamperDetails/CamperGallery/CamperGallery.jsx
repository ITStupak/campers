import css from './CamperGallery.module.css';
import Container from '../../Container/Container';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import Loader from '../../Loader';

const CamperGallery = ({ camper }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const photos = camper.gallery;

  if (!camper) {
    return <Loader />;
  }

  return (
    <Container className={css.camper_gallery_wrapper}>
      <ul className={css.gallery_list}>
        {photos.map(photo => (
          <li key={photo.thumb} className={css.gallery_item}>
            <img
              src={photo.thumb}
              alt={`Image of ${camper.name}`}
              className={css.gallery_img}
              onClick={() => setSelectedImage(photo.original)}
            />
          </li>
        ))}
        {selectedImage && (
          <Modal
            isOpen={() => setSelectedImage(true)}
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </ul>
      <p className={css.gallery_dscr}>{camper.description}</p>
    </Container>
  );
};

export default CamperGallery;
