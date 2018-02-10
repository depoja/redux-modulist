
# Binder
The binder function is another _higher-order function_ responsible for passing the module instance object to the wrapper which will then call the feature declaration function with it.

It has two arguments, the `wrapper` function above and the `module` (module instance object);

Here the magic takes place, as the binder will return a structure of the feature with the Module instance injected, which can then be passed to the combiner function.

Put in simpler terms, it provides an extra step for you to manually call the wrapper function with the module instance and return a custom structure which you can then combine with the dep modules in the combiner function.

The default binder returns an object with the module name as a key and the wrapper as a value, from the example above:

```js
defaultBinder = (wrapper, module) => ({ [module.name]: wrapper(module) });
```

This will return an object like below for our `list` feature example:
The default binder returns an object with the module name as a key and the wrapper as a value, from the example above:

```js
Module = {
  // ... other features
  list: {
    moduleName: ["purchase_moduleName", "transaction_moduleName"]
    // ... dep modules
  }
};
```

If we wanted to provide a custom binder, and use the module instance instead of the name:

```js
const customBinder = (wrapper, module) => ({ [module.instance]: wrapper(module) });

Module = {
  // ... other features
  list: {
    module_1Ad2S: ["purchase_moduleName", "transaction_moduleName"]
    // ... dep modules
  }
};
```
