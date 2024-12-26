import Container from '../../Container/Container';
import css from './CamperReviews.module.css';
import sprite from '../../../assets/icons/sprite.svg';

const maxStars = 5;

const CamperReviews = ({ camper }) => {
  return (
    <Container className={css.reviews_wrapper}>
      {
        <ul className={css.reviewList}>
          {camper.reviews.map((item, index) => (
            <li className={css.review_item} key={index + item.reviewer_name}>
              <div className={css.review_header}>
                <h2 className={css.review_title}>{item.reviewer_name[0]}</h2>
                <div className={css.review_header_content}>
                  <p className={css.review_name}>{item.reviewer_name}</p>
                  <div>
                    {Array.from({ length: maxStars }, (_, index) => (
                      <span key={index}>
                        <svg
                          className={
                            index < item.reviewer_rating
                              ? 'star_filled'
                              : 'star_empty'
                          }
                          width={16}
                          height={16}
                          role="button"
                        >
                          <use
                            xlinkHref={`${sprite}#rating`}
                            href={`${sprite}#rating`}
                          />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.review_comment}>{item.comment}</p>
            </li>
          ))}
        </ul>
      }
    </Container>
  );
};

export default CamperReviews;
