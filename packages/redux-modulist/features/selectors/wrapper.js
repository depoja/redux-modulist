import { deepFindKey } from "_lib/utils";

const wrapper = selectors => moduleInstance => selectors(state => deepFindKey(state, moduleInstance));

export default wrapper;
