import { Header } from "../Header/Header";
import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";

import { AnnotationBookPage } from "../../pages/AnnotationBookPage/AnnotationBookPage";
import { BooksPage } from "../../pages/BooksPage/BooksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

export const Layout = () => {
  return (
    <div className={classnames(styles.layout)}>
      <Header />
      <div className={classnames(styles.container)}>
        <Routes>
          <Route index element={<BooksPage />} />
          {/*<Route path="/book" element={<AnnotationBookPage />} />*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
