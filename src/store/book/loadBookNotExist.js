import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectBookModule } from "./selectors";

export const loadBookNotExist = (bookId) => (dispatch, getState) => {
  if (selectBookModule(getState())?.length > 0) {
    return "Пустой state!";
  }
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
