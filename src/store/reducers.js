import {
  CLEAR_STORE,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  SEARCH_ITEMS_SUCCESS,
  SET_LOADING,
} from "./actions";

const initialState = {
  searchResults: [],
  productDetails: null,
  loading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case LOAD_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CLEAR_STORE:
      return {
        ...state,
        searchResults: [],
        productDetails: null,
      };
    default:
      return state;
  }
};

export default searchReducer;
