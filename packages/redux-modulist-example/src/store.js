import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "./rootReducer";

export const history = createHistory();

const middleware = {
  router: routerMiddleware(history)
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware.router)
);

export default store;
