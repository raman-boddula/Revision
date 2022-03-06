setTimeout(() => {
  console.log("from the setTimeout");
}, 1000);
setImmediate(() => {
  console.log("from the setImmediate");
}, 1000);
  process.nextTick(() => (
    console.log("nextTick")
  ),1000)
