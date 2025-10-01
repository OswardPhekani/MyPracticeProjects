// TO DO LIST APP GUIDED PROJECT 

// this fuction creates a to do List Item 
// then Checks it when the list Item is clicked 
function createTodos(){
    // Dynamically create a list Item into the UL
const listItem = document.createElement("li");
const todoContainer = document.getElementById("todos-container");
// This code adds the created list item to the container parent element UL 
todoContainer.appendChild(listItem);

// These too line of code gets the user input and adds it to the list Item 
const inputItem = document.getElementById("note").value;
listItem.innerHTML = inputItem;

// add an attribute to call the todoCheck Functiion 
// listItem.setAttribute("onclick", "checkTodo(event, this)");
listItem.setAttribute("onclick", "checkTodo(event, this)");

// this line clear the input after the user have added a list item 
document.getElementById("note").value = "";


}

// this function delets the todo list 
function deleteTodos(){
const todoContainer = document.getElementById("todos-container").innerHTML = "";
}

// This function checks the list items once created it checks and unchecks the items 
function checkTodo(e, todo){
    
  if(todo.style.textDecoration === ''){
todo.style.textDecoration = 'line-through';
  }else{
    todo.style.textDecoration = '';
  }
}
