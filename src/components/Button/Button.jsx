import css from './Button.module.css';

const Button = ({ children, typeBtn, ariaLabel }) => {
  return (
    <>
      <button type={typeBtn} className={css.hero_btn} aria-label={ariaLabel}>
        {children}
      </button>
    </>
  );
};

export default Button;
