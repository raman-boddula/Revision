const { arch } = require("os");

function one(a, b, c) {
  return a + b + c;
}
//spread operator ... which basically does is converts a array into individual elements and passes to the function
// One-way
console.log(one(1, 5));

/// lets see if we have arr of elemnte to pass to a function as individial ele;

let arr = [2, 4];
console.log(one(arr)); ///logs out as 2,4undefined
console.log(one(...arr, 5)); //logs out 6 because wehave passed a indivual ele

///rest operator ...

//lets assume we have an array which we want to pass to a function and using rest oper we can any indefinite number of elements;

function two(...args) {
  ///basicall now args is array of elements you have passed
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(two(1, 3, 4, 6, 6, 7, 8, 8, 8, 9, 3)); //63
function three(a, b, ...args) {
  let sum = 0;
  let mul = a * b;
  for (const arg of args) {
    sum += arg;
  }
  return [mul, sum];
}
console.log(
  three(1, 2, 3, 4, 5, 9, 7, 6, 7, 8, 2, 3, 2, 6, 7, 8, 8, 9, 5, 8, 5)
); //if we the first two of those multiplication and remaing should be sum
