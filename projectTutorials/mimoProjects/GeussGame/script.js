let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      feedbackElement.innerHTML = "Congratulations!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again.";
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again.";
      feedbackElement.style.color = "red";
      break;
    }
  }
  if(attempts === 0 && guess !== randomNumber){
    feedbackElement.innerHTML = "Your Number Of Attempts are over";
    feedbackElement.style.color = "Red";

  }
}

/**
 * let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; 

function checkGuess() {
  
  if (attempts === 10) {
    attempts--;
  } else if (attempts === 0) {
    console.log("No More Attempts");
  } else {
    console.log(attempts + " Attempts Left");
  }
  
  let inputElement = document.getElementById("guess").value;
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  if(guess === randomNumber){
    feedbackElement.innerHTML = 
    "Congraturation" + inputElement + "is Correct"; 
    feedbackElement.style.color = "green";
  }else if(guess < randomNumber){
    feedbackElement.innerHTML = "Too Low! Try Again";
    feedbackElement.style.color = "Red";

  }else{
    console.log("Number Too High");
    console.log(attempts + " Attempts Left");
  }
  if(attempts === 0 && guess !== randomNumber){
    feedbackElement.innerHTML = "Your Number Of Attempts are over";
    feedbackElement.style.color = "Red";

  }
}
 */