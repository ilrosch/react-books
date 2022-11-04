import { genreSlice } from "./index";
import { prepareData } from "../utils";
import { selectGenre } from "./selectors";

export const loadGenreNotExist = (dispatch, getState) => {
  if (selectGenre(getState())?.length > 0) {
    return;
  }

  dispatch(genreSlice.actions.startLoading());
  fetch("http://localhost:3001/api/genre")
    .then((response) => response.json())
    .then((genre) => {
      dispatch(genreSlice.actions.successLoading(prepareData(genre)));
    })
    .catch(() => {
      dispatch(genreSlice.actions.failLoading());
    });
};
