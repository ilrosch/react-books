export const selectCartModule = (state) => state.cart;

export const selectFilmCount = (state, bookId) =>
  selectCartModule(state)[bookId];
