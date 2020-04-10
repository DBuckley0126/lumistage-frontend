import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  let store = {};

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )(createStore);

  store = createStoreWithMiddleware(rootReducer, initialState);

  // sagaMiddleware.run(useAuth0Watchers);

  return store;
}

const store = configureStore();

export default store;
