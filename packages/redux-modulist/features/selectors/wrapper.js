import { deepFindModule } from "_lib/utils";

const wrapper = selectors => moduleInstance => selectors(state => deepFindModule(state, moduleInstance));

export default wrapper;
