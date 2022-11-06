import React, { useEffect } from "react";
import { Book } from "../Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { loadBookNotExist } from "../../store/book/loadBookNotExist";
import {
  selectBooksByGenreId,
  selectIsBookLoading,
} from "../../store/book/selectors";
import { selectGenreBookIds } from "../../store/genre/selectors";
import { selectCart, selectCartBooks } from "../../store/cart/selectors";
import loading from "./loading.gif";
import classnames from "classnames";
import styles from "../Book/styles.module.css";

export const Catalog = ({ genreId, displayCart }) => {
  const dispatch = useDispatch();
  const selector = displayCart
    ? selectCartBooks
    : selectBooksByGenreId(genreId);
  const books = useSelector(selector);

  useEffect(() => {
    if (!displayCart && genreId) dispatch(loadBookNotExist(genreId));
  }, [genreId, displayCart, dispatch]);

  const isLoading = useSelector((state) => selectIsBookLoading(state));

  if (isLoading) {
    return (
      <img src={loading} alt={loading} className={classnames(styles.loading)} />
    );
  }

  if (!books) {
    return null;
  }

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} link={true} />
      ))}
    </>
  );
};
