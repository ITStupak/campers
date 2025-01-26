import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.classList.add('overflow_hidden');
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('overflow_hidden');
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal_window} onClick={e => e.stopPropagation()}>
        <img className={css.modal_image} src={image} alt="Large view" />
        <button className={css.modal_close_btn} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
