let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let copyArr = JSON.parse(JSON.stringify(arr));
console.log(arr == copyArr);
console.log(arr === copyArr);

let copyArr1 = [...arr];
console.log(arr == copyArr1);
console.log(arr === copyArr1);

let copyArr2 = Object.assign([], arr);
console.log(arr == copyArr2);
console.log(arr === copyArr2);
