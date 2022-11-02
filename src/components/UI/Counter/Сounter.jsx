import classnames from "classnames";
import styles from "./styles.module.css";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={classnames(styles.counter)}>
      <button
        className={classnames(styles.counter__button)}
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        —
      </button>
      <p className={classnames(styles.counter__count)}>{count}</p>
      <button
        className={classnames(styles.counter__button_plus)}
        onClick={() => setCount(count + 1)}
        disabled={count === 25}
      >
        ╋
      </button>
    </div>
  );
};
