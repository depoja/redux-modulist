import { createSelector } from "reselect";
import Modulist from "redux-modulist-core";

const selectors = moduleState => {
  const getState = state => moduleState(state);
  const list = createSelector(getState, state => state.list);

  return { list };
};

export default Modulist.selectors(selectors);
