import React from 'react';
import ReactDOM from 'react-dom/client';
import classnames from "classnames";
import styles from "./styles.module.css";
export const Header = () => {
  return <header className={classnames(styles.header)}>
    <div className={classnames(styles.container)}>
      <h2 className={classnames(styles.header__logo)}>Магазин</h2>
    </div>
  </header>
}