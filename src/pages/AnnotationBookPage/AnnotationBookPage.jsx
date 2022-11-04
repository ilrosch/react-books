import { Annotation } from "../../components/Annotation/Annotation";
import { Reviews } from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../../components/UI/Counter/Сounter";
import { BookCard } from "../../components/UI/BookCard/BookCard";

export const AnnotationBookPage = ({ bookId }) => {
  return (
    <>
      <div className={classnames(styles.block)}>
        <div className={classnames(styles.card)}>
          <BookCard book={bookId} />
          <div className={classnames(styles.card__block)}>
            <Counter />
          </div>
        </div>
        <Annotation book={bookId} />
      </div>
      <Reviews book={bookId.reviews} />
    </>
  );
};
