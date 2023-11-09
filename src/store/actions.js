export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SEARCH_ITEMS_REQUEST = "SEARCH_ITEMS_REQUEST";

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const searchItemsRequest = (query) => ({
  type: SEARCH_ITEMS_REQUEST,
  payload: query,
});
