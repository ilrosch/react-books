import { Header } from "../Header/Header";
import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";
import { books } from "../../constants/mock";
import { AnnotationBookPage } from "../../pages/AnnotationBookPage/AnnotationBookPage";
import { BooksPage } from "../../pages/BooksPage/BooksPage";

export const Layout = () => {
  return (
    <div className={classnames(styles.layout)}>
      <Header />
      <div className={classnames(styles.container)}>
        <BooksPage books={books} />
        {/*<AnnotationBookPage books={books} />*/}
      </div>
    </div>
  );
};
