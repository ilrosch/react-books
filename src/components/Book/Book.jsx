import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../UI/Counter/Сounter";
import { BookCard } from "../UI/BookCard/BookCard";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
export const Book = ({ bookIds }) => {
  const book = useSelector((state) => selectBookById(state, bookIds));

  if (!book) {
    return null;
  }
  return (
    <div className={classnames(styles.card)}>
      <BookCard book={book} />
      <Counter bookId={book.id} />
    </div>
  );
};
