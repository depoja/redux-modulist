
# Lingo
- _feature_ - building blocks of a module, like `actions`, `reducers`, `selectors` and `views`. Modulist supports these four by default.

# Module Basics
A module is a container for component logic.
It will encapsulate everything related to the module in an instance and references to other Modules are achieved by dependency injection.

### Importing
To declare a module, we need to first import the Modulist helper function.
At the moment everything you will need is exported as a single function object called Modulist.

```js
import Modulist from "redux-modulist";
```

### Declaring a module
The module is then declared as a function, accepting other modules as dependencies and returning a `Modulist` function call.

```js
import Modulist from "redux-modulist";

const MyModule = (/*Dependencies*/) => Modulist(config, /*optional: customFeatures*/);

export default MyModule;
```

### The Modulist Function
The `Modulist` function expects two arguments, the first argument is the _module configuration object_ (`config`) and the second is an array of _custom features_ (`customFeatures`) which we will get to later.


### Configuration object
The `config` object looks like below:

```js
{
  name: "MyModule",
  {feature}: {
    module: {someFeatureFunction},
    {depencency}: {someDependencyFeatureFunction}
  }
}
```

The `name` is the Module's name. We can then specify a `feature` by adding a key with the feature name.
> Note: Only `actions`, `reducers`, `selectors` and `views` are supported as keys by the Modulist function by default. Adding support for other features however, is as easy as writing a single line of code and also very powerful. We will explore this in a later example.

Ex. we can add `actions` to a module like below:

```js
import Modulist from "redux-modulist";
import myActions from "./actions";

const MyModule = () => Modulist({
  name: "MyModule",
  actions: {
    module: myActions
  }
});

export default MyModule;
```