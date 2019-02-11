//Get max depth of object

const obj = {
  a: [],
  b: { e: 2, f: 2, g: { h: 3, i: 3 } },
  c: { k: 1 }
};

const getMaxObjDepth = (obj, depth = 1) => {
  return Object.values(obj).reduce((pre, curr) => {
    if (typeof curr === "object") {
      return Math.max(pre, getMaxObjDepth(curr, depth + 1));
    }

    return depth;
  }, 0);
};

console.log(getMaxObjDepth(obj));

// Sum

const array = [1, 2, 3, 4, 5];

const sumNumbers = (array, sum = 0) => {
  if (array.length !== 0) {
    const [first, ...rest] = array;
    sum = first + sumNumbers(rest);
  }
  return sum;
};

console.log(sumNumbers(array));
