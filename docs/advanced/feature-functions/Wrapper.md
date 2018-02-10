# Wrapper
The feature declaration is then passed to a _wrapper function_.

For custom features like `list`, the default or a provided custom wrapper will be applied automatically.

Only the wrapper functions for `actions`, `reducers`, `selectors` and `views` are explicitly required to be called with the feature declaration when exporting the features. _This is mainly for visual feedback, so you can clearly see if the feature declaration is being passed to a wrapper and exported and may be subject to change in the future_.

The wrappers provided by default with Modulist are `Modulist.actions`, `Modulist.reducer`, `Modulist.selectors`, `Modulist.view`;
> Notice that some of the default wrappers are in singular and some in plural. They're named like this to match the feature declarations, as view and reducer are often declared in singular.

```js
import { Modulist } from "redux-modulist";

const actions = module => { /* custom logic */ };

export Modulist.actions(actions);

```

The wrapper returns a new function accepting a `module` argument and declares how the feature declaration function will be called, applying necessary transformations (it's a simple higher-order function).

This is helpful for cases when we don't want to just pass the module to the feature function, but something else (ex. a calculated value) since this is usually custom logic that you don't want to handle inside the feature function.

The default wrapper will be enough for most cases and is automatically applied for custom features if a custom wrapper is not specified.
```js
const defaultWrapper = feature => module => feature(module);
```
