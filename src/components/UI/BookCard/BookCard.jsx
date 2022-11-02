import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";
import { Rating } from "./Rating";

export const BookCard = (props) => {
  return (
    <div className={classnames(styles.card)}>
      <h3 className={classnames(styles.card__title)}>{props.book.name}</h3>
      <h4 className={classnames(styles.card__subtitle)}>{props.book.author}</h4>
      <h4 className={classnames(styles.card__subtitle)}>{props.book.genre}</h4>
      <div>{Rating(props.book.rating)}</div>
      <h3 className={classnames(styles.card__price)}>
        {props.book.price} &#8381;
      </h3>
    </div>
  );
};
