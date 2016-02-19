var todos = ["walk the voicebox"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodos();
  } else if(input === "delete") {
    deleteTodos();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP")

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}
function addTodos(){
  var newTodo = prompt("Enter new Todo.");
  todos.push(newTodo);
  console.log("Added Todo");
}
function deleteTodos(){
  var index = prompt("What index would you like to delete?")
  todos.splice(index, 1)
  console.log("Deleted Todo");
}
