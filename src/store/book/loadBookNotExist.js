import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectBook } from "./selectors";

export const loadBookNotExist = (bookId) => (dispatch) => {
  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/book/?${bookId}`)
    .then((response) => response.json())
    .then((book) => {
      dispatch(bookSlice.actions.successLoading(prepareData(book)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
