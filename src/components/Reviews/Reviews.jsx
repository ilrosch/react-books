import { Review } from "../Review/Review";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Reviews = ({ book }) => {
  console.log(book);
  return (
    <div>
      {book == false && (
        <h3 className={classnames(styles.header)}>
          Здесь пока нет отзывов. Будьте первыми!
        </h3>
      )}
      {book.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
