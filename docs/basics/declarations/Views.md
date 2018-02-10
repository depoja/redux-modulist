
# View Declaration

### Without Modulist

Normally we would declare a view like below:
```js
import React from "react";

const View = () => <div>Not a module!</div>;

export default View;
```

### With Modulist

With Modulist, we once again wrap the export with `Modulist.view` and a prop called `Module` with be passed to the React Component.
```js
import React from "react";
import Modulist from "redux-modulist";

const View = ({ Module }) => <div>Hello from {Module.instance}!</div> //"MyModule_12Sd1"

export default Modulist.view(View);
```
