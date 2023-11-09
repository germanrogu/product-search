import { call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_ITEMS_REQUEST, setSearchResults } from "./actions";
import { searchItems } from "../services/SearchItems";

function* searchItemsSaga(action) {
  try {
    const data = yield call(searchItems, action.payload);
    const limitedResults = data.items.slice(0, 4);
    yield put(setSearchResults(limitedResults));
  } catch (error) {
    // Manejo de errores
  }
}

export function* watchSearchItems() {
  yield takeLatest(SEARCH_ITEMS_REQUEST, searchItemsSaga);
}
