# The Feature Functions

When creating a new module using the `Modulist(config, customFeatures)` function, you must specify a `config` object containing feature declarations for your module and dependency modules.

Below is an example of a `list` feature containing declarations for `module`, `myDep` and `myOtherDep`.
The features handled by default by the Modulist library are `actions`, `reducers`, `selectors` and `views`.

```js
config: {
  // ... other features
  list: {
    module: moduleList,
    myDep: myDepList,
    myOtherDep: myOtherDepList
  }
  // ... other features
}
```

The feature declaration `moduleList` under the `module` key goes through a few steps when being injected with the Module instance object.

A high-level overview of the process would look like:
> The actual code does not follow the logic below, this is just for demonstration purposes.

```js
combiner( binder( wrapper( featureDeclaration ) ), depFeatures );
```

These steps are briefly explained below.

* [Feature Declaration](Declaration.md)
* [Wrapper](Wrapper.md)
* [Binder](Binder.md)
* [Combiner](Combiner.md)