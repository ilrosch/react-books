import React, { useEffect, useState } from "react";
import { Catalog } from "../../components/Сatalog/Catalog";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../../store/genre/selectors";
import { loadGenreNotExist } from "../../store/genre/loadGenreNotExist";
export const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => selectGenre(state));
  const [activeGenre, setActiveGenre] = useState(books[0]);

  useEffect(() => {
    dispatch(loadGenreNotExist);
  }, []);

  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__col)}>
        <ul className={classnames(styles.block__list)}>
          {books.length > 0 &&
            books.map((genre) => (
              <li
                className={classnames(styles.block__item, {
                  [styles.activeItem]: activeGenre?.id === genre.id,
                })}
                key={genre.id}
                onClick={() => setActiveGenre(genre)}
              >
                {genre.tag}
              </li>
            ))}
        </ul>
      </div>
      <div className={classnames(styles.block__col)}>
        {activeGenre && <Catalog genreId={activeGenre.id} />}
      </div>
    </div>
  );
};
