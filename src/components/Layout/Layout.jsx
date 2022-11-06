import { Header } from "../Header/Header";
import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";

import { AnnotationBookPage } from "../../pages/AnnotationBookPage/AnnotationBookPage";
import { BooksPage } from "../../pages/BooksPage/BooksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={classnames(styles.container)}>{children}</div>
    </>
  );
}
