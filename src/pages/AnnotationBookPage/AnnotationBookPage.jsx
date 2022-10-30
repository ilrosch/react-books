import {Annotation} from "../../components/Annotation/Annotation";
import {Book} from "../../components/Book/Book";
import {Reviews} from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css"
import {BookActive} from "../../components/BookActive/BookActive";

export const AnnotationBookPage = ({books}) => {
  return <>
    <div className={classnames(styles.block)}>
      <BookActive book = {books[0].book[0]} />
      <Annotation book = {books[0]}/>
    </div>
    <Reviews book = {books[0].book[0].reviews}/>
  </>
}