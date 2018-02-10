
# Action Declaration

### Without Modulist

You would normally define component actions like below:
```js
const types = ["ADD_ITEM"];

const actions = {
  addItem: payload => ({ type: types.ADD_ITEM, payload })
};

export default actions;
```

### With Modulist

Will Modulist, you convert the action declaration to a function with a `types` argument, and use the provided `wrapper`(more on them later) `Modulist.actions` when exporting the actions.

The exported actions are then automatically scoped to the module instance, and you can have multiple instances of this module, each with their own actions.

They can then be referenced using `MyModule.actions.addItem` and the module-scoped action types are accessible under `MyModule.actions.types`.

```js
import Modulist from "redux-modulist";

const types = ["ADD_ITEM"];

const actions = types => ({
  addItem: payload => ({ type: types.ADD_ITEM, payload })
});

export default Modulist.actions(types, actions);
```
Notice that the actions are defined as a function of `types`, which the Module will pass to it and then correcty scoped actions can be defined.
