import classnames from "classnames";
import styles from "./styles.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectGenre } from "../../store/genre/selectors";
import { Link } from "react-router-dom";

export const Genre = ({ activeGenreId }) => {
  const genres = useSelector(selectGenre);
  return (
    <>
      <ul className={classnames(styles.list)}>
        {genres.length > 0 &&
          genres.map((genre) => (
            <Link
              to={"/" + encodeURIComponent(genre.id)}
              className={classnames(
                styles.list__item,
                activeGenreId === genre.id ? styles.activeItem : ""
              )}
              key={genre.id}
            >
              {genre.tag}
            </Link>
          ))}
      </ul>
    </>
  );
};
