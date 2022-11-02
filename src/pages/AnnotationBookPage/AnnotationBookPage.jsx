import { Annotation } from "../../components/Annotation/Annotation";
import { Reviews } from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../../components/UI/Counter/Сounter";
import { BookCard } from "../../components/UI/BookCard/BookCard";

export const AnnotationBookPage = ({ books }) => {
  return (
    <>
      <div className={classnames(styles.block)}>
        <div className={classnames(styles.card)}>
          <BookCard book={books[0].book[0]} />
          <div className={classnames(styles.card__block)}>
            <Counter />
          </div>
        </div>
        <Annotation book={books[0]} />
      </div>
      <Reviews book={books[0].book[0].reviews} />
    </>
  );
};
