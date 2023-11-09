export const SEARCH_ITEMS_REQUEST = "SEARCH_ITEMS_REQUEST";
export const SEARCH_ITEMS_SUCCESS = "SEARCH_ITEMS_SUCCESS";
export const LOAD_PRODUCT_DETAILS_REQUEST = "LOAD_PRODUCT_DETAILS_REQUEST";
export const LOAD_PRODUCT_DETAILS_SUCCESS = "LOAD_PRODUCT_DETAILS_SUCCESS";
export const CLEAR_STORE = "CLEAR_STORE";
export const SET_LOADING = "SET_LOADING";

export const searchItemsRequest = (query) => ({
  type: SEARCH_ITEMS_REQUEST,
  payload: query,
});

export const searchItemsSuccess = (data) => ({
  type: SEARCH_ITEMS_SUCCESS,
  payload: data,
});

export const loadProductDetailsRequest = (id) => ({
  type: LOAD_PRODUCT_DETAILS_REQUEST,
  payload: id,
});

export const loadProductDetailsSuccess = (productDetails) => ({
  type: LOAD_PRODUCT_DETAILS_SUCCESS,
  payload: productDetails,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const clearStore = () => ({
  type: CLEAR_STORE,
});
