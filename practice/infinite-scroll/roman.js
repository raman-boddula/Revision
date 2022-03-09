let str = "XVII";

let map = {
  I: 1,
  V: 5,
  X: 10,
};

var res = map[str[str.length - 1]]; // 5
function promiseBased() {
  return new Promise((resolve, reject) => {
      function hello() {
          for (let i = str.length - 2; i >= 0; i--) {
        if (map[str[i]] < map[str[i + 1]]) {
            res -= map[str[i]];
        } else {
            res += map[str[i]];
        }
    }
    return res;
};
    let val = hello();
    if (val%2===0) {
      resolve("hey promise has resolved");
      } else {
        reject("promise rejected")
    }
  });
}
promiseBased().then((response) => {
  console.log(response,res);
}).catch((err) => {console.log(err,res)});
