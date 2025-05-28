const toDo = ["Code", "Gym", "Cook" ];
   toDo.push("GoToSleep ");

// for(let i = 0; i < toDo.length; i++){
// // console.log(toDo[i]);
// }
 

function halfNumbers(number){
    
const numberMultiply = number /2;
console.log(numberMultiply);
}
halfNumbers(20);

function multiplyByThree (number1){
    const result = number1 * 3;

    return result;   
}
const multiplyResult = multiplyByThree(100);
console.log(multiplyResult);

function printTasks (){
    const tomorrowTask = [
        "1 Wake Up", 
         "2 Meditate & Play ",
          "3 Set Goals", 
            "4 Wakeout", 
              "5 Plan The day",
                "6 Brush Teeth",
                    "7 eat BreakFast & French",
                        "8 Go to Work "
                    ];
                    const startTocode = tomorrowTask.push("Start Codding"); 

                    if(startTocode === true){
                        console.log(" You Have Started Coding ");
                    };
    
                    for(let i = 0 ; i < tomorrowTask.length; i++){
                        console.log(tomorrowTask[i]);
    
                    }
}
printTasks();

function returnAge (myAge ){

    const personalAge = " Im  with stored Value:" + myAge;
    return personalAge;

   
}
const myAgeIs = returnAge (28);
console.log(myAgeIs);

