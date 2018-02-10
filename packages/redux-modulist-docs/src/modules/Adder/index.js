import Modulist from "redux-modulist";

import actions from "./actions";
import view from "./view";

const Adder = () =>
  Modulist({
    name: "adder",
    actions: {
      module: actions
    },
    views: {
      module: view
    }
  });

export default Adder;
