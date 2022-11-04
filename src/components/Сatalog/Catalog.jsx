import React, { useEffect } from "react";
import { Book } from "../Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { loadBookNotExist } from "../../store/book/loadBookNotExist";
import { selectBook, selectIsBookLoading } from "../../store/book/selectors";
import { selectGenreBookIds } from "../../store/genre/selectors";

export const Catalog = ({ genreId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBookNotExist(genreId));
  }, [genreId]);

  const bookIds = useSelector((state) => selectGenreBookIds(state, genreId));
  const isLoading = useSelector((state) => selectIsBookLoading(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!bookIds) {
    return null;
  }
  return (
    <>
      {bookIds.map((id) => (
        <Book key={id} bookIds={id} />
      ))}
    </>
  );
};
