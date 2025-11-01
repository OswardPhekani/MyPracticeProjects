// function asyncExample(){
//      console.log("We're calculating the first 10,000 prime numbers.");
//      const arr = [2];
//      let number = 3;

//      while (arr.length < 10000){
//         for (let i = 2; i < number; i++){
//             if (number % i === 0 ){
//                 number++;
//                 break;
//             }
//             if(i === number - 1){
//                 arr.push(number);
//                 number++;
//                 break;
//             }
//         }
//      }
//      return Promise.resolve(arr);
// }
// asyncExample().then(function(value){
// console.log(`We calculated this first ${value.length} Prime Numbers `);
// });


// Simple ASYNCLONOUS async code
// Add a timeout print hello then prince function complete 

async function example() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("the timeout is done "),1500);
    });
    const output = await promise;
    console.log(output);
}
example();
console.log("Hello");

// CallBack Funstion adding numbers 
function add(number1,number2,callback){
    let result = number1 + number2;
    callback(result);
}

// this fuction will be passed as a parameter to be called by the Add fuction   
function logResult (ourResults){
    console.log(`This is the result ${ourResults}`);
}
add(2,3,logResult);


// the .Map synclonous 
const arr = [1, 2, 3, 4, 5];

function callback(num) {
 console.log(num * 2);
}
// create new array usning the .map function prints the whole allay before going to next code 
const newArray = arr.map(callback);
console.log("This code is synchronous.");

// filter even numbers in an Array synclonous Array filter 

const array1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function callBackF(num) {
//     return num % 2 === 0;
// }
// const newArrayF = array1.filter(callBackF);

// Shorten the COde with an arrow function 

const evenArray = (num) => num % 2 === 0;
    const newArrayF = array1.filter(evenArray);
console.log (newArrayF);
console.log ("ths Code is synclonous ");

// SYNCHRONY & ASYNCHRONY
// Print the word in reverse using Async and Sync

const word = "enola";
function reverseCallback(){
    const result = word.split("").reverse().join("");
    console.log(`The string reversed is ${result}`);
    console.log("Executed last because we're using asynchronous code.");
}

setTimeout(reverseCallback,1500);
console.log("Execute First ");