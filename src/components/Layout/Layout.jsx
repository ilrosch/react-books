import {Header} from "../Header/Header";
import {Genre} from "../Genre/Genre";
import classnames from "classnames";
import styles from "./styles.module.css"
import {Catalog} from "../Сatalog/Catalog";
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {books} from "../../constants/mock";
import {BooksPage} from "../../pages/BooksPage/BooksPage";
import {AnnotationBookPage} from "../../pages/AnnotationBookPage/AnnotationBookPage";


export const Layout = () => {
    return <div className={classnames(styles.layout)}>
        <Header/>
        <div className={classnames(styles.container)}>
            <BooksPage books = {books} />
            {/*<AnnotationBookPage books = {books}/>*/}
        </div>
    </div>
}
