var pixel = document.getElementsByClassName("pixel")

for(var i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener("mouseover", function() {
    if(this.getAttribute("class") == "pixel pixel-no-color") {
      this.setAttribute("class", "pixel pixel-color");
    } else {
      this.setAttribute("class", "pixel pixel-no-color");
    }
  });
}






// var icon = document.getElementsByClassName("fa");
// // var fa = document.querySelectorAll("fa");
//
// for(var i = 0; i < icon.length; i++) {
//   icon[i].addEventListener("mouseover", function() {
//   if(this.getAttribute("class") == "fa fa-circle") {
//     this.setAttribute("class", "fa fa-circle-thin");
//   } else {
//     this.setAttribute("class", "fa fa-circle");
//   }
// });
// }
