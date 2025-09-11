let score = 0;
const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
];

const correctAnswers = ["Mars", "Da Vinci"];
let currentQuestionsIndex = 0;

function displayQuestion() {
  if (currentQuestionsIndex < questions) {
    document.getElementById("question").innerHTML =
      questions[currentQuestionsIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionsIndex][i];
      btn.value = choicesArray[currentQuestionsIndex][i];
    }
  } else {
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`choice${i}`).disabled = true;
    }
  }
}

function checkAnswer(button) {
 if(button.value === correctAnswers.currentQuestionsIndex){
  document.getElementById("result").innerHTML= "Correct";
 }else {
  document.getElementById("result").innerHTML= "Wrong";
 }
}

displayQuestion();
