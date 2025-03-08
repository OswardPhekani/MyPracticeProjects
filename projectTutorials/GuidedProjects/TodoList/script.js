// Define the variable to get elements in the HTML FIle 
const inputBox = document.getElementById("input-box");
const listContainer  = document.getElementById("list-container");

// This Funsction addTask()
// adds a task to the Listcontainer tag, 
// checks if input is empty 

function addTask(){

    if (inputBox.value === ''){
        alert(" Please Add a Task ");
        }
        else {
            // create a dynamic list element li and assigh the inputvalue to it 
            let tasklist = document.createElement("li");
            tasklist.innerHTML = inputBox.value;
            // append child adds/displays the created Element data to the li in the html file 
            listContainer.appendChild(tasklist);

            // add the cross icon to cancle/ delete a task 
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            tasklist.appendChild(span);
        }
        // this leaves the task list input blank after a task is added 
        inputBox.value = "";
        saveData()

}
// Add New Event lister 
// removes tasks, when clicked 
listContainer.addEventListener("click",function(e){

    // This condition checks if a list is selected then toggles checked from the CSS class 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

}, false)


// Adds tasks to browser storage 
// Local storage on PC browser 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show the data stored in the browser 
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();