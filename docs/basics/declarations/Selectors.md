
# Selector Declaration

### Without Modulist

We would normally declare a selector like below:

```js
import { createSelector } from "reselect";

const selectors = {
  list: createSelector(state => state, state => state.list)
};

export default selectors;
```

### With Modulist

With Modulist, when wrapping the export with `Modulist.selectors`, we have access to a function `moduleState` which will return the state local to the module when called with the state.


```js
import { createSelector } from "reselect";
import Modulist from "redux-modulist";

const selectors = moduleState => ({
  list: createSelector(state => moduleState(state), state => state.list)
});

export default Modulist.selectors(selectors);
```
