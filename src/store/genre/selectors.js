export const selectGenreModule = (state) => state.genre;
export const selectGenre = (state) =>
  Object.values(selectGenreModule(state).entities);

export const selectGenreBookIds = (state, genreId) =>
  selectGenreModule(state).entities[genreId];
