import classnames from "classnames";
import styles from "./styles.module.css";
import { Rating } from "../UI/BookCard/Rating";

export const Review = ({ review }) => {
  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__row)}>
        <h3>{review.name}</h3>
        <div>{Rating(review.rating)}</div>
      </div>

      <p className={classnames(styles.block__text)}>{review.text}</p>
    </div>
  );
};
