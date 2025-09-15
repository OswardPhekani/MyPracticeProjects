// LEARNING ARROW FUNCTIONS

//Normal Function
function getGreetings (){
    return 'Greeting';
}
console.log(getGreetings());
// Arrow functions are anonymous :
// Meaning the dont have a name so store them in a variable 
// and call it with the parathesis (); at the end

// simple ARROW FUNCTION

// we can add parameters within the parathensis of an aroow function and call them in the function


// const greeting = (firstName) =>{
//     return 'hi' + firstName;
// }

// console.log(greeting(" tony"));


// if arrow function only has one statement we cna shorten further by leaving out the braces {};

const greeting = (firstName)=> "hi" + firstName;
console.log(greeting(' Tony'));

// Adding default Values to the parameteres in an Arrow FUCTION 
const getPrice = (total = 200 , discount = 3) => total - (discount * total);

console.log(getPrice());

// using a stored Variable to add to the function parameter
const getTotal =  (total)=>{
    const dicount = 0.25;
    return total - (dicount * total);
}
const finalTotal = getTotal(500);
console.log(finalTotal);
// console.log( getTotal(500));