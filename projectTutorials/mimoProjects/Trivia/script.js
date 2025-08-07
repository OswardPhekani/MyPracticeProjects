const question = "What is the name of Platinum Properties Developer";
const choices = ["Corey ", "Paul", "Tara", "osward"];
const correctAnswer = "osward";

function showanswer(){

document.getElementById("question").innerHTML = question;
for (let i = 0; i <choices.length; i ++ ){
        const btn = document.getElementById(`choice${i + 1}`);
        btn.innerHTML = choices[i];
        btn.value = choices[i];
}
}
function checkAnswer (button){
    if( button.value === correctAnswer){
        document.getElementById("result").innerHTML = "Correct !";
    }else{
        document.getElementById("result").innerHTML = "Wrong!";
    }
    for(let i = 1 ; i <= choices.length; i++){
        document.getElementById(`choices${i}`).disabled = true ;
    }

}
showanswer();



// const question = "What planet is known as the 'Red Planet'? ";

// const choices = ["Earth", "Mars", "Jupiter", "Saturn"];

// const correctAnswer = "Mars";

// function displayQuestion() {
//   document.getElementById("question").innerHTML = question;
//   for (let i = 0; i < choices.length; i++) {
//     // const btn = document.getElementById("choice1" + choices + i);
//     // const btn2 = document.getElementById("choice2" + choices );
//     // const btn3 = document.getElementById("choice3" + choices);
//     // const btn4 = document.getElementById("choice4" + choices);
//     const btn = document.getElementById(`choices ${i + 1}`);
//     btn.innerHTML = choices[i];
//     btn.value = choices[i];
    
//   }
// }

// function checkAnswer(button) {
//   if (button.value === correctAnswer ) {
//     document.getElementById("result").innerHTML = "Correct";
//   } else {
//     document.getElementById("result").innerHTML = "Wrong";
// }
// for (let i = 0; i <= choices.length; i++){
//             document.getElementById(`choices${i}`).disable = true;
// }
// }
// displayQuestion();

// const question = "What planet is known as the 'Red Planet'?";
// const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
// const correctAnswer = "Mars";

// function displayQuestion() {
//   document.getElementById('question').innerHTML = question;

//   for (let i = 0; i < 4; i++) {
//     const btn = document.getElementById(`choice${i+1}`);
//     btn.innerHTML = choices[i];
//     btn.value = choices[i];
//   }
// }

// function checkAnswer(button) {
//   if (button.value === correctAnswer) {
//     document.getElementById('result').innerHTML = "Correct!";
//   } else {
//     document.getElementById('result').innerHTML = "Wrong!";
//   }
//   for(let i = 1; i <= 4; i++){
//     document.getElementById(`choice${i}`).disabled = true;
//   }
// }

// displayQuestion();


// MY FINISHED FIRST CODE
// const question = "What planet is known as the 'Red Planet'? ";

// const choices = ["Earth", "Mars", "Jupiter", "Saturn"];

// const correctAnswer = "Mars";

// function displayQuestion() {
//   document.getElementById("question").innerHTML = question;
//   for (let i = 0; i < 4; i++) {
//     const btn = document.getElementById(`choice${i + 1}`);
//     btn.innerHTML = choices[i];
//     btn.value = choices[i];
//   }
// }

// function checkAnswer(button) {
//   if (button.value === correctAnswer) {
//     document.getElementById("result").innerHTML = "Correct";
//   } else {
//     document.getElementById("result").innerHTML = "Wrong";
//   }
//   for (let i = 0; i <= 4; i++) {
//     document.getElementById(`choices${i}`).disabled = true;
//   }
// }
// displayQuestion();
