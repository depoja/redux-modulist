
# Combiner
The _combiner function_ is yet another higher-order function and it declares how the structure returned from the _binder function_ will be combined with the structures of the other modules (dependencies of our module).

It accepts a `moduleFeature` argument (the modules feature), `depFeatures` argument (the dependencies features) and a `module` argument (the module instance object).

The default combiner will just perform an object apply, combining the module feature with it's dep features.

```js
const defaultCombiner = (moduleFeature, depFeatures, module) => ({
  [feature]: { ...moduleFeature, ...depFeatures }
});
```

It will combine every occurrence of the feature (the module and its deps) and put the result in the key 'list' of the module instance.

```js

Module = {
  list: {
    module_1Ad2S: ["purchase_moduleName", "transaction_moduleName"],
    myDep: [/*some content*/],
    myOtherDep: [/*some other content*/]
  }
};
```
We could provide a custom combiner for the feature.

```js
const customCombiner = (moduleFeature, depFeatures, module) => ({
  myAwesomeList: {
    all: {...moduleFeature, ...depFeatures },
    module: moduleFeature,
    deps: depFeatures
  }
});
```

The result would now look like below.

```js
Module = {
  myAwesomeList: {
    all: {
      module_1Ad2S: ["purchase_moduleName", "transaction_moduleName"],
      myDep: [/*some content*/],
      myOtherDep: [/*some other content*/]
    },
    module: {
      module_1Ad2S: ["purchase_moduleName", "transaction_moduleName"],
    },
    deps: {
      myDep: [/*some content*/],
      myOtherDep: [/*some other content*/]
    }
  }
};
```
