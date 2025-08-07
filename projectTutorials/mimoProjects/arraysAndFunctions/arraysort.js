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