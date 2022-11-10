import { Header } from "../Header/Header";
import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={classnames(styles.container)}>{children}</div>
    </>
  );
}
