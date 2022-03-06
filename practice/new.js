
Promise.resolve('first').then(res=>console.log(res))
console.log("second");
setTimeout(() => {
  console.log("third");
});
