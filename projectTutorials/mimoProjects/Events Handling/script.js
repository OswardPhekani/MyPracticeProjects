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


const itemDiv = document.querySelector("div");

function changeColor() {
 itemDiv.classList.toggle("pink");
}
itemDiv.addEventListener("click", changeColor);