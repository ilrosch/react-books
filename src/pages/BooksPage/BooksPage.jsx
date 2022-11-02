import React, { useState } from "react";
import { Catalog } from "../../components/Сatalog/Catalog";
import classnames from "classnames";
import styles from "./styles.module.css";
export const BooksPage = (props) => {
  const [activeGenre, setActiveGenre] = useState(props.books[0]);
  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__col)}>
        <ul className={classnames(styles.block__list)}>
          {props.books.map((genre) => (
            <li
              className={classnames(styles.block__item, {
                [styles.activeItem]: activeGenre.id === genre.id,
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
        <Catalog genre={activeGenre.book} />
      </div>
    </div>
  );
};
