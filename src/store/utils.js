export const prepareData = (items) => {
  return {
    entities: items.reduce((acc, i) => {
      acc[i.id] = i;
      return acc;
    }, {}),
    ids: items.map(({ id }) => id),
  };
};
