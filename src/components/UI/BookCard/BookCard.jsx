import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";
import { Rating } from "./Rating";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBookById } from "../../../store/book/selectors";

export const BookCard = ({ book, link }) => {
  return (
    <div className={classnames(styles.card)}>
      {link ? (
        <Link to={"/book/" + encodeURIComponent(book.id)}>
          <h2 className={styles.card__title}>{book.name}</h2>
        </Link>
      ) : (
        <h2 className={styles.card__title}>{book.name}</h2>
      )}
      <h4 className={classnames(styles.card__subtitle)}>{book.author}</h4>
      <h4 className={classnames(styles.card__subtitle)}>{book.genre}</h4>
      <div>{Rating(book.rating)}</div>
      <h3 className={classnames(styles.card__price)}>{book.price} &#8381;</h3>
    </div>
  );
};
