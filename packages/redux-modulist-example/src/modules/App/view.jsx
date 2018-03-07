import React from "react";
import Modulist from "redux-modulist";

const App = ({ Module }) => <Module.view.todos />;

export default Modulist.view(App);
