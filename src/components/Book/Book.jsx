import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../UI/Counter/Сounter";
import { BookCard } from "../UI/BookCard/BookCard";
export const Book = (props) => {
  return (
    <div className={classnames(styles.card)}>
      <BookCard book={props.book} />
      <Counter />
    </div>
  );
};
