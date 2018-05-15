import { deepFindModule } from "../../utils";

const wrapper = selectors => moduleInstance => selectors(state => deepFindModule(state, moduleInstance));

export default wrapper;
