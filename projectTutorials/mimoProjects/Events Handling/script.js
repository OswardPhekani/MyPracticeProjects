const input = document.querySelector('input');
const log = document.getElementById('log');

function updateValue() {
 log.innerText = input.value;
}
input.
onchange
 = updateValue;

//  Adding Multiple Events 
const item = document.querySelector("div");
const el = document.querySelectorAll("button");

function changeWidth(){
    item.classList.toggle("width");
}
function changeHeight(){
    item.classList.toggle("height");
}

el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);
el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);


// const itemDiv = document.querySelector("div");

// function changeColor() {
//  itemDiv.classList.toggle("pink");
// }
// itemDiv.addEventListener("click", changeColor);


//EVENT LISTENERS LEVEL UP 

// Change Text Area color on scroll 
const textArea = document.querySelector("textarea");

function  changeFontColor() {
  textArea.style.color= "green";
}
textArea.onscroll = changeFontColor;


// Change DIV tag Height 
const div = document.querySelector("div");

function changeHeight() {
 div.classList.toggle("height");
}
div.onclick = changeHeight;

// /* Change color DIV tag to blue when clicked using CSS */
const itemBlue = document.querySelector("div");

function changeColor() {
 item.classList.toggle("blue");
}
item.ondblclick = changeColor;

// <!-- Make Text Area directly  change Blue when Scrolled !-->
const textArea = document.querySelector("textarea");

function changeToBlue() {
 textArea.style.backgroundColor = "dodgerBlue";
}

function changeToGreen() {
 textArea.style.backgroundColor = "green";
}
textArea.onscroll = changeToBlue;

// <!-- Make Text Area change Blue when Scrolled style is in CSS FIle !-->

const itemRed = document.querySelector("div");

function changeColor() {
 itemRed.classList.toggle("red");
}
item.onclick = changeColor;