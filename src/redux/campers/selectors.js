
export const selectAllCampers = state => state.campers.items;
export const selectTotalCampers = state => state.campers.total;
export const selectLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;