const { deepFindModule, genUID, uniqueArr } = require("./index");

const range = n => [...Array(n).keys()];
const hasDuplicates = arr => arr.some((_, i) => arr[i] === arr[i - 1]);

describe("Utils work as expected", () => {
  test("'genUID' generates a unique ID", () => {
    const ids = range(100).map(genUID);
    expect(hasDuplicates(ids)).toBe(false);
  });

  test("'uniqueArr' removes non-unique values from the given array", () => {
    const duplicate = [1, 3, 3, 2, 4, 1, 3, 2, 4];
    const unique = uniqueArr(duplicate);
    expect(hasDuplicates(unique)).toBe(false);
  });

  test("'deepFindModule' finds nested modules with the given instance id", () => {
    const module = {
      module1: {
        _instance: "uid1",
        _module: { name: "module1" },
        module2: {
          _instance: "uid2",
          _module: { name: "module2" },
          module3: {
            _instance: "uid3",
            _module: { name: "module3" }
          }
        }
      }
    };
    const module1 = deepFindModule(module, "uid1");
    const module2 = deepFindModule(module, "uid2");
    const module3 = deepFindModule(module, "uid3");

    expect(module1.name).toBe("module1");
    expect(module2.name).toBe("module2");
    expect(module3.name).toBe("module3");
  });
});
