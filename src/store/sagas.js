import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_PRODUCT_DETAILS_REQUEST,
  SEARCH_ITEMS_REQUEST,
  loadProductDetailsSuccess,
  searchItemsSuccess,
  setLoading,
} from "./actions";
import { getProductDetails, searchItems } from "../services/SearchItems";

function* searchItemsSaga(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(searchItems, action.payload);
    const limitedResults = data.items.slice(0, 4);
    yield put(searchItemsSuccess(limitedResults));
  } catch (error) {
    // Manejo de errores
  } finally {
    yield put(setLoading(false));
  }
}

function* loadProductDetailsSaga(action) {
  try {
    const id = action.payload;
    yield put(setLoading(true));
    const productDetails = yield call(getProductDetails, id);
    yield put(loadProductDetailsSuccess(productDetails));
  } catch (error) {
    // Manejar errores si es necesario
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchSearchItems() {
  yield takeLatest(SEARCH_ITEMS_REQUEST, searchItemsSaga);
  yield takeLatest(LOAD_PRODUCT_DETAILS_REQUEST, loadProductDetailsSaga);
}
