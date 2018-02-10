# Reducer Declaration

### Without Modulist

We would normally declare a reducer like below:

```js
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state;
    default:
      return state;
  }
};

export default reducer;
```

### With Modulist

With Modulist, we wrap the reducer with `Modulist.reducer` when exporting and the module object is passed as the third argument.

We can then use the Module object to access scoped action types.

```js
import Modulist from "redux-modulist";

const reducer = (state = [], action, Module) => {
  switch (action.type) {
    case Module.actions.types.ADD_ITEM: // "MyModule_12Sd1/ADD_ITEM"
      return state;
    default:
      return state;
  }
};

export default Modulist.reducer(reducer);

```
