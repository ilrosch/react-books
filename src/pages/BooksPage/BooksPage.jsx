import React, { useEffect } from "react";
import { Catalog } from "../../components/Сatalog/Catalog";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../../store/genre/selectors";
import { loadGenreNotExist } from "../../store/genre/loadGenreNotExist";
import { Genre } from "../../components/Genre/Genre";
import { useParams } from "react-router-dom";
import { selectStateTest } from "../../store/book/selectors";

export const BooksPage = () => {
  console.log(useSelector(selectStateTest));
  const { genreId } = useParams();
  const genre = useSelector((state) => selectGenre(state));
  const dispatch = useDispatch();
  const activeGenreId = genreId || genre[0]?.id || "";

  useEffect(() => {
    dispatch(loadGenreNotExist);
  }, [dispatch]);

  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__col)}>
        <Genre activeGenreId={activeGenreId} />
      </div>
      <div className={classnames(styles.block__col)}>
        <Catalog genreId={activeGenreId} />
      </div>
    </div>
  );
};
