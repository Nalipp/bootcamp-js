function printReverse(arr) {
    newArr = [];
  for(var i = 0; i <= arr.length + 2; i++) {
    newArr.push(arr.pop(i));
  }
  console.log(newArr);
};

console.log(printReverse(["red", "yellow", "orange", "green"]))
