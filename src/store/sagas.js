import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_PRODUCT_DETAILS_REQUEST,
  SEARCH_ITEMS_REQUEST,
  loadProductDetailsSuccess,
  setSearchResults,
} from "./actions";
import { getProductDetails, searchItems } from "../services/SearchItems";

function* searchItemsSaga(action) {
  try {
    const data = yield call(searchItems, action.payload);
    const limitedResults = data.items.slice(0, 4);
    yield put(setSearchResults(limitedResults));
  } catch (error) {
    // Manejo de errores
  }
}

function* loadProductDetailsSaga(action) {
  try {
    const id = action.payload;
    const productDetails = yield call(getProductDetails, id);
    yield put(loadProductDetailsSuccess(productDetails));
  } catch (error) {
    // Manejar errores si es necesario
  }
}

export function* watchSearchItems() {
  yield takeLatest(SEARCH_ITEMS_REQUEST, searchItemsSaga);
  yield takeLatest(LOAD_PRODUCT_DETAILS_REQUEST, loadProductDetailsSaga);
}
