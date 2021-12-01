function addUpTo(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
var t1 = performance.now();

var t2 = performance.now();
console.log(addUpTo(3));
console.log("Time Elapsed:" + (t1 - t2) / 1000 + "seconds.");
