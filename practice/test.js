var obj = {};
var count = 0;
function sub(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let substr = "";
      for (let k = i; k < j; k++) {
        substr += arr[k];
      }
      if (obj[substr] == undefined) {
        obj[substr] = 1;
      } else {
        obj[substr]++;
      }
    }
  }
}
sub("engine");
console.log("---");
sub("raven");
console.log("---");

sub("ginkgo");
console.log(count, obj);
let max = 0;
for (let k in obj) {
  if (obj[k]) {
    if (k.length > max) {
      console.log(k, "->" + obj[k]);
      max = k.length;
    }
  }
}
console.log(max);

function sub(string, arr) {
  for (let i = 0; i < string.length; i++) {
    let sum = "";
    for (let j = i; j < string.length; j++) {
      sum += string[j];
      arr.push(sum);
    }
  }
  return arr;
}
let a1 = sub("engine", []);
let p1 = sub("raven", []);
let s1 = sub("ginkgo", []);
let max = 0;
for (let i = 0; i < a1.length; i++) {
  for (let j = 0; j < p1.length; j++) {
    if (a1[i] == p1[j]) {
      if (max < p1[j].length) {
        max = p1[j].length;
      }
    }
  }
}
let max1 = 0;
for (let i = 0; i < a1.length; i++) {
  for (let j = 0; j < s1.length; j++) {
    if (a1[i] == s1[j]) {
      if (max < s1[j].length) {
        max1 = s1[j].length;
      }
    }
  }
}
console.log(max + max1);

async function sleep(array) {
  array.forEach(async (el) => {
    return await ((el) => setTimeout(() => console.log(el), 1000 * el))(el);
  });
}
sleep([1, 2, 3, 4]);

obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 3;
console.log(obj1, obj2);

for (var i = 1; i < 4; i++)
  ((i) => setTimeout(() => console.log(i), 1000 * i))(i);
