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

//print dir

var data = [
  {
    name: "All",
    children: [
      {
        name: "Fruit",
        children: [
          {
            name: "Apple",
            children: [{ name: "Green Apple" }, { name: "Red Apple" }]
          }
        ]
      },
      {
        name: "Main",
        children: [
          {
            name: "Rice",
            children: [{ name: "North Rice" }, { name: "South Rice" }]
          }
        ]
      },
      {
        name: "Houseware",
        children: [
          {
            name: "Computer",
            children: [{ name: "Mac" }, { name: "Windows" }]
          },
          {
            name: "Bath",
            children: [{ name: "soup" }, { name: "lotion" }]
          }
        ]
      }
    ]
  }
];

const printDataTree = (data, level = 1) => {
  console.log(level + ": " + data.name);

  if (data.children && data.children.length) {
    level++;
    data.children.forEach(child => printDataTree(child, level));
  }
};

console.log(printDataTree(data[0]));

//Tree node traverse

function Tree(value) {
  this.value = value;
  this.left = this.right = null;
}

const root = new Tree("1");
const node1 = new Tree("2-left-1");
const node2 = new Tree("2-left-2");
root.left = node1;
root.right = node2;
node1.left = new Tree("3-left-1");
node1.right = new Tree("3-left-2");
node2.left = new Tree("3-right-1");
node2.right = new Tree("3-right-2");

const traverseTree = node => {
  if (node !== null) {
    console.log(node.value);
    traverseTree(node.left);
    traverseTree(node.right);
  }
};

traverseTree(root);

//max depth

const maxDepth = root => {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left, root.right));
};

console.log(maxDepth(root));
