import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import searchReducer from "./reducers";
import { watchSearchItems } from "./sagas";

const rootReducer = combineReducers({
  search: searchReducer,
});

function* rootSaga() {
  yield all([watchSearchItems()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
