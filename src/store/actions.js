export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SEARCH_ITEMS_REQUEST = "SEARCH_ITEMS_REQUEST";
export const LOAD_PRODUCT_DETAILS_REQUEST = "LOAD_PRODUCT_DETAILS_REQUEST";
export const LOAD_PRODUCT_DETAILS_SUCCESS = "LOAD_PRODUCT_DETAILS_SUCCESS";
export const CLEAR_PRODUCT_DETAILS = "CLEAR_PRODUCT_DETAILS";

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const searchItemsRequest = (query) => ({
  type: SEARCH_ITEMS_REQUEST,
  payload: query,
});

export const clearProductDetails = () => ({
  type: CLEAR_PRODUCT_DETAILS,
});

export const loadProductDetailsRequest = (id) => ({
  type: LOAD_PRODUCT_DETAILS_REQUEST,
  payload: id,
});

export const loadProductDetailsSuccess = (productDetails) => ({
  type: LOAD_PRODUCT_DETAILS_SUCCESS,
  payload: productDetails,
});
