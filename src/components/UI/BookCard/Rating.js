import { createContext } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
export const Rating = (rating) => {
  rating = Number(rating);
  if (rating == 5) {
    return (
      <span className={classnames(styles.star)}>
        &#9733; &#9733; &#9733; &#9733; &#9733;
      </span>
    );
  } else if (rating == 4) {
    return (
      <span className={classnames(styles.star)}>
        &#9733; &#9733; &#9733; &#9733; &#9734;
      </span>
    );
  } else if (rating == 3) {
    return (
      <span className={classnames(styles.star)}>
        &#9733; &#9733; &#9733; &#9734; &#9734;
      </span>
    );
  } else if (rating == 2) {
    return (
      <span className={classnames(styles.star)}>
        &#9733; &#9733; &#9734; &#9734; &#9734;
      </span>
    );
  } else if (rating == 1) {
    return (
      <span className={classnames(styles.star)}>
        &#9733; &#9734; &#9734; &#9734; &#9734;
      </span>
    );
  } else if (rating == 0) {
    return (
      <span className={classnames(styles.star)}>
        &#9734; &#9734; &#9734; &#9734; &#9734;
      </span>
    );
  } else {
    return;
  }
};
