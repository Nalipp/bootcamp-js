var button = document.querySelector("button");

button.addEventListener("click", function functionName() {
  document.body.classList.toggle("light-blue");
})

var h1 = document.querySelectorAll("h1");

for(var i = 0; i < h1.length; i++)
h1[i].addEventListener("click", function functionName() {
  this.classList.toggle("gray-text")
})
