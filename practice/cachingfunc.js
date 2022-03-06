const memoize = (func) => {
  const res = {};
  return (...args) => {
    const argsKeys = JSON.stringify(args);
    if (!res[argsKeys]) {
      res[argsKeys] = func(...args);
    }
    return res[argsKeys];
  };
};

const squareFunction = memoize((num) => {
  let square = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      square++;
    }
  }
  return square;
});
console.log('1st call')
const start = Date.now();
squareFunction(40000);
console.log(Date.now() - start);
console.log("2nd call");
const start1 = Date.now();
squareFunction(40000);
console.log(Date.now() - start1);


function runProgram(input) {
    // Write code here
  }
  if (process.env.USERNAME === "raman") {
    runProgram(`5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }