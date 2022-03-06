const md5 = require("md5");

let str = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < str.length; k++) {
      for (let l = 0; l < str.length; l++) {
        let value = str[i] + str[j] + str[k] + str[l];
        if ((md5(value) + "").includes("10f4a7")) {
          console.log(value);
          console.log(md5(value));
        }
      }
    }
  }
}
