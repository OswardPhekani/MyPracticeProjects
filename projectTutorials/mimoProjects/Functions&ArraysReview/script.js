// REVIEW EXERCISE 

// Create a program that adds  a task to an array of a TODO LIST 

// use factions to see if there are still task in to be done or if the list is empty 

/*
1. create an array of task add one task to it 
2. Create a function that when called it ADDs  some tasks,  ( Store this method )
3. Create a function that when called it REMOVEs tasks from the list, ( Store this method )
4. Create a function that checks if the tasks are complete, ( Store this method )
5. Create a functions that shows all the task Available, ( Store this method )


HTML TASK 
1. Create a Header with title MY TO DO LIST 
2. Creare a list of Tasks to dynamically add the task with javascript 
3. Add a button and from to add a task 
4. Add a button to check how many task you have 
5. Add A button to remove a task 

CSS TASK  ADD SOME STYLE !

*/

        console.log("----------------------------------------");
        console.log("|  THIS IS MY TODO LIST PROGRAM  |");
        console.log("----------------------------------------");

const taskOnTodoList = ["Gardens","Write some Code","Text mum ", "Call Agogo"];
let   addNewTask;
let   removeTask;
let   checkRemainingTasks; 



function addATaskFunction (newTask){
  const addTask =  "New Task :" + taskOnTodoList.push(newTask);
  return addTask;
   
}
addNewTask = addATaskFunction("Clean the House");

function removeTaskFunction(taskRemove){
    const removeATAsk = taskOnTodoList.pop(taskRemove);
    return removeATAsk;
}
// removeTask = removeTaskFunction();

function numberOfTaskAvailable(){
    for (let i = 0; i < taskOnTodoList.length; i++){
        console.log ("Your Task : " + taskOnTodoList[i]); 
    }
}
numberOfTaskAvailable();

function taskCompleted(){
        if(taskOnTodoList.length > 1){
            console.log(" No time To rest You have " + taskOnTodoList.length + " Tasks To Do"); 
        }else{
            console.log( " The List Is Complete on to the next Tasks ");
        }
}
taskCompleted();
// console.log(taskOnTodoList);

