# Feature Declarations

## Introduction
The functions passed to features of the `config` object (ex. `config.actions.module`) are referred to as _feature declarations_.
A feature declaration __must__ be a function, since the _module instance object_, which is an object containing a reference to features scoped to the module instance, or some part of it will be passed as an argument.


## What can Declarators access?
The Module instance object is passed down a chain of features, `actions > reducers > selectors > customFeatures > views`. Each feature can access in the module object the features that come before it, so we can access actions in reducers, selectors, customFeatures and views, but not the other way around.

When adding custom features, you can specify the ordering yourself, so features can have full access to what they need.

## How are Features Declared?
Here is how features are declared with Modulist.

* [Actions](Actions.md)
* [Reducers](Reducers.md)
* [Selectors](Selectors.md)
* [Views](Views.md)