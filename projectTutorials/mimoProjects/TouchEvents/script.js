function cancelMessage(){
    document.getElementById("message").innerHTML = " Worf the message touch was Interrrupted !!";
}

console.log(cancelMessage());
document.getElementById("dog").addEventListener("touchcancel", cancelMessage);

function displayMessage(){
    document.getElementById("message").innerHTML = "Worlf";
}
document.getElementById("dog").addEventListener("touchstart", displayMessage);

console.log(displayMessage());

const input = document.querySelector('input');
const log = document.getElementById('log');

function updateValue() {
 log.innerText = input.value;
}
input.
onchange
 = updateValue;