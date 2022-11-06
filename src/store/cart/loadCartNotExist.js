import { selectCartBookIds } from "./selectors";
import { loadBookNotExist } from "../book/loadBookNotExist";

export const loadCartIfNotExist = (dispatch, getState) => {
  const items = selectCartBookIds(getState());
  items.forEach((item) => loadBookNotExist(item)(dispatch, getState));
};
