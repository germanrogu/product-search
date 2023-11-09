import {
  CLEAR_PRODUCT_DETAILS,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  SET_SEARCH_RESULTS,
} from "./actions";

const initialState = {
  searchResults: [],
  productDetails: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case LOAD_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
      };
    case CLEAR_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: null,
      };
    default:
      return state;
  }
};

export default searchReducer;
