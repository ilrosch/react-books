import { Annotation } from "../../components/Annotation/Annotation";
import { Reviews } from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../../components/UI/Counter/Сounter";
import { BookCard } from "../../components/UI/BookCard/BookCard";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { useEffect } from "react";
import { loadBookNotExist } from "../../store/book/loadBookNotExist";

export const AnnotationBookPage = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const book = useSelector(selectBookById(bookId));

  useEffect(() => {
    dispatch(loadBookNotExist(bookId));
  }, [bookId]);

  return (
    <>
      {book !== undefined && (
        <div>
          <div className={classnames(styles.block)}>
            <div className={classnames(styles.card)}>
              <BookCard book={book} />
              <div className={classnames(styles.card__block)}>
                <Counter bookId={bookId} />
              </div>
            </div>
            <Annotation book={book} />
          </div>
          <Reviews book={book.reviews} />
        </div>
      )}
      <h2>Ждем загрузки..</h2>
    </>
  );
};
