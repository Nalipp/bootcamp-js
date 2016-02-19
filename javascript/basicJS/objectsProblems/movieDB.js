var movies = [
  {
    title: "In Bruges",
    stars: 5,
    watched: "true",
  },
  {
    title: "Frozen",
    stars: "4.5",
    watched: "false"
  },
  {
    title: "Mad Max Fury Road",
    stars: "5",
    watched: "true"
  },
  {
    title: "Les Miserables",
    stars: "3.5",
    watched: "false"
  }
]

function movieList(mov) {
  for(var i = 0; i < mov.length; i++) {
    if(mov[i].watched == "true") {
    console.log("You have watched " + '"' + mov[i].title + '"' + " - " + mov[i].stars + " stars");
    }
    else {
      console.log("You have not watched " + '"' + mov[i].title + '"' + " - " + mov[i].stars + " stars");
    }
  }
}


movieList(movies)








//
