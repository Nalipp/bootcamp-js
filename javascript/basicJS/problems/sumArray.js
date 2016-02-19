function sumArray(arr) {
  var total = 0;
  arr.forEach(function(i) {
    total += i;
  });
  return total;
};

console.log(sumArray([10,3,10,4]));
