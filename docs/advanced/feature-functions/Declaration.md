# Feature Declaration
The feature declaration is simply a _function_ with a `module` argument.

You can basically wrap any custom feature logic in a simple function with a `module` argument and you would have access to the Module instance object.

Here's how a feature you would use in your average component would look:

```js
const list = ["purchase", "transaction"];

export default list;
```

And here's the same example but using a feature declaration for `list`, appending the module name to each element:

```js
const list = module => ["purchase", "transaction"].map(i => i + "_" + module.name);

export default list;
```
