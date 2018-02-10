import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import { App, App2 } from "./modules";

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  app: App.reducer,
  app2: App2.reducer
});
