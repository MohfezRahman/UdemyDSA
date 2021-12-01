function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
var t1 = performance.now();

var t2 = performance.now();
console.log(addUpTo(3));
console.log("Time Elapsed:" + (t1 - t2) / 1000 + "seconds.");
