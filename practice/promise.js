let arr = [1, 3, 5, 7, 9, 10, 1,1];
function getRes(arr) {
  return new Promise((resolve, reject) => {
    let sum = arr.reduce((acc, curr) => {
      return acc + curr;
    });
    if (sum % 2 == 0) {
      resolve(`array sum is even ${sum}`);
    } else {
      reject(`array sum is odd ${sum}`);
    }
  });
}
getRes(arr)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
