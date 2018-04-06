const deepFindModule = (obj, instance) => {
  if (obj && obj._instance === instance) {
    return obj._module;
  }
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      const found = deepFindModule(val, instance);
      if (found) {
        return found;
      }
    }
  }
};

const genUID = () =>
  Date.now().toString(36) +
  Math.random()
    .toString(36)
    .substr(2, 5);

const uniqueArr = arr => [...new Set(arr)];

export { deepFindModule, genUID, uniqueArr };
