function max(num) {
  var highNum = 0
  for(var i = 0; i <= num.length; i++) {
    if(num[i] > highNum) {
      highNum = num[i]
    }
  }
  return highNum
}

// function max(arr) {
//   var max = arr[0];
//   arr.forEach(function(i) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   });
//   return max;
// }

console.log(max([1,2,0,1,22,33,4]));
