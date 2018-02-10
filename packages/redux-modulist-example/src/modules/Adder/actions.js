import Modulist from "redux-modulist";

const types = ["ADD_ITEM"];

const actions = types => ({
  addItem: payload => ({ type: types.ADD_ITEM, payload })
});

export default Modulist.actions(types, actions);
