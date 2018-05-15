import Modulist from "redux-modulist-core";

const types = ["REMOVE_TODO"];

const actions = types => ({
  removeTodo: payload => ({ type: types.REMOVE_TODO, payload })
});

export default Modulist.actions(types, actions);
