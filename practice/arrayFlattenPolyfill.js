function customArrayFlat(arr, depth = 1) {
  let res = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      res.push(...customArrayFlat(ar, depth - 1));
    } else {
      res.push(ar);
    }
  });
  return res;
}
let arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11],
];
// console.log(customArrayFlat(arr));

let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: 6,
      h: 7,
      i: {
        j: 9,
        k: 10,
      },
    },
  },
  l: 30,
};
function flatObj(obj) {
  let newObj = [];
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      newObj = [...newObj, ...flatObj(obj[k])];
    } else {
      newObj.push(obj[k]);
    }
  }
  return newObj;
}
console.log(flatObj(obj));
