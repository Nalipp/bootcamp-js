// console.log("numbers between -10 and 19");
// var count = -10;
//
// while (count < 20) {
//   console.log(count);
//   count++;
// }
//
// console.log("even numbers between 10 and 40");
// var count = 10;
//
// while (count <= 40) {
//   console.log(count);
//   count+=2;
// }
//
// console.log("odd numbers between 300 and 333");
// var count = 301;
//
// while (count <= 333) {
//   console.log(count);
//   count+=2;
// }
//
// console.log("numbers disible by 5 and 3 between 5 and 50");
// var count = 5;
//
// while (count <= 50) {
//   if (count % 3 === 0 && count % 5 === 0) {
//     console.log(count);
//   }
// count++;
// }

console.log("numbers between -10 and 19");
for(var i = -10; i < 20; i++) {
  console.log(i);
}

console.log("even numbers between 10 and 40");

for(var i = 10; i <= 40; i+=2) {
  console.log(i);
}

console.log("odd numbers between 300 and 333");

for(var i = 301; i <= 333; i+=2) {
  console.log(i)
}

console.log("numbers disible by 5 and 3 between 5 and 50");

for(var i = 5; i <= 50; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
