// function isEven(num) {
//   return(num % 2 === 0);
// }
// console.log(isEven(4));

// function factorial(num) {
//   var result = 1;
//   for(var i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result
// }
//
// console.log(factorial(10));

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}

console.log(kebabToSnake("hello-world"));
