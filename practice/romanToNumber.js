let str = "XIX";
let map = {
  I: 1,
  V: 5,
  X: 10,
};
async function romanToNumber(str) {
  let sum = map[str[str.length - 1]];
  for (let i = str.length - 2; i >= 0; i--) {
    if (map[str[i]] >= map[str[i + 1]]) {
      sum += map[str[i]];
    } else {
      sum -= map[str[i]];
    }
  }
  const val =await new Promise((res, rej) => {
    setTimeout(() => {
     res(sum);
    }, 5000);
  });
  console.log(val);
}
romanToNumber(str)
