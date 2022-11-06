import classnames from "classnames";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../../store/cart";
import { selectBookCount } from "../../../store/cart/selectors";

export const Counter = ({ bookId }) => {
  console.log(bookId);
  const dispatch = useDispatch();
  const count = useSelector((state) => selectBookCount(state, bookId));
  return (
    <div className={classnames(styles.counter)}>
      <button
        className={classnames(styles.counter__button)}
        onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
        disabled={count === 0}
      >
        —
      </button>
      <p className={classnames(styles.counter__count)}>{count || 0}</p>
      <button
        className={classnames(styles.counter__button_plus)}
        onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
        disabled={count === 25}
      >
        ╋
      </button>
    </div>
  );
};
