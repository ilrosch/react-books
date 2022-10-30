import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {useState} from "react";
import {books} from "../../constants/mock";
export const Book = (props) => {
    const [count, setCount] = useState(0);
  return <div className={classnames(styles.card)}>
        <div className={classnames(styles.card__block)}>
            <h3 className={classnames(styles.card__title)}>{props.book.name}</h3>
            <h4 className={classnames(styles.card__subtitle)}>{props.book.author}</h4>
            <h4 className={classnames(styles.card__subtitle)}>{props.book.genre}</h4>
            <div>{props.book.rating}            </div>
            <h3 className={classnames(styles.card__price)}>{props.book.price} &#8381;</h3>
        </div>
        <div className={classnames(styles.card__block)}>
            <button className={classnames(styles.card__button)} onClick={() => setCount(count - 1)} disabled={count === 0}>—</button>
            <p className={classnames(styles.card__count)}>{count}</p>
            <button className={classnames(styles.card__button_plus)} onClick={() => setCount(count + 1)} disabled={count === 25}>╋</button>
        </div>
  </div>
}