import { Layout } from "./components/Layout/Layout";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage/BooksPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { AnnotationBookPage } from "./pages/AnnotationBookPage/AnnotationBookPage";
import { CartPage } from "./pages/CartPage/CartPage";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<BooksPage />} />
            <Route path="/:genreId" element={<BooksPage />} />
            <Route path="/book/:bookId" element={<AnnotationBookPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
