import { Statuses } from "../../constants/statuses";
export const selectStateTest = (state) => state;
export const selectBookModule = (state) => state.book;

export const selectBook = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBooksByGenreId = (genreId) => (state) =>
  selectBook(state).filter((book) => book.genreId === genreId);

export const selectBookById = (bookId) => (state) =>
  selectBookModule(state).entities[bookId];

export const selectIsBookLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;
