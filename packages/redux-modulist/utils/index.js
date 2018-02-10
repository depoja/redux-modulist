const deepFindKey = (obj, prop) => {
  const immediate = obj && obj[prop];
  if (!!immediate) {
    return immediate;
  }
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      const found = deepFindKey(val, prop);
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

export { deepFindKey, genUID, uniqueArr };
