const fruits = ['apples', 'bananas', 'oranges'];

function searchFruits(fruits, searchPhrase) {

 const foundFruit = fruits.find(fruit => fruit === searchPhrase);
 if (foundFruit) {
  console.log(searchPhrase + ' are in the fruit basket!');
 }
 else {
  console.log('No such fruit in the fruit basket!');

 }
}

searchFruits(fruits, 'apples');

const newNumbers = [];

function multiply(arrayOne, arrayTwo) {
 let product;
 for (let i = 0; i < arrayOne.length; i++) {
  product = arrayOne[i] * arrayTwo[i];
  newNumbers.push(product);
 }

}

multiply([1,2,3,4], [5,6,7,8]);

console.log(newNumbers);

// function multiply(numbers) {
 
//  for (let i = 0; i < numbers.length; i++
// ) {
//   numbers[i] = numbers[i] * 2;
//  }
// }

// multiply([1,2,3]);


const namesOfPeople = ["Osward", "Barbara" , "Mphatso"];

function printNames(namesOfPeople){
for( let i = 0; i< namesOfPeople.length; i ++){
    console.log(namesOfPeople[i]);
}
}
printNames(namesOfPeople);


// QUESTION TEST 

// In each loop iteration, multiply the current item in 
// the prices array by the current item in discounts, and save the result at the current index in the values array.

// CODE

const prices = [100, 150, 200];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
 let values = [];
 for (let i = 0; i < prices.length; i++) {
  values[i] = prices[i] * discounts[i];
   
 }
 console.log(values);
}
getValues(prices, discounts);