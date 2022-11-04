import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";
import { Rating } from "./Rating";
import { Link, NavLink } from "react-router-dom";

export const BookCard = ({ book }) => {
  return (
    <div className={classnames(styles.card)}>
      <NavLink className={book}>
        <h3 className={classnames(styles.card__title)}>{book.name}</h3>
      </NavLink>

      <h4 className={classnames(styles.card__subtitle)}>{book.author}</h4>
      <h4 className={classnames(styles.card__subtitle)}>{book.genre}</h4>
      <div>{Rating(book.rating)}</div>
      <h3 className={classnames(styles.card__price)}>{book.price} &#8381;</h3>
    </div>
  );
};
