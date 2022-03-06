a(function (resultA) {
  b(resultA, function (resultB) {
    c(resultB, function (resultC) {
      d(resultC, function (resultD) {
        e(resultD, function (resultE) {
          console.log(resultE);
        });
      });
    });
  });
});
a(() => {
    console.log('5')
});