import css from './Button.module.css';

const Button = ({ children, typeBtn, ariaLabel, className }) => {
  return (
    <>
      <button
        type={typeBtn}
        className={`${className ? className : css.btn}`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
