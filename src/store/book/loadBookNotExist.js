import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectGenre } from "./selectors";

export const loadBookNotExist = (genreId) => (dispatch, getState) => {
  // if (selectGenre(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/book?${genreId}`)
    .then((response) => response.json())
    .then((genre) => {
      dispatch(bookSlice.actions.successLoading(prepareData(genre)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
