var eachli = document.querySelectorAll("li")

for(var i = 0; i < eachli.length; i++) {
  eachli[i].addEventListener("mouseover", function() {
    this.classList.add("new-font");
  });

  eachli[i].addEventListener("mouseout", function() {
    this.classList.remove("new-font");
  })

  eachli[i].addEventListener("click", function() {
    this.classList.toggle("done");
  })
}
